import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import MemoComponent from "@/components/memo/MemoComponent";

const MemoContainer = () => {
    return (
        <Layout breadcrumbs={[
            {title: 'Memo Internal', path: '/memo', isCurrent: true},
        ]}>
          <MemoComponent />
        </Layout>
    )
}

export default MemoContainer;