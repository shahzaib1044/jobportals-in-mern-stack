import React from "react";
import { Dialog, DialogContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface dialogProps {
	open1: boolean;
	onClose1: () => void;
}

const LoginDialog = (props: dialogProps) => {
	const { open1, onClose1 } = props;

	const navigate = useNavigate();

	return (
		<Dialog onClose={onClose1} open={open1}>
			<DialogContent sx={{ p: "30px" }}>
				<Button
					variant="contained"
					sx={{ m: "10px" }}
					onClick={() => {
						onClose1();
						navigate("/employer-login");
					}}
				>
					Employer
				</Button>
				<Button
					variant="outlined"
					sx={{ m: "10px" }}
					onClick={() => {
						onClose1();
						navigate("/candidate-login");
					}}
				>
					Candidate
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default LoginDialog;
