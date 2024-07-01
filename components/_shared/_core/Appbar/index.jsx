import React, {useState} from 'react'
import {
    AppBar as MuiAppBar,
    Toolbar,
    IconButton,
    styled,
    Divider,
    Collapse, Typography,
    Link,
    Breadcrumbs
} from "@mui/material";
import {FiMenu} from "react-icons/fi";
import { BsBellFill } from 'react-icons/bs';
import ProfileDropdown from "@/components/_shared/_core/Appbar/ProfileDropdown";
import {useRouter} from "next/router";
import {FaChevronRight} from "react-icons/fa";

const xWidth = 260;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open, drawerWidth}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${xWidth}px)`,
        marginLeft: `${xWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })
}))

const BreadcrumbsItem = (breadcrumbs) => {
    const router = useRouter()
    const data = []

    const handleClick = (path) => {
        router.push(path)
    }

    if (breadcrumbs.length > 0) {
        breadcrumbs.map((item, index) => {
            return data.push(
                item.isCurrent ?
                    <Typography key={index} color={'primary'}>
                        {item.title}
                    </Typography> :
                    <Link sx={{ cursor: 'pointer' }} key={index} underline={'hover'} color={'inherit'} onClick={() =>handleClick(item?.path)}>
                        {item.title}
                    </Link>
            )
        })
    }
    return data
}

export default function Appbar(props) {
    const {handleDrawerToggle, open, drawerWidth, breadcrumbs} = props
    return (
        <AppBar
            position={'fixed'}
            open={open}
            drawerWidth={drawerWidth}
            sx={{
                display: 'flex',
                flexFlow: 'row',
                justifyContent: 'space-between',
                background: '#FFFFFF',
                color: 'primary.main',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
                paddingLeft: `${open ? `${drawerWidth}px` : '1rem'}`,
                width: '100%'
            }}
        >
            <Toolbar>
                <IconButton
                 color={'inherit'}
                 aria-label={'open drawer'}
                 onClick={handleDrawerToggle}
                 edge={'start'}
                 sx={{mr:2, ...(open && {display: 'none'})}}
                >
                    <FiMenu color={'#000000'}/>
                </IconButton>
                <Breadcrumbs
                 separator={<FaChevronRight size={12}/>}
                 aria-label={'breadcrumbs'}
                >
                    {BreadcrumbsItem(breadcrumbs)}
                </Breadcrumbs>
            </Toolbar>

            <Toolbar sx={{ display: 'flex' }}>
                <IconButton>
                    <BsBellFill size={20}/>
                </IconButton>
                <Divider orientation={'vertical'} variant={'middle'} flexItem/>
                <ProfileDropdown />
            </Toolbar>
        </AppBar>
    )
}