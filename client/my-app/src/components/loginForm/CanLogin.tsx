import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Paper,
	Stack,
	Typography,
	TextField,
	FormControl,
	Button,
} from "@mui/material";

const LoginForm = () => {
	const navigate = useNavigate(); // Access the navigate function

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setPassword(e.target.value);
	};

	const handleLogin = async () => {
		try {
			const response = await fetch("http://localhost:3000/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await response.json();

			if (response.ok) {
				// Login successful, perform necessary actions (e.g., redirect)
				console.log(data.message);
				navigate("/Job-Listing"); // Use navigate function to navigate to the desired route
			} else {
				// Login failed, display error message
				console.error(data.message);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

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
								value={email}
								onChange={handleEmailChange}
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
								value={password}
								onChange={handlePasswordChange}
							/>
						</Stack>
						<Button variant="contained" onClick={handleLogin}>
							Login
						</Button>
					</Stack>
				</FormControl>
			</Paper>
		</Container>
	);
};

export default LoginForm;
