import React from 'react';
import Box from '@mui/material/Box';

const CustomTabLabel = ({ label, total }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <p>{label}</p>
            <span style={{ fontSize: '10px', color: '#4F46E5' }}>{total}</span>
        </Box>
    )
}

export default CustomTabLabel;