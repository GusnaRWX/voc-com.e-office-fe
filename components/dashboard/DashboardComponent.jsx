import React, {useState} from 'react';
import {Grid, Card, Box, Typography, TableRow, TableCell, IconButton} from "@mui/material";
import {dataDashboard, exampleDataTable} from "@/utils/siteSetting";
import {CustomTable} from "@/components/_shared/form";
import {FaPencil, FaEye, FaTrash} from "react-icons/fa6";
import {SearchField, CustomSelect} from "@/components/_shared/form";

const cardStyle = {
    width: '100%',
    background: '#DFEFF7',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '1rem'
}

const boxIcon = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
}

const boxItem = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
}

const headerItems = [
    {id: 'no', label: 'No', sortable: false},
    {id: 'dateIn', label: 'Tanggal Masuk', sortable: true},
    {id: 'numberOfLetter', label: 'Nomor Surat', sortable: true},
    {id: 'subject', label: 'Perihal', sortable: true},
    {id: 'letterType', label: 'Jenis Surat', sortable: true},
    {id: 'actions', label: 'Aksi', sortable: false}
]

const DashboardComponent = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [direction, setDirection] = useState('desc')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [duration, setDuration] = useState('');

    const durationOptions = [
        {label: 'Pilih durasi...', value: ''},
        {label: 'Surat hari ini', value: 'Surat hari ini'},
        {label: 'Surat Kemarin', value: 'Surat Kemarin'},
        {label: 'Surat Minggu Ini', value: 'Surat Minggu Ini'},
    ]

    const handleFilterDuration = (e) => {
        setDuration(e.target.value)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event);
    };

    const handleRequestSort = (event, headId) => {
        const isAsc = sort === headId && direction === 'asc';
        setDirection(isAsc ? 'desc' : 'asc');
        setSort(headId)
    }

    return (
        <>
            <Grid container spacing={2} mb={'2rem'}>
                {
                    dataDashboard.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index} sx={{ width: '100%' }}>
                            <Card sx={cardStyle}>
                               <Box sx={boxIcon}>
                                   {item.icons}
                               </Box>
                                <Box sx={boxItem}>
                                    <Typography component={'h3'}>{item.total}</Typography>
                                    <Typography component={'h5'}>{item.title}</Typography>
                                    <Typography component={'p'}>{item.duration + ' Hari ini'}</Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
            <Card sx={{ padding: '1rem', width: '100%' }}>
               <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                 <Box sx={{ width: '30%' }}>
                    <SearchField
                     id={'input_search'}
                     name={'search'}
                     onChange={(e) => handleSearch(e)}
                     fullWidth={true}
                     value={search}
                     placeholder={'Type for search...'}
                    />
                 </Box>
                 <Box sx={{ width: '20%' }}>
                   <CustomSelect
                    name={'duration'}
                    value={duration}
                    onChange={(e) => handleFilterDuration(e)}
                    options={durationOptions}
                    error={false}
                    fullWidth={true}
                   />
                 </Box>
               </Box>
               <CustomTable
                count={exampleDataTable.length}
                rowsPerPageOptions={[5, 10, 15, 25, 50, 100]}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
                sort={sort}
                direction={direction}
                onRequestSort={handleRequestSort}
                header={headerItems}
               >
                   {
                       exampleDataTable.map((item, index) => (
                           <TableRow key={index}>
                               <TableCell>{item.no}</TableCell>
                               <TableCell>{item.dateIn}</TableCell>
                               <TableCell>{item.numberOfLetter}</TableCell>
                               <TableCell>{item.subject}</TableCell>
                               <TableCell>{item.letterType}</TableCell>
                               <TableCell>
                                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                       <IconButton>
                                           <FaEye size={15} color={'#3FC1C9'}/>
                                       </IconButton>
                                       <IconButton>
                                           <FaPencil size={15} color={'#0EA5E9'}/>
                                       </IconButton>
                                       <IconButton>
                                           <FaTrash size={15} color={'#EF4444'}/>
                                       </IconButton>
                                   </Box>
                               </TableCell>
                           </TableRow>
                       ))
                   }
               </CustomTable>
            </Card>
        </>

    )
}

export default DashboardComponent;