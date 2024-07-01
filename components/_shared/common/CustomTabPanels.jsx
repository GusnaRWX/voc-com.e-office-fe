import React from 'react';
import {Box} from '@mui/material'

const CustomTabPanels = ({
  children,
  value,
  index,
  ...otherProps
}) => {
    return (
        <div
         role={'tabpanel'}
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...otherProps}
        >
            {value === index && <Box sx={{ width: '100%' }}>{children}</Box>}
        </div>
    )
}

export default CustomTabPanels;