import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Footer from "./components/footer/Footer";
import JobPosting from "./pages/JobPosting";
import EditJob from "./pages/EditJob";
import Resume from "./components/Resume/Resume";
import JobListing from "./components/JobListing/JobListing";
import CanLogin from "./components/loginForm/CanLogin";
import CanRegistration from "./components/registrationForm/CanRegistration";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employer-login" element={<Login />} />
				<Route path="/candidate-login" element={<CanLogin />} />
				<Route path="/employer-registration" element={<Registration />} />
				<Route path="/candidate-registration" element={<CanRegistration />} />
				<Route path="/job-posting" element={<JobPosting />} />
				<Route path="/edit-job" element={<EditJob />} />
				<Route path="/upload-resume" element={<Resume />} />
				<Route path="/Job-Listing" element={<JobListing />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
