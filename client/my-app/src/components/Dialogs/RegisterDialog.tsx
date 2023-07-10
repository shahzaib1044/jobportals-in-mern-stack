import React from "react";
import { Dialog, DialogContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface dialogProps {
	open2: boolean;
	onClose2: () => void;
}

const RegisterDialog = (props: dialogProps) => {
	const { open2, onClose2 } = props;

	const navigate = useNavigate();

	return (
		<Dialog onClose={onClose2} open={open2}>
			<DialogContent sx={{ p: "30px" }}>
				<Button
					variant="contained"
					sx={{ m: "10px" }}
					onClick={() => {
						onClose2();
						navigate("/employer-registration");
					}}
				>
					Employer
				</Button>
				<Button
					variant="outlined"
					sx={{ m: "10px" }}
					onClick={() => {
						onClose2();
						navigate("/candidate-registration");
					}}
				>
					Candidate
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default RegisterDialog;
