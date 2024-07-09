import React, {memo, useState, useEffect} from 'react';
import {Editor, CustomButton} from "@/components/_shared/form";
import {Box} from '@mui/material'

const ContentLetterForm = ({
    formData,
    handleInputChange,
    values,
    errors,
    isReadonly = false,
    handleNext,
    handleBack
}) => {
    const [val, setVal] = useState('')

    useEffect(() => {
            handleInputChange({
                target: {
                    name: 'letter_content',
                    value: val
                }
            })
    }, [val]);

    return (
        <Box sx={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
            <Editor
             name={'content'}
             value={val}
             onChange={setVal}
            />
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', mt: '4rem' }}>
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

export default memo(ContentLetterForm)