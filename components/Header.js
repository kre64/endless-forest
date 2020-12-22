import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PublicIcon from "@material-ui/icons/Public";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InfoIcon from "@material-ui/icons/Info";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuTitle = styled(Typography)`
	flex-grow: 1;
`;

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

const HideOnScroll = ({ children, window }) => {
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
};

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const Header = ({ loggedIn, loginHandler, logoutHandler }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [homeEl, setHomeEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const homeOpen = Boolean(homeEl);

	useEffect(() => {
		if (loggedIn) {
			handleClose();
			handleHomeClose();
		}
	}, [loggedIn]);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleHomeMenu = (event) => {
		setHomeEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleHomeClose = () => {
		setHomeEl(null);
	};

	return (
		<HideOnScroll>
			<AppBar>
				<Toolbar>
					<IconButton
						edge="start"
						// className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={handleHomeMenu}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={homeEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={homeOpen}
						onClose={handleHomeClose}
					>
						<StyledMenuItem onClick={handleHomeClose}>
							<ListItemIcon>
								<HomeIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</StyledMenuItem>
						{loggedIn && (
							<StyledMenuItem onClick={handleHomeClose}>
								<ListItemIcon>
									<PublicIcon fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Worlds" />
							</StyledMenuItem>
						)}
						<StyledMenuItem onClick={handleHomeClose}>
							<ListItemIcon>
								<InfoIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText primary="About" />
						</StyledMenuItem>
					</Menu>
					<StyledMenuTitle variant="h6">
						Endless Forest
					</StyledMenuTitle>
					{loggedIn ? (
						<React.Fragment>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle fontSize="large" />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={handleClose}
							>
								<StyledMenuItem onClick={handleHomeClose}>
									<ListItemIcon>
										<AccountCircle fontSize="small" />
									</ListItemIcon>
									<ListItemText primary="My Account" />
								</StyledMenuItem>
								<StyledMenuItem onClick={logoutHandler}>
									<ListItemIcon>
										<ExitToAppIcon fontSize="small" />
									</ListItemIcon>
									<ListItemText primary="Logout" />
								</StyledMenuItem>
							</Menu>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Button color="inherit" onClick={loginHandler}>
								Login
							</Button>
							<Button color="inherit">Sign Up</Button>
						</React.Fragment>
					)}
				</Toolbar>
			</AppBar>
		</HideOnScroll>
	);
};

export default Header;
