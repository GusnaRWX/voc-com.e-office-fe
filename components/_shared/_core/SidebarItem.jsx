import React, {useState} from 'react';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useRouter} from "next/router";
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2';
import {set} from "zod";

const SidebarItem = ({
    title,
    path,
    icons,
    hasChild,
    child
}) => {
    const [open, setOpen] = useState(false)
    const { pathname, push } = useRouter()
    return (
       <>
        <ListItemButton
         onClick={hasChild ? () => setOpen(!open) : () => push(path)}
         selected={pathname === path}
         sx={{
             mt: '.5rem'
         }}
        >
            <ListItemIcon sx={{ minWidth: '30px' }}>
                {icons({ color: '#3FC1C9', size: 20 })}
            </ListItemIcon>
            <ListItemText style={{ fontSize: '12px' }} primary={title} sx={{ marginLeft: '1rem', color: '#898989' }} />
            {
                hasChild && (
                    open || pathname.split('/')[1].replace('-', ' ') === title.toLocaleLowerCase() ? <HiOutlineChevronUp color='#3FC1C9' /> : <HiOutlineChevronDown color='#3FC1C9' />
                )
            }
        </ListItemButton>
           {
               hasChild && (
                   <Collapse
                       in={
                           open || pathname.split('/')[1].replace('-', ' ') === title.toLowerCase()
                       }
                   >
                       <List
                           component='div'
                           disablePadding
                       >
                           {
                               child && child.map((childMenu, key) => (
                                   <ListItemButton
                                       key={key}
                                       selected={pathname === childMenu.path}
                                       sx={{ pl: 7.8 }}
                                   >
                                       <ListItemText primary={childMenu.title} sx={{ fontSize: '12px', color: '#898989' }} />
                                   </ListItemButton>
                               ))
                           }
                       </List>
                   </Collapse>
               )
           }
       </>
    )
}

export default SidebarItem;