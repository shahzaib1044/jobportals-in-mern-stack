import React from "react";
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
import { Link } from "react-router-dom";

const CanRegistration = () => {
	return (
		<Container maxWidth="xs" sx={{ p: "50px" }}>
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
						<Typography variant="h4">Register to Apply for Jobs</Typography>
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
									<Typography variant="body1">Password</Typography>
									<TextField
										label="Password"
										type="password"
										size="small"
										sx={{ width: "100%" }}
									/>
								</Stack>
							</Box>
						</Stack>
						<Button variant="contained" color="secondary">
							<Typography variant="h6">Register</Typography>
						</Button>
						<Typography variant="subtitle2">
							<Link to="/login">Already have an account? Log In!</Link>
						</Typography>
					</Stack>
				</FormControl>
			</Paper>
		</Container>
	);
};

export default CanRegistration;
