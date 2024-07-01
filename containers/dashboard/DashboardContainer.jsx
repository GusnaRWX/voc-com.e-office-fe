import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import DashboardComponent from "@/components/dashboard/DashboardComponent";

const DashboardContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Dashboard', path: '/', isCurrent: true}
         ]}
        >
            <DashboardComponent />
        </Layout>
    )
}

export default DashboardContainer;