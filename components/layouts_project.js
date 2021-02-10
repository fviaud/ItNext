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
import Layout from 'components/layouts'

import AuthFormulaire from "./AuthFormulaire"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        color: "black",
        background: "white",
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
    return (
        <Layout>
            {/* <Menu /> */}
            {children}
        </Layout>
    );
}
