import React from 'react';
import Layout from "@/components/_shared/_core/Layout";
import ReportComponent from "@/components/report/ReportComponent";

const ReportContainer = () => {
    return (
        <Layout
         breadcrumbs={[
             {title: 'Laporan Surat', path: '/laporan-surat', isCurrent: true},
         ]}
        >
          <ReportComponent />
        </Layout>
    )
}

export default ReportContainer;