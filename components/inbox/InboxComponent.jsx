import React, {useState, useEffect} from 'react';
import {Card, Box, TableRow, TableCell, IconButton} from '@mui/material';
import {exampleDataTable} from "@/utils/siteSetting";
import {CustomTable, CustomDatePicker, CustomSelect, SearchField} from "@/components/_shared/form";
import {FaEye, FaPrint, FaTrash} from "react-icons/fa6";
import {FaEdit} from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import {ConfirmationModal, CustomModalPdfView, CustomModalTimeline} from "@/components/_shared/common";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {getLetterRequested} from "@/store/reducers/slice/letterSlice";

const headerItems = [
    {id: 'seq', label: 'No', sortable: false},
    {id: 'date', label: 'Tanggal Masuk', sortable: true},
    {id: 'no', label: 'Nomor Surat', sortable: true},
    {id: 'subject', label: 'Perihal', sortable: true},
    {id: 'letterType', label: 'Jenis Surat', sortable: true},
    {id: 'actions', label: 'Aksi', sortable: false}
]

const InboxComponent = () => {
    const state = useAppSelector((state) => state.letter);
    const [rowsPerPage, setRowsPerPage] = useState(state?.itemPerPage || 10)
    const [page, setPage] = useState(state.page || 1)
    const [direction, setDirection] = useState('desc')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('');
    const [date, setDate] = useState(null);
    const [modalDelete, setModalDelete] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [modalView, setModalView] = useState(false);
    const [modalStatus, setModalStatus] = useState(false);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch({
            type: getLetterRequested.toString(),
            payload: {
                page: 1,
                itemPerPage: 10,
                sort: '',
                direction: 'desc',
                search: '',
                type: 1
            }
        })
    }, []);

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

    // this for handle sort
    const handleRequestSort = (event, headId) => {
        const isAsc = sort === headId && direction === 'asc';
        setDirection(isAsc ? 'desc' : 'asc');
        setSort(headId)
    }

    useEffect(() => {
        dispatch({
            type: getLetterRequested.toString(),
            payload: {
                page: page,
                itemPerPage: rowsPerPage,
                direction: direction,
                sort: sort,
                search: search,
                type: 1
            }
        })
    }, [page, rowsPerPage, direction, sort, search])

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
                </Box>
            </Box>
            <CustomTable
                count={state?.itemTotals}
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
                    state?.loading && (
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center' }} colSpan={6}>Loading...</TableCell>
                        </TableRow>
                    )
                }
                {
                    !state.loading && state?.data.length === 0 && (
                        <TableRow>
                            <TableCell sx={{ textAlign: 'center' }} colSpan={6}>Data Not Found</TableCell>
                        </TableRow>
                    )
                }
                {
                    !state.loading && state?.data.length > 0 && (
                        state?.data?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item?.seq}</TableCell>
                                <TableCell>{item?.date}</TableCell>
                                <TableCell>{item?.no}</TableCell>
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
                    )
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
            <CustomModalTimeline
             open={modalStatus}
             onClose={() => setModalStatus(false)}
            />
        </Card>
    )
}

export default InboxComponent