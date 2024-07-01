import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import DispositionCreateComponent from "@/components/disposition/DispositionCreateComponent";

const DispositionCreateContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Disposisi', path: '/disposisi', isCurrent: false},
             {title: 'Buat Disposisi', path: '/disposisi/create', isCurrent: true},
         ]}
        >
            <DispositionCreateComponent />
        </Layout>
    )
}

export default DispositionCreateContainer;