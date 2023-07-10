import React from "react";
import {
	Box,
	Stack,
	Divider,
	Paper,
	Typography,
	IconButton,
} from "@mui/material";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteIcon from "@mui/icons-material/Delete";

const PostedJobs = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				p: "40px",
				gap: "35px",
			}}
		>
			<Typography variant="h3">Your Posted jobs</Typography>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={3}
				divider={<Divider sx={{ background: "#4C4C4C", width: "60vw" }} />}
				sx={{ width: "100%" }}
			>
				<Paper
					sx={{
						p: "30px",
						background: "#f0f0e8",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItem: "stretch",
						width: "60vw",
						gap: "10px",
					}}
				>
					<Typography
						variant="h4"
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "30px",
						}}
					>
						Job Title
						<Typography variant="h5">Location</Typography>
					</Typography>
					<Typography
						variant="subtitle2"
						sx={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							display: "-webkit-box",
							lineClamp: 3,
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipiscing elit, sapien
						tellus egestas hendrerit vitae sociis, magna diam ultricies vivamus
						placerat inceptos. Turpis per sodales vulputate condimentum aliquam
						et, nunc mauris nisl parturient risus magnis sem, magna dictumst
						lectus placerat praesent. Semper molestie parturient neque mus
						vivamus cras eleifend ultricies taciti, dictum rhoncus augue
						venenatis pretium et phasellus per bibendum egestas, conubia cubilia
						facilisi nisl imperdiet nam morbi tempor. Sodales a platea curae
						placerat conubia augue, sociosqu natoque tincidunt donec.
					</Typography>
					<Stack
						direction="row"
						justifyContent="flex-end"
						alignItems="center"
						spacing={2}
					>
						<IconButton color="warning">
							<ModeEditRoundedIcon sx={{ fontSize: "30px" }} />
						</IconButton>
						<IconButton color="error">
							<DeleteIcon sx={{ fontSize: "30px" }} />
						</IconButton>
					</Stack>
				</Paper>
				<Paper
					sx={{
						p: "30px",
						background: "#f0f0e8",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItem: "stretch",
						width: "60vw",
						gap: "10px",
					}}
				>
					<Typography
						variant="h4"
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "30px",
						}}
					>
						Job Title
						<Typography variant="h5">Location</Typography>
					</Typography>
					<Typography
						variant="subtitle2"
						sx={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							display: "-webkit-box",
							lineClamp: 3,
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipiscing elit, sapien
						tellus egestas hendrerit vitae sociis, magna diam ultricies vivamus
						placerat inceptos. Turpis per sodales vulputate condimentum aliquam
						et, nunc mauris nisl parturient risus magnis sem, magna dictumst
						lectus placerat praesent. Semper molestie parturient neque mus
						vivamus cras eleifend ultricies taciti, dictum rhoncus augue
						venenatis pretium et phasellus per bibendum egestas, conubia cubilia
						facilisi nisl imperdiet nam morbi tempor. Sodales a platea curae
						placerat conubia augue, sociosqu natoque tincidunt donec.
					</Typography>
					<Stack
						direction="row"
						justifyContent="flex-end"
						alignItems="center"
						spacing={2}
					>
						<IconButton color="warning">
							<ModeEditRoundedIcon sx={{ fontSize: "30px" }} />
						</IconButton>
						<IconButton color="error">
							<DeleteIcon sx={{ fontSize: "30px" }} />
						</IconButton>
					</Stack>
				</Paper>
			</Stack>
		</Box>
	);
};

export default PostedJobs;
