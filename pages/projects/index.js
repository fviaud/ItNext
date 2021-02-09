import React, { useEffect } from "react";
import { getProjects } from "api/api.projects"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { makeStyles, Typography, List, ListItem, ListItemText, ListItemAvatar, LinearProgress, Box } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

import { fetchProjectsAction } from "redux/projects/actions";
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

export default ({ projects, error }) => {
    const classes = useStyles();

    console.log(projects)
    console.log(error)

    // const projects = useSelector((state) => state.projects);
    // const dispatch = useDispatch();
    // const router = useRouter();
    // let { page } = router.query;

    // console.log("test")
    // useEffect(() => {
    //     dispatch(fetchProjectsAction(page));
    // }, [dispatch, page]);

    return !projects ? <>Loading</> :
        <>
            <Box display="flex" mb={1}>
                <Typography color="primary" variant="h5" className={classes.title}>
                    Projects
                </Typography>
                <Formulaire />
            </Box>

            {projects &&
                <>
                    <List component="nav">
                        {projects.map((project, index) => (
                            <Link href={`projects/${project.id}/overview`}>
                                <ListItem
                                    button
                                    // component={CustomRouterLink}
                                    // to={`/project/${project.id}/overview`}
                                    key={index}

                                >
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
        </>

}

export async function getServerSideProps({ params }) {
    try {
        // const response = await getProjects()
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const projects = response.data.json()
        return { props: { projects } }
    } catch (error) {
        return { props: { error: error.message } }
    }
}

