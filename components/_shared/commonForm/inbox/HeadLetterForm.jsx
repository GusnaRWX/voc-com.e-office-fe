import React, {memo} from 'react';
import {CustomTextField, CustomButton, CustomDatePicker, CustomSelect} from "@/components/_shared/form";
import {Box, Grid} from '@mui/material'

const HeadLetterForm = ({
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
              <CustomSelect
               id={`input_letterHead`}
               name={'letter_head'}
               onChange={handleInputChange}
               value={values.letter_head}
               label={'Jenis / Kop Surat'}
               isRequired={true}
               fullWidth={true}
               error={false}
               sx={{ mb: '1rem' }}
               options={[
                   {label: 'Type 1', value: 'Type 1'},
                   {label: 'Type 2', value: 'Type 2'},
                   {label: 'Type 3', value: 'Type 3'},
                   {label: 'Type 4', value: 'Type 4'},
               ]}
              />
            <Grid container spacing={2} mb={'1rem'}>
                <Grid item lg={6} xl={6}>
                   <CustomTextField
                    id={'input_letterPlace'}
                    name={'letter_place'}
                    onChange={handleInputChange}
                    value={values.letterPlace}
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
                        id={'input_personnel_target_personnel'}
                        name={'letter_personnel_target.0.personnel'}
                        onChange={handleInputChange}
                        value={values.letter_personnel_target[0].personnel}
                        label={'Kepada'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                        placeholder={'Ketik Nama / jabatan'}
                    />
                </Grid>
                <Grid item lg={6} xl={6}>
                    <CustomTextField
                        id={'input_letterPersonalTarget_place'}
                        name={'letter_personnel_target.0.place'}
                        onChange={handleInputChange}
                        value={values.letter_personnel_target[0].place}
                        label={'Di'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                        placeholder={'Ketik Tempat'}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} mb={'1rem'}>
                <Grid item lg={6} xl={6}>
                    <CustomSelect
                        id={`input_letterRule`}
                        name={'letter_rule'}
                        onChange={handleInputChange}
                        value={values.letter_rule}
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
                <Grid item lg={6} xl={6}>
                    <CustomTextField
                        id={'input_attachment'}
                        name={'attachment'}
                        onChange={handleInputChange}
                        value={values.attachment}
                        label={'Lampiran'}
                        isRequired={true}
                        fullWidth={true}
                        error={false}
                        placeholder={'Ketik Lampiran'}
                    />
                </Grid>
            </Grid>
            <CustomTextField
                id={'input_subject'}
                name={'subject'}
                onChange={handleInputChange}
                value={values.subject}
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

export default memo(HeadLetterForm);
