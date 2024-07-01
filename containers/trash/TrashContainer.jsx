import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import TrashComponent from "@/components/trash/TrashComponent";

const TrashContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Sampah', path: '/sampah', isCurrent: true}
         ]}
        >
            <TrashComponent />
        </Layout>
    )
}

export default TrashContainer;