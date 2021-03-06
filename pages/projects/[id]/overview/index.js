
import React from "react";

import Layout from 'components/layouts'
import Menu from "../Menu"

import "redux/project";
export default ({ project, error }) => {
    return project &&
        <Layout>
            <Menu projectId={project._id} />
            <h2>
                {project.name}
            </h2>
        </Layout>
}

export async function getServerSideProps({ query }) {
    try {
        const response = await fetch(`http://localhost:3000/api/projects/${query.id}`)
        const project = await response.json()

        return { props: { project } }
    } catch (error) {
        return { props: { error: error.message } }
    }
}