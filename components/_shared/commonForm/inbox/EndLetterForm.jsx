import React, {memo} from 'react';
import {CustomSelect, CustomButton, CustomTextField} from "@/components/_shared/form";
import {Box, IconButton} from "@mui/material";
import {FaPlusSquare, FaTrash} from "react-icons/fa";

const EndLetterForm = ({
    formData,
    handleInputChange,
    values,
    errors,
    isReadonly = false,
    handleNext,
    handleBack,
    handleAddSignatureGroup,
    handleDeleteSignatureGroup
}) => {
    return (
      <Box sx={{ paddingLeft: '4rem', paddingRight: '4rem', display: 'flex', flexDirection: 'column' }}>
        <CustomSelect
         id={'input_mandate_personnel'}
         name={'mandate_personnel'}
         label={'Mandat'}
         isRequired={true}
         onChange={(e) => handleInputChange(e)}
         value={values.mandate_personnel}
         error={false}
         placeholder={'Pilih Mandat'}
         options={[
             {label: 'Staff', value: 'Staff'},
             {label: 'Unit', value: 'Unit'},
         ]}
         sx={{
             mb: '1rem'
         }}
        />
          <CustomSelect
              id={'input_mandate_job_title'}
              name={'mandate_job_title'}
              label={'Jabatan Mandat'}
              isRequired={true}
              onChange={(e) => handleInputChange(e)}
              value={values.mandate_job_title}
              error={false}
              placeholder={'Pilih Jabatan'}
              options={[
                  {label: 'Staff', value: 'Staff'},
                  {label: 'Unit', value: 'Unit'},
              ]}
              sx={{
                  mb: '1rem'
              }}
          />
          {
             values.signature_group.map((form, index) => (
                 <Box key={index} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', width: '100%', mb: '1rem' }}>
                   <Box sx={{ width: '100%' }}>
                       <CustomTextField
                           id={`input_signature_name_${index}`}
                           name={`signature_group.${index}.signature_name`}
                           isRequired={false}
                           label={'Penandatangan'}
                           onChange={handleInputChange}
                           value={form.signature_name}
                           error={false}
                           fullWidth={true}
                           type={'text'}
                           placeholder={'Ketik Penandatangan'}
                       />
                   </Box>
                     {
                         values.signature_group.length > 1 && (
                             <IconButton sx={{ mt: '2rem' }} onClick={() => handleDeleteSignatureGroup(index)}>
                                <FaTrash size={20} color={'#F43F5E'}/>
                             </IconButton>
                         )
                     }
                 </Box>
             ))
          }
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', mb: '4rem' }}>
              <CustomButton
                  id={'btn_add_signature_group'}
                  fullWidth={false}
                  variant={'outlined'}
                  color={'grey'}
                  type={'button'}
                  onClick={() => handleAddSignatureGroup()}
              >
                  <FaPlusSquare style={{ marginRight: '1rem' }}/><span>Tembusan</span>
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

export default memo(EndLetterForm);