import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import SentCreateComponent from "@/components/sent/SentCreateComponent";

const SentCreateContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Surat Keluar', path: '/surat-keluar', isCurrent: false},
             {title: 'Buat Surat', path: '/surat-keluar/create', isCurrent: true}
         ]}
        >
          <SentCreateComponent />
        </Layout>
    )
}

export default SentCreateContainer;