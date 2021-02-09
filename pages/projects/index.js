import React from "react";
import { getProjects } from "api/api.projects"
import Layout from 'components/layouts'

import Link from "next/link";
import { makeStyles, Typography, List, ListItem, ListItemText, ListItemAvatar, LinearProgress, Box } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";


import Formulaire from "./Formulaire";
import Pagination from "./Paginations";

import "redux/projects";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    contentBody: {
        marginTop: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
    },
}));

const projects = ({ projects, error }) => {
    const classes = useStyles();
    return !projects ? <>Loading</> :
        <Layout>
            <Box display="flex" mb={1}>
                <Typography color="primary" variant="h5" className={classes.title}>
                    Projects
                </Typography>
                <Formulaire />
            </Box>

            {projects &&
                <>
                    <List component="nav">
                        {projects.values.map((project, index) => (
                            <Link href={`projects/${project.id}/overview`} key={index}>
                                <ListItem button >
                                    <ListItemAvatar>
                                        <FolderIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary={project.title} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    {projects.totalPages > 1 &&
                        <Box className={classes.contentBody}>
                            <Pagination total_pages={projects.totalPages} />
                        </Box>}
                </>}
        </Layout>

}

export async function getServerSideProps({ query }) {
    try {
        const objetByPage = 10
        const newPage = query.page || 1
        const response = await getProjects()
        const totalPages = Math.ceil(response.data.length / objetByPage)
        const projects = response.data.filter((project, index) => index < newPage * objetByPage && index >= (newPage - 1) * objetByPage)
        return { props: { projects: { values: [...projects], totalPages } } }
    } catch (error) {
        return { props: { error: error.message } }
    }
}


export default projects
