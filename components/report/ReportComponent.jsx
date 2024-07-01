import React, {useState} from 'react';
import {Card, Box, Tabs, Tab} from '@mui/material'
import {a11yProps} from "@/utils/helpers";
import {CustomTabPanels, CustomTabLabel} from "@/components/_shared/common";
import AllReportTable from "@/components/report/AllReportTable";
import ReportLetterInTable from "@/components/report/ReportLetterInTable";
import ReportLetterOutTable from "@/components/report/ReportLetterOutTable";
import ReportMemoTable from "@/components/report/ReportMemoTable";

const ReportComponent = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div>
          <Card sx={{ padding: '1rem' }}>
            <Box sx={{ width: '100%' }}>
              <Box xs={{ borderBottom: 1, borderColor: 'divider' }}>
                 <Tabs value={value} onChange={handleChange} aria-label={'basic-tabs'}>
                     <Tab label={<CustomTabLabel label={'Semua'} total={10} />} {...a11yProps(0)} />
                     <Tab label={<CustomTabLabel label={'Surat Masuk'} total={14} />} {...a11yProps(1)} />
                     <Tab label={<CustomTabLabel label={'Surat Keluar'} total={12} />} {...a11yProps(2)} />
                     <Tab label={<CustomTabLabel label={'Memo'} total={9} />} {...a11yProps(3)} />
                 </Tabs>
              </Box>
              <CustomTabPanels value={value} index={0}>
                <AllReportTable />
              </CustomTabPanels>
                <CustomTabPanels value={value} index={1}>
                  <ReportLetterInTable />
                </CustomTabPanels>
                <CustomTabPanels value={value} index={2}>
                  <ReportLetterOutTable />
                </CustomTabPanels>
                <CustomTabPanels value={value} index={3}>
                  <ReportMemoTable />
                </CustomTabPanels>
            </Box>
          </Card>
        </div>
    )
}

export default ReportComponent;