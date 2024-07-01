import React from 'react';
import {Modal, Box, Typography, IconButton} from "@mui/material";
import {CustomButton} from "@/components/_shared/form";
import { FiX } from "react-icons/fi";

const deleteStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const ConfirmationModal = ({
  type = 'delete',
  open,
  onClose,
  keepMounted = false,
  onConfirm
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
            <>
            {
                type === 'delete' && (
                    <Box sx={deleteStyle}>
                        <Box sx={{ position: 'absolute', top: 0, right: 2}}>
                            <IconButton onClick={onClose}>
                                <FiX size={14}/>
                            </IconButton>
                        </Box>
                      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mb: '1.5rem' }}>
                         <Typography component={'h6'}>Hapus Surat?</Typography>
                      </Box>
                      <Typography sx={{ mb: '2rem' }}>
                          Apakah Anda yakin ingin menghapus data ini? Data yang dihapus tidak dapat dipulihkan.
                      </Typography>
                      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                        <CustomButton
                         id={'btn_cancel'}
                         fullWidth
                         variant={'outlined'}
                         color={'grey'}
                         onClick={onClose}
                        >
                            <span>Batalkan</span>
                        </CustomButton>
                        <CustomButton
                         id={'btn_submit'}
                         fullWidth
                         color={'error'}
                         type={'button'}
                         onClick={onConfirm}
                        >
                          <span style={{ color: '#FFFFFF' }}>Hapus</span>
                        </CustomButton>
                      </Box>
                    </Box>
                )
            }
                {
                    type === 'confirmation' && (
                        <Box sx={deleteStyle}>
                            <Box sx={{ position: 'absolute', top: 0, right: 2}}>
                                <IconButton onClick={onClose}>
                                    <FiX size={14}/>
                                </IconButton>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mb: '1.5rem' }}>
                                <Typography component={'h6'}>Simpan / Ubah Surat?</Typography>
                            </Box>
                            <Typography sx={{ mb: '2rem' }}>
                                Anda dapat mengubah kembali surat yang telah disimpan.
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                                <CustomButton
                                    id={'btn_cancel'}
                                    fullWidth
                                    variant={'outlined'}
                                    color={'grey'}
                                    onClick={onClose}
                                >
                                    <span>Batalkan</span>
                                </CustomButton>
                                <CustomButton
                                    id={'btn_submit'}
                                    fullWidth
                                    color={'primary'}
                                    type={'button'}
                                    onClick={onConfirm}
                                >
                                    <span style={{ color: '#FFFFFF' }}>Oke</span>
                                </CustomButton>
                            </Box>
                        </Box>
                    )
                }
            </>
        </Modal>
    )
}

export default ConfirmationModal;
