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

const EditJob = () => {
	return (
		<Container maxWidth="sm" sx={{ p: "50px" }}>
			<Paper
				elevation={2}
				sx={{ p: "40px", borderRadius: "10px", background: "#f0f0e8" }}
			>
				<FormControl fullWidth>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={4}
					>
						<Typography variant="h4">Edit the Job</Typography>
						<Stack
							direction="column"
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
									gap: "30px",
								}}
							>
								<Stack
									direction="column"
									justifyContent="center"
									alignItems="flex-start"
									spacing={1}
									sx={{ width: "100%" }}
								>
									<Typography variant="body1">Job Title</Typography>
									<TextField
										label="Job Title"
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
									<Typography variant="body1">Location</Typography>
									<TextField
										label="Location"
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
									gap: "30px",
								}}
							>
								<Stack
									direction="column"
									justifyContent="center"
									alignItems="flex-start"
									spacing={1}
									sx={{ width: "100%" }}
								>
									<Typography variant="body1">Salary</Typography>
									<TextField
										label="Salary"
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
									<Typography variant="body1">Description</Typography>
									<TextField
										label="Description"
										multiline
										minRows={4}
										size="small"
										sx={{ width: "100%" }}
									/>
								</Stack>
							</Box>
						</Stack>
						<Button variant="contained" color="secondary">
							<Typography variant="h6">Post Job</Typography>
						</Button>
					</Stack>
				</FormControl>
			</Paper>
		</Container>
	);
};

export default EditJob;
