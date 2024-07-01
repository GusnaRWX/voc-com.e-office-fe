import React, {memo} from 'react';
import {Button, CircularProgress} from "@mui/material";

/**
 * used in all this project
 * @param id type string
 * @param children type react node
 * @param size type string
 * @param color type string
 * @param onClick function
 * @param variant type string
 * @param isLoading type boolean
 * @param fullWidth type boolean
 * @param props all props when props support for this component
 * @returns {Element}
 * @constructor
 */
const CustomButton = ({
    id,
    children,
    size,
    color,
    onClick,
    variant = 'contained',
    isLoading,
    fullWidth = false,
    ...props
}) => {
    return (
        <Button
         id={id}
         size={size}
         onClick={onClick}
         variant={variant}
         color={color}
         fullWidth={fullWidth}
         {...props}
        >
            {
                isLoading && (
                    <CircularProgress color={'inherit'} size={13}/>
                )
            }
            {
                !isLoading && children
            }
        </Button>
    )
}

export default memo(CustomButton);