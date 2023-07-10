import { Dialog, DialogContent, Button, Typography } from "@mui/material";

interface dialogProps {
	open: boolean;
	onClose: () => void;
}

const JobApplicationDialog = (props: dialogProps) => {
	const { open, onClose } = props;

	return (
		<Dialog onClose={onClose} open={open}>
			<DialogContent
				sx={{
					p: "30px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "30px",
					width: "30vw",
				}}
			>
				<Typography variant="h5" textAlign="center">
					Your Application has been submitted successfully!
				</Typography>
				<Button variant="contained" onClick={onClose}>
					Ok, Great!
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default JobApplicationDialog;
