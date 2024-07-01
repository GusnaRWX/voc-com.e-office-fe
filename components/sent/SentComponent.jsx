import React, {useState} from 'react';
import {Card, Box, TableRow, TableCell, IconButton, Typography, Grid} from '@mui/material';
import {exampleDataTable} from "@/utils/siteSetting";
import {CustomTable, CustomDatePicker, CustomSelect, SearchField, CustomButton} from "@/components/_shared/form";
import {FaEye, FaPrint, FaTrash} from "react-icons/fa6";
import {ConfirmationModal, CustomModalPdfView, CustomModal} from "@/components/_shared/common";
import {FaPlusSquare} from "react-icons/fa";
import {letterTypeOptions} from "@/utils/siteSetting";
import Image from "next/image";
import {useRouter} from "next/router";

const headerItems = [
    {id: 'no', label: 'No', sortable: false},
    {id: 'dateIn', label: 'Tanggal Masuk', sortable: true},
    {id: 'numberOfLetter', label: 'Nomor Surat', sortable: true},
    {id: 'subject', label: 'Perihal', sortable: true},
    {id: 'letterType', label: 'Jenis Surat', sortable: true},
    {id: 'actions', label: 'Aksi', sortable: false}
]


const SentComponent = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const {push} = useRouter();
    const [page, setPage] = useState(1)
    const [direction, setDirection] = useState('desc')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('');
    const [date, setDate] = useState(null);
    const [modalDelete, setModalDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [modalView, setModalView] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);

    const confirmationDelete = (id) => {
        setDeleteId(id)
        setModalDelete(true)
    }

    const handleDeleteItem = () => {
        console.log(deleteId)
        setModalDelete(false)
    }

    const statusOptions = [
        {label: 'Pilih durasi...', value: ''},
        {label: 'Surat hari ini', value: 'Surat hari ini'},
        {label: 'Surat Kemarin', value: 'Surat Kemarin'},
        {label: 'Surat Minggu Ini', value: 'Surat Minggu Ini'},
    ]

    const handleFilterStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSearchDate = (e) => {
        setDate(e.target.value)
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

    const handleRoutePage = (path, title) => {
        push({
            pathname: path,
            query: { title: title }
        })
    }

    return (
        <Card sx={{ padding: '1rem' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', marginTop: '1rem' }}>
                <Box sx={{ width: '20%' }}>
                    <SearchField
                        id={'input_search'}
                        name={'search'}
                        onChange={(e) => handleSearch(e)}
                        fullWidth={true}
                        value={search}
                        placeholder={'Type for search...'}
                    />
                </Box>
                <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', gap: '1rem' }}>
                    <Box>
                        <CustomDatePicker
                            id={'input_date'}
                            name={'date'}
                            value={date}
                            fullWidth={true}
                            error={false}
                            onChange={handleSearchDate}
                        />
                    </Box>
                    <Box sx={{ width: '30%' }}>
                        <CustomSelect
                            name={'status'}
                            value={status}
                            onChange={(e) => handleFilterStatus(e)}
                            options={statusOptions}
                            error={false}
                            fullWidth={true}
                        />
                    </Box>
                    <CustomButton
                     id={'btn_add'}
                     variant={'outlined'}
                     color={'grey'}
                     size={'medium'}
                     type={'button'}
                     onClick={() => setModalAdd(true)}
                    >
                      <FaPlusSquare size={12}/>
                      <span style={{ marginLeft: '2px' }}>Buat Surat</span>
                    </CustomButton>
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
                                    <IconButton onClick={() => setModalView(true)}>
                                        <FaEye size={15} color={'#3FC1C9'}/>
                                    </IconButton>
                                    <IconButton>
                                        <FaPrint size={15} color={'#6366F1'}/>
                                    </IconButton>
                                    <IconButton onClick={() => confirmationDelete(item.title)}>
                                        <FaTrash size={15} color={'#F43F5E'}/>
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </CustomTable>
            <ConfirmationModal
                open={modalDelete}
                type={'delete'}
                onClose={() => {
                    setDeleteId('')
                    setModalDelete(false)
                }}
                onConfirm={() => handleDeleteItem()}
            />
            <CustomModalPdfView
                open={modalView}
                onClose={() => setModalView(false)}
                title={'Preview'}
            />
            <CustomModal
             open={modalAdd}
             onClose={() => setModalAdd(false)}
            >
                <Typography mb={'1rem'} component={'h5'} sx={{ fontWeight: 'bold' }}>
                  Daftar Blanko Surat
                </Typography>
                <Typography mb={'2rem'} >
                    Pilih jenis surat yang akan Anda buat.
                </Typography>
                <Grid container>
                    {
                        letterTypeOptions.map((item, index) => (
                            <Grid item lg={3} xl={3} key={index}>
                              <Box sx={{
                                  width: '100%',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: '1rem',
                                  mb: '1rem',
                                  cursor: 'pointer',
                              }}
                               onClick={() => handleRoutePage('/surat-keluar/create', item.title)}
                              >
                                 <Image
                                  src={item.image}
                                  alt={'image'}
                                  width={160}
                                  height={210}
                                 />
                                 <Typography>{item.title}</Typography>
                              </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </CustomModal>
        </Card>
    )
}

export default SentComponent