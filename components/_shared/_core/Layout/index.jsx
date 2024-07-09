import React, {useState, useEffect} from 'react'
import {List, Box, styled, Container, Snackbar, Alert} from "@mui/material";
import Appbar from "@/components/_shared/_core/Appbar";
import DrawerCore from "@/components/_shared/_core/Drawer";
import {Menus} from "@/components/_shared/_core/menu";
import SidebarItem from "@/components/_shared/_core/SidebarItem";
import {useAppDispatch, useAppSelector} from "@/hooks";

const drawerWidth = 260

const MainComponent = styled(Box)(({theme}) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.grey[100],
    overflow: 'auto',
    height: '100vh'
}))


const Layout = ({
    children,
    breadcrumbs
}) => {
    const [open, setOpen] = useState(true)
    const [menuOpen, setMenuOpen] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const state = useAppSelector((state) => state.responser)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (state.code !== 0) {
            setSnackbarOpen(true)
            setTimeout(() => {
                setSnackbarOpen(false)
            }, 6000)
        }
    }, [state.code]);

    const handleDrawerToggle = () => {
        setOpen(!open)
    }

    const handleMenuOpen = (name) => {
        if (name) setMenuOpen(name)
    }

    const container = typeof window !== 'undefined' ? () => window.document.body : undefined;

    const drawer = (
        <Box sx={{ mt: '1rem' }}>
            <List>
                {
                    Menus?.map(menu => (
                        <SidebarItem
                         key={menu?.key}
                         title={menu?.title}
                         path={menu?.path}
                         icons={menu?.icons}
                         hasChild={menu?.hasChild}
                         child={menu?.child}
                         roles={menu?.roles}
                         menuOpen={menuOpen}
                         setMenuOpen={handleMenuOpen}
                        />
                    ))
                }
            </List>
        </Box>
    )

    return (
        <Box
         sx={{
             display: 'flex'
         }}
        >
           <Appbar
            drawerWidth={drawerWidth}
            handleDrawerToggle={handleDrawerToggle}
            open={open}
            breadcrumbs={breadcrumbs}
           />
           <DrawerCore
            drawerwidth={drawerWidth}
            container={container}
            open={open}
            handleDrawerToggle={handleDrawerToggle}
           >
               {drawer}
           </DrawerCore>
           <MainComponent component={'main'}>
               {
                   [200, 201].includes(state.code) && (
                       <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={5000}
                        anchorOrigin={{ 'vertical': 'top', 'horizontal': 'right' }}
                        onClose={() => setSnackbarOpen(false)}
                       >
                           <Alert severity={'success'} onClose={() => setSnackbarOpen(false)} sx={{ width: '100%' }}>
                               {state?.message}
                           </Alert>
                       </Snackbar>
                   )
               }
               {
                   ![200, 201, 0].includes(state.code) && (
                       <Snackbar
                           open={snackbarOpen}
                           autoHideDuration={5000}
                           anchorOrigin={{ 'vertical': 'top', 'horizontal': 'right' }}
                           onClose={() => setSnackbarOpen(false)}
                       >
                           <Alert severity={'error'} onClose={() => setSnackbarOpen(false)} sx={{ width: '100%' }}>
                               {state?.message}
                           </Alert>
                       </Snackbar>
                   )
               }
             <Container
              maxWidth={'xl'}
              sx={{
                  paddingTop: '90px',
                  paddingLeft: '35px !important',
                  paddingRight: '35px !important',
                  paddingBottom: '33px'
              }}
             >
                 {children}
             </Container>
           </MainComponent>
        </Box>
    )
}

export default Layout;