import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import { useNavigate } from "react-router-dom";

const Categories = () => {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				p: "70px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "30px",
			}}
		>
			<Typography
				variant="h3"
				fontWeight="bold"
				color="#28395A"
				textAlign="center"
				sx={{ mb: "30px" }}
			>
				Our Most Common Categories
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={6} sm={6} md={3}>
					<Paper
						variant="outlined"
						sx={{
							p: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "25vh",
						}}
					>
						<PersonalVideoIcon sx={{ color: "#28395A", fontSize: "100px" }} />
						<Typography variant="h6">Desktop Development</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6} sm={6} md={3}>
					<Paper
						variant="outlined"
						sx={{
							p: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "25vh",
						}}
					>
						<CodeIcon sx={{ color: "#28395A", fontSize: "100px" }} />
						<Typography variant="h6">Web Development</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6} sm={6} md={3}>
					<Paper
						variant="outlined"
						sx={{
							p: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "25vh",
						}}
					>
						<TrendingUpIcon sx={{ color: "#28395A", fontSize: "100px" }} />
						<Typography variant="h6">Sales and Marketing</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6} sm={6} md={3}>
					<Paper
						variant="outlined"
						sx={{
							p: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "25vh",
						}}
					>
						<DeveloperModeIcon sx={{ color: "#28395A", fontSize: "90px" }} />
						<Typography variant="h6">Android Development</Typography>
					</Paper>
				</Grid>
			</Grid>
			{/* <Button
				variant="contained"
				sx={{ textTransform: "none" }}
				onClick={() => {
					navigate("/talent-search", { replace: true });
				}}
			>
				Find more talent
			</Button> */}
		</Box>
	);
};

export default Categories;
