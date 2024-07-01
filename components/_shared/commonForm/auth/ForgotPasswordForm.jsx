import React, {useState} from "react";
import {CustomTextField, CustomButton} from "@/components/_shared/form";
import {useForm} from "@/hooks";
import {forgotPasswordSchema} from "@/utils/schema";
import {Typography, InputAdornment} from "@mui/material";
import { MdEmail } from "react-icons/md";

const ForgotPasswordForm = ({
    setForgotPassword
}) => {
    const defaultValue = {
        email: ''
    }

    const [initialValues, setInitialValues] = useState(defaultValue)

    const {
        values,
        errors,
        handleInputChange,
        resetForm,
        invalid
    } = useForm(initialValues, setInitialValues, true, forgotPasswordSchema)

    return (
        <form>
          <Typography component={'h5'} mb={'1rem'}>Lupa Sandi?</Typography>
          <Typography component={'p'} mb={'2rem'}>Kami akan mengirimkan sandi sekali pakai ke email.</Typography>
          <CustomTextField
           id={'input_email'}
           name={'email'}
           label={'Email'}
           isRequired={true}
           value={values.email}
           onChange={handleInputChange}
           error={errors.email}
           type={'text'}
           InputProps={{
               startAdornment: (
                   <InputAdornment position={'start'}>
                       <MdEmail />
                   </InputAdornment>
               )
           }}
           sx={{
               marginBottom: '1rem'
           }}
          />
          <CustomButton
              id={'btn_submit'}
              fullWidth
              color={'primary'}
              type={'submit'}
              disabled={invalid}
              onClick={() => console.log('here')}
              sx={{
                  marginBottom: '1rem'
              }}
          >
              <span style={{ color: '#FFFFFF' }}>Kirim Email</span>
          </CustomButton>
          <CustomButton
           id={'btn_cancel'}
           fullWidth
           variant={'outlined'}
           color={'grey'}
           type={'button'}
           onClick={() => setForgotPassword()}
          >
            <span>Batal</span>
          </CustomButton>
        </form>
    )
}

export default ForgotPasswordForm