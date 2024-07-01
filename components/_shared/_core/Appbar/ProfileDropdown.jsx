import React, {useState} from "react";
import {Grid, Menu, MenuItem, Divider, Avatar, IconButton} from "@mui/material";
import { MdManageAccounts } from "react-icons/md";
import {PiAcorn, PiSignOutBold} from "react-icons/pi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {EXAMPLE_PHOTO_PROFILE} from "@/utils/assetConstant";

const PersonDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
       <>
       <Grid
        container
        alignItems={'center'}
        gap={1}
        sx={{
            ml: '1rem'
        }}
       >
         <Grid item>
           <p style={{ fontWeight: 'bold' }}>Ayunanda</p>
         </Grid>
         <Grid item>
             <Avatar
              src={EXAMPLE_PHOTO_PROFILE}
              alt={'profile_picture'}
              sx={{
                  width: 30,
                  height: 30
              }}
             />
         </Grid>
         <Grid item>
             <IconButton
              onClick={handleOpen}
              id='menu-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
             >
                 {
                     open ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>
                 }
             </IconButton>
         </Grid>
       </Grid>
        <Menu
         id={'menu-basic'}
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         MenuListProps={{
             'aria-labelledby': 'menu-button',
         }}
        >
          <MenuItem>
            <MdManageAccounts color={'#3FC1C9'} size={24}/>
            <p style={{fontSize: '14px', marginLeft: '1rem', color: '#898989'}}>Account Setting</p>
          </MenuItem>
            <MenuItem>
                <PiSignOutBold color={'#F63D68'} size={24}/>
                <p style={{fontSize: '14px', marginLeft: '1rem', color: '#898989'}}>Sign Out</p>
            </MenuItem>
        </Menu>
       </>
    )
}

export default PersonDropdown;