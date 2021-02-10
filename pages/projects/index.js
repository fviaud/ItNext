import React from "react";
import Layout from 'components/layouts'
import Link from "next/link";
import { makeStyles, List, ListItem, ListItemText, ListItemAvatar, LinearProgress, Box } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

import Formulaire from "./Formulaire";
import Pagination from "./Paginations";

import "redux/projects";

const useStyles = makeStyles((theme) => ({
    contentBody: {
        marginTop: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
    },
}));

const projects = ({ projects, error, totalPages }) => {
    const classes = useStyles();
    return projects &&
        <Layout>
            <>
                <Formulaire />
                <List component="nav">
                    {projects.map((project, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <FolderIcon />
                            </ListItemAvatar>
                            <ListItemText primary={<a href={`projects/${project._id}/overview`}>{project.name}</a>} />
                        </ListItem>
                    ))}
                </List>
                {totalPages > 1 &&
                    <Box className={classes.contentBody}>
                        <Pagination total_pages={totalPages} />
                    </Box>}
            </>
        </Layout>
}

export async function getServerSideProps({ query }) {
    try {
        const response = await fetch(`http://localhost:3000/api/projects?page=${query.page || 1}`)
        const data = await response.json(response)
        return { props: { projects: data.projects, totalPages: data.totalPages } }
    } catch (error) {
        return { props: { error: error.message } }
    }
}

export default projects


