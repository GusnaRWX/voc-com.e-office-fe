import {FormControl, Select, MenuItem, FormHelperText, Typography} from "@mui/material";
import React from "react";
import AsteriskComponent from "@/components/_shared/form/AsteriskComponent";


const CustomSelect = ({
    id,
    label,
    variant='outlined',
    size = 'small',
    value,
    options,
    fullWidth,
    isRequired,
    onChange,
    name,
    error,
    ...props
}) => {
    return (
        <FormControl fullWidth={fullWidth}>
            {
                typeof label !== 'undefined' && (
                    <Typography mb={'6px'}>
                        {label} {isRequired && <AsteriskComponent />}
                    </Typography>
                )
            }
            <Select
                fullWidth={fullWidth}
                variant={variant}
                size={size}
                value={value}
                onChange={onChange}
                name={name}
                {...props}
                error={error}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            '& .MuiMenuItem-root:hover': {
                                backgroundColor: '#3FC1C9',
                                color: 'white',
                            },
                        },
                    },
                }}
            >
                {typeof options !== 'undefined' &&
                    options.map((item) => (
                        <MenuItem key={item.label} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
            </Select>
            {error && (
                <FormHelperText sx={{ color: '#EF4444' }}>{error}</FormHelperText>
            )}
        </FormControl>
    )
}

export default CustomSelect;