import { useState, useContext } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	MenuItem,
	Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUser } from "../../contexts/currentUserContext";
import LoginDialog from "../Dialogs/LoginDialog";
import RegisterDialog from "../Dialogs/RegisterDialog";

const Header = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const [open1, setOpen1] = useState(false);

	const [open2, setOpen2] = useState(false);

	const handleClickOpen1 = () => {
		setOpen1(true);
	};

	const handleClose1 = () => {
		setOpen1(false);
	};

	const handleClickOpen2 = () => {
		setOpen2(true);
	};

	const handleClose2 = () => {
		setOpen2(false);
	};

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const [currentUser, setCurrentUser] = useContext(CurrentUser);

	console.log(currentUser);

	const navigate = useNavigate();

	return (
		<AppBar position="static">
			<Container maxWidth="xl" sx={{}}>
				<Toolbar>
					{/** Mobile View of Header **/}

					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="h5"
							component="div"
							noWrap
							sx={{
								display: { xs: "flex", md: "none" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
								pl: "20px",
							}}
						>
							<img
								src="/images/flight-axis-logo.png"
								alt="logo"
								width="150vw"
							/>
						</Typography>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									textAlign="center"
									sx={{
										display: "block",
										margin: "10px",
										textDecoration: "none",
									}}
								>
									<Link
										style={{ textDecoration: "none", color: "black" }}
										to="/"
									>
										Home
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									sx={{
										display: "block",
										margin: "10px",
										textDecoration: "none",
									}}
									textAlign="center"
								>
									<Link
										to="/contact-us"
										style={{ textDecoration: "none", color: "black" }}
									>
										Contact Us
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									sx={{
										display: "block",
										margin: "10px",
										textDecoration: "none",
									}}
									textAlign="center"
								>
									<Link
										style={{ textDecoration: "none", color: "black" }}
										to="/about-us"
									>
										About Us
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Button variant="contained">Get a Quote</Button>
							</MenuItem>
						</Menu>
					</Box>

					{/** Desktop View of Header **/}

					<Typography
						variant="body1"
						component="h6"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
						}}
					>
						<img
							src="/images/logo2_footer.png"
							alt="logo"
							style={{ marginLeft: "50px" }}
							width="160px"
						/>
					</Typography>

					<Box
						sx={{
							width: "100%",
							display: { xs: "none", md: "flex" },
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								pl: "30px",
								pr: "30px",
								height: "90px",
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								gap: "20px",
							}}
						>
							<Typography
								variant="body1"
								component="p"
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: "block",
									margin: "10px",
									textDecoration: "none",
								}}
							>
								<Link style={{ textDecoration: "none", color: "white" }} to="/">
									Home
								</Link>
							</Typography>
							<Typography
								variant="body1"
								component="p"
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: "block",
									margin: "10px",
									textDecoration: "none",
								}}
							>
								{currentUser.type === "seller" ? (
									<Link
										style={{ textDecoration: "none", color: "white" }}
										to="/find-jobs"
									>
										Find a Job
									</Link>
								) : (
									<Link
										style={{ textDecoration: "none", color: "white" }}
										to="/job-posting"
									>
										Post a Job
									</Link>
								)}
							</Typography>
							<Typography
								variant="body1"
								component="p"
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: "white",
									display: "block",
									margin: "10px",
									textDecoration: "none",
								}}
							>
								<Link
									to="/contact"
									style={{ textDecoration: "none", color: "white" }}
								>
									Contact
								</Link>
							</Typography>
							<Box
								sx={{
									display: currentUser.id === null ? "flex" : "none",
									gap: "20px",
								}}
							>
								<Button
									variant="contained"
									onClick={handleClickOpen1}
									color="secondary"
								>
									Login
								</Button>
								<Button
									variant="contained"
									color="warning"
									onClick={handleClickOpen2}
								>
									Register
								</Button>
								<LoginDialog open1={open1} onClose1={handleClose1} />
								<RegisterDialog open2={open2} onClose2={handleClose2} />
							</Box>
						</Box>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
