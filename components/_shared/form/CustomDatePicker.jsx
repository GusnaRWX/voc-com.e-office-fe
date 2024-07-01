import React from 'react';
import AsteriskComponent from "@/components/_shared/form/AsteriskComponent";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider, DatePicker} from "@mui/x-date-pickers";
import {FormHelperText, Typography} from "@mui/material";

const CustomDatePicker = ({
 id,
 label,
 value,
 name,
 onChange,
 isRequired,
 error,
 ...props
}) => {

    const handleChange = (e) => {
        return {
            target: {
                name,
                value: e
            }
        }
    }

    const handleClear = () => {
        return {
            target: {
                name,
                value: null
            }
        }
    }
   return (
     <LocalizationProvider dateAdapter={AdapterDayjs}>
         {
             typeof label !== 'undefined' && (
                 <Typography mb={'6px'}>
                     {label} {isRequired && <AsteriskComponent />}
                 </Typography>
             )
         }
         <DatePicker
          id={id}
          value={value}
          onChange={(e) => onChange(handleChange(e))}
          format={'DD/MM/YYYY'}
          {...props}
          slotProps={{ field: { clearable: true, onClear: handleClear } }}
          sx={{
              '& .MuiOutlinedInput-input': {
                  padding: '9px',
                  border: 'none !important',
              },
              width: '100%',
              border: error ? '1px solid #EF4444' : '',
              borderRadius: '5px',
          }}
         />
         {error && (
             <FormHelperText sx={{ color: '#EF4444' }}>{error}</FormHelperText>
         )}
     </LocalizationProvider>
   )
}

export default CustomDatePicker;