import React from "react";
import {Drawer, IconButton, styled, Divider, Collapse} from "@mui/material";
import {FiMenu} from "react-icons/fi";
import {HEAD_LOGO} from "@/utils/assetConstant";
import Image from "next/image";


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

export default function DrawerCore({
    handleDrawerToggle,
    open,
    container,
    drawerwidth,
    children
}) {
    return (
        <Collapse
            component='nav'
            in={open}
            orientation='horizontal'
            aria-label='mailbox folders'
        >
        <Drawer
         drawerwidth={drawerwidth}
         open={open}
         container={container}
         variant={'persistent'}
         anchor={'left'}
         sx={{
             width: drawerwidth,
             flexShrink: 0,
             '& .MuiDrawer-paper': {
                 border: 'none',
                 width: drawerwidth,
                 backgroundColor: '#FFFFFF',
                 boxShadow: '0px 6px 20px 0px rgba(0, 0, 0, 0.05)',
             },
         }}
        >
          <DrawerHeader>
              <Image
               src={HEAD_LOGO}
               alt={'head_logo'}
               width={130}
               height={30}
               style={{
                   marginLeft: '.5rem'
               }}
              />
              <IconButton onClick={handleDrawerToggle}>
                  <FiMenu color={'#000000'}/>
              </IconButton>
          </DrawerHeader>
          <Divider sx={{ marginTop: '-1px' }}/>
            {children}
        </Drawer>
        </Collapse>
    )
}
