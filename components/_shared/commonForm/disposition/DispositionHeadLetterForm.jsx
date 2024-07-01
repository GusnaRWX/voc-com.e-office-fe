import React, {memo} from 'react';
import {CustomTextField, CustomButton, CustomDatePicker, CustomSelect} from "@/components/_shared/form";
import {Box, Grid} from '@mui/material'

const DispositionHeadLetterForm = ({
  formData,
  handleInputChange,
  values,
  errors,
  isReadonly = false,
  handleNext,
  handleBack
}) => {
    return (
        <Box sx={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
            <CustomTextField
                id={'input_letter_type'}
                name={'letter_type'}
                onChange={handleInputChange}
                value={values.letterType}
                label={'Nomor Disposisi'}
                isRequired={true}
                fullWidth={true}
                error={false}
                placeholder={'Ketik Nomor'}
                sx={{ mb: '1rem' }}
            />
            <Grid container spacing={2} mb={'1rem'}>
                <Grid item lg={6} xl={6}>
                    <CustomTextField
                        id={'input_place'}
                        name={'place'}
                        onChange={handleInputChange}
                        value={values.place}
                        label={'Tempat'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                        placeholder={'Ketik Nama Tempat'}
                    />
                </Grid>
                <Grid item lg={6} xl={6}>
                    <CustomDatePicker
                        id={'input_date'}
                        name={'date'}
                        onChange={handleInputChange}
                        value={values.date}
                        label={'Tanggal Surat'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} mb={'1rem'}>
                <Grid item lg={6} xl={6}>
                    <CustomTextField
                        id={'input_receiver'}
                        name={'receiver'}
                        onChange={handleInputChange}
                        value={values.receiver}
                        label={'Kepada'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                        placeholder={'Ketik Nama / jabatan'}
                    />
                </Grid>
                <Grid item lg={6} xl={6}>
                    <CustomTextField
                        id={'input_place_to'}
                        name={'place_to'}
                        onChange={handleInputChange}
                        value={values.place_to}
                        label={'Di'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                        placeholder={'Ketik Tempat'}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} mb={'1rem'}>
                <Grid item lg={12} xl={12}>
                    <CustomSelect
                        id={`input_category`}
                        name={'category'}
                        onChange={handleInputChange}
                        value={values.category}
                        label={'Sifat'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                        sx={{ mb: '1rem' }}
                        options={[
                            {label: 'Category 1', value: 'Category 1'},
                            {label: 'Category 2', value: 'Category 2'},
                        ]}
                    />
                </Grid>
            </Grid>
            <CustomTextField
                id={'input_about'}
                name={'about'}
                onChange={handleInputChange}
                value={values.about}
                label={'Hal'}
                isRequired={true}
                fullWidth={true}
                error={false}
                placeholder={'Ketik hal'}
            />
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

export default memo(DispositionHeadLetterForm)