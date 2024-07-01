import React, { useState } from 'react';
import {Modal, Box, Typography, IconButton} from "@mui/material";
import {CustomButton} from "@/components/_shared/form";
import { FiX } from "react-icons/fi";
import {EXAMPLE_DOC} from "@/utils/assetConstant";

const modalStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 700,
    overflowY: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const PdfDocs = () => {
    return (
        <div style={{ width: '100%', height: '85%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <iframe
           src={EXAMPLE_DOC}
           style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
    )
}

const CustomModalPdfView = ({
  open,
  onClose,
  title = 'Preview',
  keepMounted = false
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            keepMounted={keepMounted}
            id={'modal-confimation'}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           <Box sx={modalStyle}>
               <Box sx={{ position: 'absolute', top: 0, right: 2}}>
                   <IconButton onClick={onClose}>
                       <FiX size={14}/>
                   </IconButton>
               </Box>
               <Typography mb={'1rem'}>{title}</Typography>
               <PdfDocs />
               <Box sx={{ mt: '1rem', width: '100%', display: 'flex', justifyContent: 'end' }}>
                 <CustomButton
                  id={'btn_close'}
                  fullWidth={false}
                  type={'button'}
                  color={'primary'}
                  onClick={onClose}
                 >
                   <span style={{ color: '#FFFFFF' }}>Tutup</span>
                 </CustomButton>
               </Box>
           </Box>
        </Modal>
    )
}

export default CustomModalPdfView;
