import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Box, Container, CssBaseline } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "./Menu"

import AuthFormulaire from "./AuthFormulaire"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        color: "black",
        background: "white",
        boxShadow: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar({ children }) {
    const classes = useStyles();
    const menuId = "primary-search-account-menu";
    const curentUser = useSelector((state) => state.curentUser);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar} >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Tools
                    </Typography>
                    {curentUser.values ? (
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                // onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    ) : (
                            <AuthFormulaire loading={curentUser.isLoading} />
                        )}
                </Toolbar>
            </AppBar>
            <CssBaseline />

            <Container >
                {children}
            </Container>
        </div>
    );
}
