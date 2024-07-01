import React from "react";
import {Modal, Box, Typography, Avatar, IconButton} from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses,
} from "@mui/lab";
import {CustomButton} from "@/components/_shared/form";
import {FiX} from "react-icons/fi";
import {EXAMPLE_PHOTO_PROFILE} from "@/utils/assetConstant";

const modalStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    overflowY: 'auto',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4
}

const CustomModalTimeline = ({
    open,
    onClose,
    title = 'Timeline Status Surat',
    keepMounted = false
}) => {
    return (
        <Modal
         open={open}
         onClose={onClose}
         keepMounted={keepMounted}
         id={'modal_timeline'}
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', mb: '1rem' }}>
                  <Avatar
                   alt={'avatar_user'}
                   src={EXAMPLE_PHOTO_PROFILE}
                   sx={{
                       width: '40px',
                       height: '40px'
                   }}
                  />
                  <Typography>Ayunanda - Kepala Suku Cadang</Typography>
              </Box>
              <Timeline
               sx={{
                   [`& .${timelineItemClasses.root}:before`]: {
                       flex: 0,
                       padding: 0
                   }
               }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color={'green'}/>
                    <TimelineConnector sx={{ backgroundColor: '#22C55E' }}/>
                  </TimelineSeparator>
                  <TimelineContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    <Typography sx={{ fontSize: '12px' }}>Diterima</Typography>
                    <Typography sx={{ fontSize: '12px' }}>22 juni 2024</Typography>
                    <Typography sx={{ fontSize: '12px' }}>Catatan/Koreksi: -</Typography>
                    <Typography sx={{ fontSize: '12px' }}>Keterangan: sedang di tinjau</Typography>
                  </TimelineContent>
                </TimelineItem>
                  <TimelineItem>
                      <TimelineSeparator>
                          <TimelineDot color={'indigo'}/>
                          <TimelineConnector sx={{ backgroundColor: '#6366F1' }}/>
                      </TimelineSeparator>
                      <TimelineContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                          <Typography sx={{ fontSize: '12px' }}>Diproses</Typography>
                          <Typography sx={{ fontSize: '12px' }}>-</Typography>
                          <Typography sx={{ fontSize: '12px' }}>Catatan/Koreksi: -</Typography>
                          <Typography sx={{ fontSize: '12px' }}>Keterangan: -</Typography>
                      </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                      <TimelineSeparator>
                          <TimelineDot color={'indigo'}/>
                          <TimelineConnector sx={{ backgroundColor: '#6366F1' }}/>
                      </TimelineSeparator>
                      <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                          <Typography sx={{ fontSize: '12px' }}>Disetujui</Typography>
                          <Typography sx={{ fontSize: '12px' }}>-</Typography>
                          <Typography sx={{ fontSize: '12px' }}>Catatan/Koreksi: -</Typography>
                          <Typography sx={{ fontSize: '12px' }}>Keterangan: -</Typography>
                      </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                      <TimelineSeparator>
                          <TimelineDot color={'indigo'}/>
                          <TimelineConnector sx={{ backgroundColor: '#6366F1' }}/>
                      </TimelineSeparator>
                      <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                          <Typography sx={{ fontSize: '12px' }}>Diterima</Typography>
                          <Typography sx={{ fontSize: '12px' }}>-</Typography>
                          <Typography sx={{ fontSize: '12px' }}>Catatan/Koreksi: -</Typography>
                          <Typography sx={{ fontSize: '12px' }}>Keterangan: -</Typography>
                      </TimelineContent>
                  </TimelineItem>
              </Timeline>
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

export default CustomModalTimeline;