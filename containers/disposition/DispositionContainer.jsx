import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import DispositionComponent from "@/components/disposition/DispositionComponent";

const DispositionContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Disposisi', path: '/disposisi', isCurrent: true},
         ]}
        >
          <DispositionComponent />
        </Layout>
    )
}

export default DispositionContainer;