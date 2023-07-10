import {
	Container,
	Paper,
	Stack,
	Typography,
	TextField,
	FormControl,
	Button,
	Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Resume = () => {
	const navigate = useNavigate();
	return (
		<Container maxWidth="sm" sx={{ p: "50px" }}>
			<Paper
				elevation={2}
				sx={{ p: "30px", borderRadius: "10px", background: "#f0f0e8" }}
			>
				<FormControl fullWidth>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={4}
					>
						<Typography variant="h3">Resume</Typography>
						<Stack
							direction="row"
							justifyContent="center"
							alignItems="flex-start"
							spacing={4}
							sx={{ width: "100%" }}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
									gap: "20px",
								}}
							>
								<Stack
									direction="column"
									justifyContent="center"
									alignItems="flex-start"
									spacing={1}
									sx={{ width: "100%" }}
								>
									<Typography variant="body1">Name</Typography>
									<TextField label="Name" size="small" sx={{ width: "100%" }} />
								</Stack>
								<Stack
									direction="column"
									justifyContent="center"
									alignItems="flex-start"
									spacing={1}
									sx={{ width: "100%" }}
								>
									<Typography variant="body1">Email</Typography>
									<TextField
										label="Email"
										type="email"
										size="small"
										sx={{ width: "100%" }}
									/>
								</Stack>

								<Stack
									direction="column"
									justifyContent="center"
									alignItems="flex-start"
									spacing={1}
									sx={{ width: "100%" }}
								>
									<Typography variant="body1">Work Experience</Typography>
									<TextField
										label="Experience"
										size="small"
										sx={{ width: "100%" }}
									/>
								</Stack>
							</Box>
						</Stack>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								gap: "20px",
							}}
						>
							<Stack
								direction="column"
								justifyContent="center"
								alignItems="flex-start"
								spacing={1}
								sx={{ width: "100%" }}
							>
								<Typography variant="body1">Phone Number</Typography>
								<TextField
									label="Phone Number"
									type="number"
									size="small"
									sx={{ width: "100%" }}
								/>
							</Stack>
							<Stack
								direction="column"
								justifyContent="center"
								alignItems="flex-start"
								spacing={1}
								sx={{ width: "100%" }}
							>
								<Typography variant="body1">Education</Typography>
								<TextField
									label="Education"
									size="small"
									sx={{ width: "100%" }}
								/>
							</Stack>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								gap: "20px",
							}}
						>
							<Stack
								direction="column"
								justifyContent="center"
								alignItems="flex-start"
								spacing={1}
								sx={{ width: "100%" }}
							>
								<Typography variant="body1"> Address</Typography>
								<TextField
									label="Address"
									multiline
									minRows={4}
									maxRows={7}
									sx={{ width: "100%" }}
								/>
							</Stack>
						</Box>
					</Stack>
					{/* <Button variant="contained" color="secondary" 
						 sx={{mt:"20px",mb:"20px"}}> */}
					<Button
						sx={{ mt: "20px", mb: "20px" }}
						variant="contained"
						onClick={() => {
							navigate("/Job-Listing", { replace: true });
						}}
						color="secondary"
					>
						<Typography variant="h6">Create Resume</Typography>
					</Button>
					{/* <Typography variant="subtitle2">
							<Link to="/login">Already have an account? Log In!</Link>
						</Typography> */}
				</FormControl>
			</Paper>
		</Container>
	);
};

export default Resume;
