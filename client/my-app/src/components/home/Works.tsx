import { useContext } from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { CurrentUser } from "../../contexts/currentUserContext";

const Works = () => {
	const [currentUser, setCurrentUser] = useContext(CurrentUser);
	return (
		<Box
			sx={{
				background: "url('/images/how-applybg.png')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
				p: "70px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "stretch",
				gap: "30px",
			}}
		>
			<Typography
				variant="h3"
				color="white"
				fontWeight="bold"
				textAlign="center"
			>
				How it works
			</Typography>
			{currentUser.type === "employer" ? (
				<Stack
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Paper
						sx={{
							background: "#26317F",
							p: "40px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "20px",
							height: "40vh",
							width: "20vw",
						}}
					>
						<ContentPasteSearchIcon
							sx={{ fontSize: "100px", color: "white" }}
						/>
						<Typography variant="h5" color="white" textAlign="center">
							1. Post a Job
						</Typography>
						<Typography
							variant="subtitle1"
							color="white"
							textAlign="center"
							sx={{ opacity: 0.5 }}
						>
							Post a job according to your needs
						</Typography>
					</Paper>
					<Paper
						sx={{
							background: "#26317F",
							p: "40px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "20px",
							height: "40vh",
							width: "20vw",
						}}
					>
						<PersonIcon sx={{ fontSize: "100px", color: "white" }} />
						<Typography variant="h5" color="white" textAlign="center">
							2. Wait for candidates
						</Typography>
						<Typography
							variant="subtitle1"
							color="white"
							textAlign="center"
							sx={{ opacity: 0.5 }}
						>
							Eligible candidates will apply when they see the job
						</Typography>
					</Paper>
				</Stack>
			) : (
				<Stack
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Paper
						sx={{
							background: "#26317F",
							p: "40px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "20px",
							height: "40vh",
							width: "20vw",
						}}
					>
						<ContentPasteSearchIcon
							sx={{ fontSize: "100px", color: "white" }}
						/>
						<Typography variant="h5" color="white" textAlign="center">
							1. Search a Job
						</Typography>
						<Typography
							variant="subtitle1"
							color="white"
							textAlign="center"
							sx={{ opacity: 0.5 }}
						>
							Search a job according to your skills, location, and salary
							demands
						</Typography>
					</Paper>
					<Paper
						sx={{
							background: "#26317F",
							p: "40px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "20px",
							height: "40vh",
							width: "20vw",
						}}
					>
						<PersonIcon sx={{ fontSize: "100px", color: "white" }} />
						<Typography variant="h5" color="white" textAlign="center">
							2. Apply for Job
						</Typography>
						<Typography
							variant="subtitle1"
							color="white"
							textAlign="center"
							sx={{ opacity: 0.5 }}
						>
							Apply for the job if it fits your requirements
						</Typography>
					</Paper>
					<Paper
						sx={{
							background: "#26317F",
							p: "40px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "20px",
							height: "40vh",
							width: "17vw",
						}}
					>
						<PersonAddIcon sx={{ fontSize: "100px", color: "white" }} />
						<Typography variant="h5" color="white" textAlign="center">
							3. Get your Job
						</Typography>
						<Typography
							variant="subtitle1"
							color="white"
							textAlign="center"
							sx={{ opacity: 0.5 }}
						>
							Get the job when the company sees you fit for the post
						</Typography>
					</Paper>
				</Stack>
			)}
		</Box>
	);
};

export default Works;
