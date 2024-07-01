import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import InboxComponent from "@/components/inbox/InboxComponent";

const InboxContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Surat Masuk', path: '/surat-masuk', isCurrent: true}
         ]}
        >
          <InboxComponent />
        </Layout>
    )
}

export default InboxContainer;