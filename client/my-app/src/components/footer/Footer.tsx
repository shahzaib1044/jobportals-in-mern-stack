import { Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<Box
			sx={{
				background: "#030B1D",
				p: "70px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "stretch",
				gap: "40px",
			}}
		>
			<Stack direction="row" justifyContent="space-evenly" alignItems="center">
				<img src="/images/logo2_footer.png" alt="footer-logo" width="170px" />
				<Typography variant="h5" color="white">
					5000+ Talent Hunters
				</Typography>
				<Typography variant="h5" color="white">
					10000+ Talented candidates
				</Typography>
			</Stack>
			<Divider sx={{ background: "#4C4C4C" }} />
			<Typography variant="h6" color="#4C4C4C" textAlign="center">
				Copyright ©2023 All rights reserved
			</Typography>
		</Box>
	);
};

export default Footer;
