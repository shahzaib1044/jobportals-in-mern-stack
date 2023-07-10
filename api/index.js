const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// set up middleware
app.use(bodyParser.json());

const MONGODB_URI =
	process.env.MONGODB_URI || "mongodb://localhost:27017/job-portal";
const PORT = process.env.PORT || 5000;

// connect to MongoDB database
mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.error("Could not connect to MongoDB...", err));

// define user schema
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
});
const jobSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	location: {
		type: String,
	},
	salary: {
		type: Number,
	},
	employer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	applicants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Resume",
		},
	],
});

const Job = mongoose.model("Job", jobSchema);
// define user model
const User = mongoose.model("User", userSchema);

// define resume schema
const resumeSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	address: String,
	education: String,
	experience: String,
});

// define resume model
const Resume = mongoose.model("Resume", resumeSchema);

// helper functions for JWT authentication
const generateAuthToken = function (user) {
	const token = jwt.sign({ _id: user._id }, "jwtPrivateKey");
	return token;
};

const verifyAuthToken = function (req, res, next) {
	const token = req.header("Authorization");
	if (!token) return res.status(401).send("Access denied. No token provided.");

	try {
		const decoded = jwt.verify(token, "jwtPrivateKey");
		req.user = decoded;
		next();
	} catch (ex) {
		res.status(400).send("Invalid token.");
	}
};

// employer routes
app.post("/employers/signup", async (req, res) => {
	let employer = await User.findOne({ email: req.body.email });
	if (employer) return res.status(400).send("User already registered.");

	employer = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	employer = await employer.save();

	const token = generateAuthToken(employer);
	res.header("Authorization", token).send(employer);
});

app.post("/employers/login", async (req, res) => {
	let employer = await User.findOne({ email: req.body.email });
	if (!employer) return res.status(400).send("Invalid email or password.");

	if (req.body.password != employer.password) {
		return res.status(400).send("Invalid email or password.");
	}
	const token = generateAuthToken(employer);
	res.header("Authorization", token).send(employer);
});

app.get("/employers/me", verifyAuthToken, async (req, res) => {
	const employer = await User.findById(req.user._id).select("-password");
	res.send(employer);
});

app.get("/employers", verifyAuthToken, async (req, res) => {
	const employers = await User.find().select("-password");
	res.send(employers);
});

app.post("/employers", verifyAuthToken, async (req, res) => {
	let employer = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	employer = await employer.save();
	res.send(employer);
});

app.get("/employers/:id", verifyAuthToken, async (req, res) => {
	const employer = await User.findById(req.params.id).select("-password");
	if (!employer)
		return res
			.status(404)
			.send("The employer with the given ID was not found.");
	res.send(employer);
});

app.patch("/employers/:id", verifyAuthToken, async (req, res) => {
	const employer = await User.findByIdAndUpdate(
		req.params.id,
		{ name: req.body.name },
		{ new: true }
	);
	if (!employer)
		return res
			.status(404)
			.send("The employer with the given ID was not found.");
	res.send(employer);
});

app.delete("/employers/:id", verifyAuthToken, async (req, res) => {
	const employer = await User.findByIdAndRemove(req.params.id);
	if (!employer)
		return res
			.status(404)
			.send("The employer with the given ID was not found.");
	res.send(employer);
});

// job routes
app.get("/jobs", verifyAuthToken, async (req, res) => {
	const jobs = await Job.find();
	res.send(jobs);
});

app.post("/jobs", async (req, res) => {
	let job = new Job({
		title: req.body.title,
		description: req.body.description,
		location: req.body.location,
		salary: req.body.salary,
	});
	job = await job.save();
	res.send(job);
});

app.get("/jobs/:id", verifyAuthToken, async (req, res) => {
	const job = await Job.findById(req.params.id);
	if (!job)
		return res.status(404).send("The job with the given ID was not found.");
	res.send(job);
});

app.patch("/jobs/:id", verifyAuthToken, async (req, res) => {
	const job = await Job.findByIdAndUpdate(
		req.params.id,
		{ title: req.body.title },
		{ new: true }
	);
	if (!job)
		return res.status(404).send("The job with the given ID was not found.");
	res.send(job);
});

app.delete("/jobs/:id", verifyAuthToken, async (req, res) => {
	const job = await Job.findByIdAndRemove(req.params.id);
	if (!job)
		return res.status(404).send("The job with the given ID was not found.");
	res.send(job);
});

// candidate routes
app.post("/candidates/signup", async (req, res) => {
	let candidate = await User.findOne({ email: req.body.email });
	if (candidate) return res.status(400).send("User already registered.");

	candidate = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	candidate = await candidate.save();

	const token = generateAuthToken(candidate);
	res.header("Authorization", token).send(candidate);
});

app.post("/candidates/login", async (req, res) => {
	let candidate = await User.findOne({ email: req.body.email });
	if (!candidate) return res.status(400).send("Invalid email or password.");

	if (req.body.password != candidate.password) {
		return res.status(400).send("Invalid email or password.");
	}
	const token = generateAuthToken(candidate);
	res.header("Authorization", token).send(candidate);
});

app.get("/candidates/me", verifyAuthToken, async (req, res) => {
	const candidate = await User.findById(req.user._id).select("-password");
	res.send(candidate);
});

app.patch("/candidates/me", verifyAuthToken, async (req, res) => {
	const candidate = await User.findByIdAndUpdate(
		req.user._id,
		{ name: req.body.name },
		{ new: true }
	);
	if (!candidate)
		return res
			.status(404)
			.send("The candidate with the given ID was not found.");
	res.send(candidate);
});

app.post(
	"/candidates/resume",
	verifyAuthToken,
	upload.single("resume"),
	async (req, res) => {
		if (!req.file) return res.status(400).send("No resume file uploaded.");

		let candidate = await User.findById(req.user._id);
		if (!candidate)
			return res
				.status(404)
				.send("The candidate with the given ID was not found.");

		candidate.resume = {
			data: fs.readFileSync(
				path.join(__dirname, "../uploads/" + req.file.filename)
			),
			contentType: "application/pdf",
			filename: req.file.originalname,
		};

		candidate = await candidate.save();
		res.send(candidate);
	}
);

app.get("/candidates/resume", verifyAuthToken, async (req, res) => {
	const candidate = await User.findById(req.user._id);
	if (!candidate)
		return res
			.status(404)
			.send("The candidate with the given ID was not found.");
	if (!candidate.resume)
		return res.status(404).send("No resume found for the candidate.");

	res.set("Content-Type", candidate.resume.contentType);
	res.set(
		"Content-Disposition",
		"inline; filename=" + candidate.resume.filename
	);
	res.send(candidate.resume.data);
});

app.patch(
	"/candidates/resume",
	verifyAuthToken,
	upload.single("resume"),
	async (req, res) => {
		if (!req.file) return res.status(400).send("No resume file uploaded.");

		let candidate = await User.findById(req.user._id);
		if (!candidate)
			return res
				.status(404)
				.send("The candidate with the given ID was not found.");

		candidate.resume = {
			data: fs.readFileSync(
				path.join(__dirname, "../uploads/" + req.file.filename)
			),
			contentType: "application/pdf",
			filename: req.file.originalname,
		};

		candidate = await candidate.save();
		res.send(candidate);
	}
);

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

app.get("/", (req, res) => {
	res.send("hello");
});
