import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import NumberingComponent from "@/components/numbering/NumberingComponent";

const NumberingContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Penomoran', path: '/penomoran', isCurrent: true},
         ]}
        >
          <NumberingComponent />
        </Layout>
    )
}

export default NumberingContainer;