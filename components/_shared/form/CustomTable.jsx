import React, {useState} from 'react';
import {
    Table,
    TableContainer,
    Pagination,
    TableBody,
    Box,
    TableHead,
    TableRow,
    TableCell,
    TableSortLabel,
    Menu,
    MenuItem,
    Button
} from "@mui/material";
import {FaChevronDown} from "react-icons/fa";
import { visuallyHidden } from '@mui/utils';

const CustomTable = ({
  rowsPerPageOptions,
  count,
  page,
  onChangePage,
  rowsPerPage,
  onRowsPerPageChange,
  onRequestSort,
  sort,
  direction,
  header,
  children,
  withPaginate = true
}) => {
    const [currentPage, setCurrentPage] = useState(rowsPerPageOptions[0])
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleChangeRows = (pageNumber) => {
        setCurrentPage(pageNumber)
        setAnchorEl(null)
        if (onRowsPerPageChange) {
            onRowsPerPageChange(pageNumber)
        }
    }

    const handleRequestSort = (e, id) => {
        onRequestSort(e, id)
    }
    return (
     <>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    {
                        header.map((item, index) => (
                            <TableCell key={index} sortDirection={sort === item.id && item.sortable ? direction : false}>
                                <TableSortLabel
                                    active={sort === item.id}
                                    direction={sort === item.id ? direction : 'asc'}
                                    onClick={(e) => handleRequestSort(e, item.id)}
                                >
                                    {item.label}
                                    {sort === item.id ? (
                                        <Box component={'span'} sx={visuallyHidden}>
                                            {direction === 'asc' ? 'sorted ascending' : 'sorted descending'}
                                        </Box>
                                    ): null}
                                </TableSortLabel>
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {children}
            </TableBody>
        </Table>
      </TableContainer>
         {
             withPaginate && (
                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <Box sx={{ display: 'flex', gap: '24px' }}>
                     <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                       <Box sx={{ display: 'flex', alignItems: 'center' }} component={'div'} onClick={handleClick}>
                         <Button
                             aria-controls={open ? 'basic-menu' : undefined}
                             aria-haspopup='true'
                             aria-expanded={open ? 'true' : undefined}
                             variant='outlined'
                             sx={{
                                 border: 'none',
                                 ':hover': {
                                     border: 'none'
                                 }
                             }}
                         >
                             <span>{`${currentPage} Records`}</span>
                         </Button>
                         <FaChevronDown />
                       </Box>
                       <p>Per Pages</p>
                     </Box>
                     <Menu
                      anchorEl={anchorEl}
                      id={'records-pagination'}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                     >
                         {
                             rowsPerPageOptions?.map((value, index) => (
                                 <MenuItem key={index} onClick={() => handleChangeRows(value)}>{`${value} Records`}</MenuItem>
                             ))
                         }
                     </Menu>
                     <p>Showing <b>{(rowsPerPage * page) - (rowsPerPage - 1)}</b> to <b>{(count < (rowsPerPage * page)) ? count : (rowsPerPage * page)}</b> of <b>{count}</b> results</p>
                   </Box>
                   <Box>
                     <Pagination count={Math.ceil(count / rowsPerPage) || 1} variant={"outlined"} shape={'rounded'} onChange={onChangePage}/>
                   </Box>
                 </Box>
             )
         }
     </>
    )
}

export default CustomTable;