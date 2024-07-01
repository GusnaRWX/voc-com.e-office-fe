import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import {TextField, InputAdornment} from "@mui/material";

const SearchField = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  size = 'small'  ,
  variant = 'outlined',
  fullWidth = false
}) => {
    return (
        <TextField
         id={id}
         name={name}
         onChange={onChange}
         size={size}
         value={value}
         variant={variant}
         type={'text'}
         placeholder={placeholder}
         fullWidth={fullWidth}
         InputProps={{
             startAdornment: (
                 <InputAdornment position="start">
                     <FaMagnifyingGlass size={15}/>
                 </InputAdornment>
             )
         }}
        />
    )
}

export default SearchField;
