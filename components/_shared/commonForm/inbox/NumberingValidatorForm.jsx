import React, {memo} from 'react';
import {CustomTextField, CustomSelect} from "@/components/_shared/form";
import {Box} from '@mui/material'


const NumberingValidatorForm = ({
    formData,
    handleInputChange,
    values,
    errors,
    isReadonly
}) => {
    return (
       <Box sx={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
           <CustomSelect
            id={'input_numbering'}
            name={'numbering'}
            label={'Penomoran'}
            isRequired={true}
            onChange={(e) => handleInputChange(e)}
            value={values.numbering}
            fullWidth
            options={[
                {label: 'Jatmiko', value: '1'},
                {label: 'Suyotno', value: '2'}
            ]}
            error={false}
            sx={{
                mb: '1rem'
            }}
           />
          <CustomTextField
           id={'input_validator'}
           name={'validator'}
           label={'Paraf / Validator'}
           onChange={(e) => handleInputChange(e)}
           value={values.validator}
           isRequired={true}
           error={false}
           type={'text'}
           placeholder={'Ketik Nama'}
          />
       </Box>
    )
}

export default memo(NumberingValidatorForm);