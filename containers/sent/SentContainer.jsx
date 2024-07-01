import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import SentComponent from "@/components/sent/SentComponent";

const SentContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Surat Keluar', path: '/surat-keluar', isCurrent: true},
         ]}
        >
          <SentComponent />
        </Layout>
    )
}

export default SentContainer;