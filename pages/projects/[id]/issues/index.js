import React from "react";
import Layout from 'components/layouts'
import Menu from "../Menu"

export default ({ projectId }) => {

    return (
        <Layout>
            <Menu projectId={projectId} index={2} />
        "Issues"
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    try {
        return { props: { projectId: params.id } }
    } catch (error) {
        return { props: { error: error.message } }
    }
}