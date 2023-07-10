import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
	return (
		<Box
			sx={{
				background: "url('/images/h1_hero.jpg')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
				backgroundPosition: "fixed",
				height: "90vh",
				pl: "70px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "flex-start",
				gap: "10px",
			}}
		>
			<Typography variant="h2" fontWeight="900" color="#28395A">
				Find the
			</Typography>
			<Typography variant="h2" fontWeight="900" color="#28395A">
				most exciting
			</Typography>
			<Typography variant="h2" fontWeight="900" color="#28395A">
				IT jobs
			</Typography>
		</Box>
	);
};

export default Banner;
