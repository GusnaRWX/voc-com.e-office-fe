import React, {memo, useState} from "react";
import {TextField, Typography, IconButton, InputAdornment} from "@mui/material";
import AsteriskComponent from "@/components/_shared/form/AsteriskComponent";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

/**
 * used in all page in this project
 * @param id type string
 * @param name type string
 * @param onChange function
 * @param error type string | boolean
 * @param label type string
 * @param isRequired type boolean
 * @param value type any
 * @param size
 * @param placeholder type string
 * @param variant type string
 * @param type type string
 * @param props other props for another supported in component
 * @returns {Element}
 * @constructor
 */
const CustomTextField = ({
    id,
    name,
    onChange,
    error,
    label,
    isRequired,
    value,
    size = 'small',
    placeholder,
    variant = 'outlined',
    type,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            {
                typeof label !== 'undefined' && (
                    <Typography mb={'6px'}>
                        {label} {isRequired && <AsteriskComponent />}
                    </Typography>
                )
            }
            {
                type !== 'password' && (
                    <TextField
                     id={id}
                     name={name}
                     value={value}
                     onChange={onChange}
                     type={type}
                     size={size}
                     variant={variant}
                     error={error}
                     fullWidth
                     placeholder={placeholder}
                     {...error && ({error: true, helperText: error})}
                     {...props}
                    />
                )
            }
            {
                type === 'password' && (
                    <TextField
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        type={showPassword ? 'text' : 'password'}
                        variant={variant}
                        error={error}
                        size={size}
                        fullWidth
                        placeholder={placeholder}
                        {...error && ({error: true, helperText: error})}
                        {...props}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position={`end`}>
                                  <IconButton
                                   edge={'end'}
                                   onClick={() => {setShowPassword(!showPassword)}}
                                   onMouseDown={(e) => {e.preventDefault();}}
                                  >
                                      {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                  </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                )
            }
        </>
    )
}

export default memo(CustomTextField)