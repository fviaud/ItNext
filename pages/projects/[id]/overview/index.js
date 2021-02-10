
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProject } from "api/api.projects"
import { fetchProjectAction, } from "redux/project/actions";
import { LinearProgress } from "@material-ui/core";
import Layout from 'components/layouts_project'

import "redux/project";
export default ({ project, error }) => {
    return project ? <Layout>{project.title}</Layout> : <>Loading </>
}

export async function getServerSideProps({ params }) {
    try {
        const response = await getProject(params.id)
        const project = await response.data
        return { props: { project } }
    } catch (error) {
        return { props: { error: error.message } }
    }
}