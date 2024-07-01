import React from 'react';
import {Modal, Box, IconButton} from "@mui/material";
import {FiX} from "react-icons/fi";

const modalStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 950,
    overflowY: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4
}

const CustomModal = ({
    open,
    onClose,
    keepMounted = false,
    children
}) => {
    return (
      <Modal
       open={open}
       onClose={onClose}
       keepMounted={keepMounted}
       id={'custom_modal'}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
       >
         <Box sx={modalStyle}>
             <Box sx={{ position: 'absolute', top: 0, right: 2}}>
                 <IconButton onClick={onClose}>
                     <FiX size={14}/>
                 </IconButton>
             </Box>
             {children}
         </Box>
      </Modal>
    )
}

export default CustomModal