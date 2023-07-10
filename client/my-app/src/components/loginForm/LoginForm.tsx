import React from "react";
import {
	Container,
	Paper,
	Stack,
	Typography,
	TextField,
	FormControl,
	Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm = () => {
	return (
		<Container maxWidth="xs" sx={{ p: "40px" }}>
			<Paper
				elevation={2}
				sx={{ p: "30px", borderRadius: "10px", background: "#f0f0e8" }}
			>
				<FormControl fullWidth>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="stretch"
						spacing={4}
					>
						<Typography variant="h4">Login</Typography>
						<Stack
							direction="column"
							justifyContent="center"
							alignItems="flex-start"
							spacing={1}
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
						>
							<Typography variant="body1">Password</Typography>
							<TextField
								label="Password"
								type="password"
								size="small"
								sx={{ width: "100%" }}
							/>
						</Stack>
						<Button variant="contained">Login</Button>
						<Typography variant="subtitle2">
							<Link to="/registration">Don't have an account? Sign Up!</Link>
						</Typography>
					</Stack>
				</FormControl>
			</Paper>
		</Container>
	);
};

export default LoginForm;
