import React, {memo} from 'react';
import {CustomTextField, CustomButton} from "@/components/_shared/form";
import {Box} from '@mui/material'
import {FaPlusSquare} from "react-icons/fa";

const DispositionReceipentLetterForm = ({
 formData,
 handleInputChange,
 values,
 errors,
 isReadonly = false,
 handleNext,
 handleBack,
 handleAddExternal,
 handleDeleteExternal
}) => {
    return (
        <Box sx={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
            <CustomTextField
                id={'input_internal_name'}
                name={'internal_name'}
                label={'Penerima Surat (Dinas)'}
                isRequired={false}
                onChange={(e) => handleInputChange(e)}
                value={values.internal_name}
                error={false}
                type={'text'}
                sx={{ mb: '2rem' }}
                placeholder={'Ketik nama / jabatan'}
            />
            {
                values.external_receiver.map((form, index) => (
                    <Box key={index} mb={'2rem'}>
                        <CustomTextField
                            id={`input_external_name_${index}`}
                            name={`external_receiver.${index}.name`}
                            isRequired={false}
                            label={'Penerima Surat (External)'}
                            onChange={handleInputChange}
                            value={form.name}
                            error={false}
                            type={'text'}
                            sx={{ mb: '1rem' }}
                            placeholder={'Ketik nama / jabatan'}
                        />
                        <CustomTextField
                            id={`input_external_email_${index}`}
                            name={`external_receiver.${index}.email`}
                            isRequired={false}
                            onChange={handleInputChange}
                            value={form.email}
                            error={false}
                            type={'text'}
                            sx={{ mb: '1rem' }}
                            placeholder={'Ketik Email'}
                        />
                        <CustomTextField
                            id={`input_external_description_${index}`}
                            name={`external_receiver.${index}.description`}
                            isRequired={false}
                            onChange={handleInputChange}
                            value={form.description}
                            error={false}
                            type={'text'}
                            sx={{ mb: '1rem' }}
                            placeholder={'Ketik Keterangan'}
                        />
                        {
                            values.external_receiver.length > 1 && (
                                <CustomButton
                                    id={`btn_delete_${index}`}
                                    type={'button'}
                                    variant={'contained'}
                                    color={'red'}
                                    onClick={() => handleDeleteExternal(index)}
                                >
                                    <span style={{ color: '#FFFFFF' }}>Hapus Penerima</span>
                                </CustomButton>
                            )
                        }
                    </Box>
                ))
            }
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', mb: '4rem' }}>
                <CustomButton
                    id={'btn_add_external'}
                    fullWidth={false}
                    variant={'outlined'}
                    color={'grey'}
                    type={'button'}
                    onClick={() => handleAddExternal()}
                >
                    <FaPlusSquare style={{ marginRight: '1rem' }}/><span>Tambah Penerima</span>
                </CustomButton>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', mt: '2rem' }}>
                <CustomButton
                    id={'btn_back'}
                    fullWidth={false}
                    variant={'outlined'}
                    color={'grey'}
                    type={'button'}
                    sx={{ mr: '1rem' }}
                    onClick={() => handleBack()}
                >
                    <span>Kembali</span>
                </CustomButton>
                <CustomButton
                    id={'btn_next'}
                    fullWidth={false}
                    variant={'contained'}
                    color={'primary'}
                    type={'button'}
                    onClick={() => handleNext()}
                >
                    <span style={{ color: '#FFFFFF' }}>Berikutnya</span>
                </CustomButton>
            </Box>
        </Box>
    )
}

export default memo(DispositionReceipentLetterForm)