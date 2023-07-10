import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Container,
	Typography,
	List,
	ListItem,
	ListItemText,
	Button,
	Box,
} from "@mui/material";
import JobApplicationDialog from "../Dialogs/JobApplicationDialog";

interface Job {
	id: string;
	title: string;
	description: string;
}

const JobListing: React.FC = () => {
	const [jobs, setJobs] = useState<Job[]>([]);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	const fetchJobs = async () => {
		try {
			const response = await axios.get(
				"https://jobs.github.com/positions.json"
			);
			setJobs(response.data);
		} catch (error) {
			console.log(error);
			// Handle error
		}
	};

	const handleApplyJob = async (jobId: string) => {
		try {
			setOpen(true);

			// Send data to MongoDB or your desired endpoint
			console.log(`Applying for job with ID: ${jobId}`);
			// Handle successful application
		} catch (error) {
			console.log(error);
			// Handle error
		}
	};

	return (
		<Container maxWidth="sm" sx={{ p: "50px" }}>
			<Typography variant="h2" sx={{ mb: "30px" }} textAlign="center">
				Job Listings
			</Typography>
			<List>
				{jobs.map((job) => (
					<Box
						key={job.id}
						sx={{
							mb: 4,
							p: 2,
							borderRadius: 4,
							backgroundColor: "#f0f0f0",
						}}
					>
						<ListItem>
							<ListItemText
								primaryTypographyProps={{ variant: "h3" }}
								secondaryTypographyProps={{ variant: "body1" }}
								primary={job.title}
								secondary={job.description}
							/>

							<Button
								variant="contained"
								color="secondary"
								onClick={() => handleApplyJob(job.id)}
							>
								Apply
							</Button>
						</ListItem>
					</Box>
				))}
				<Box
					sx={{
						mb: 4,
						p: 2,
						borderRadius: 4,
						backgroundColor: "#f0f0f0",
					}}
				>
					<ListItem>
						<ListItemText
							primaryTypographyProps={{ variant: "h3" }}
							secondaryTypographyProps={{ variant: "body1" }}
							primary="MERN Stack Developer"
							secondary="Lorem ipsum dolor sit amet consectetur adipiscing elit, magna mollis sollicitudin lacinia quis facilisi nostra, leo penatibus volutpat class justo dui. Varius per hac convallis augue mauris diam hendrerit sem quam felis imperdiet, duis tellus mollis lectus suspendisse molestie fermentum vestibulum platea integer nisi, et ante feugiat eleifend netus arcu in tempor dictum magnis. Vitae ultricies sociis odio nascetur mi eros magna class, bibendum feugiat suspendisse senectus nibh varius ornare, risus vulputate purus maecenas cubilia dis nec. Scelerisque magnis in erat molestie, dui non mi vitae nisl, ligula conubia congue. Varius volutpat platea vulputate natoque torquent diam, facilisi mollis praesent pulvinar feugiat montes, dis mattis consequat nam bibendum. Proin accumsan scelerisque orci malesuada nullam morbi taciti, molestie per arcu posuere nascetur primis dapibus inceptos, fermentum viverra nisl felis tincidunt interdum."
							sx={{
								overflow: "hidden",
								textOverflow: "ellipsis",
								display: "-webkit-box",
								lineClamp: 7,
								WebkitLineClamp: 7,
								WebkitBoxOrient: "vertical",
							}}
						/>

						<Button
							variant="contained"
							color="secondary"
							onClick={() => handleApplyJob("1")}
						>
							Apply
						</Button>
					</ListItem>
				</Box>
			</List>
			<JobApplicationDialog open={open} onClose={handleClose} />
		</Container>
	);
};

export default JobListing;
