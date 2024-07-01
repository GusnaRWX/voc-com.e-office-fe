import React, {useState} from "react";
import {CustomTextField, CustomButton} from "@/components/_shared/form";
import {useForm} from "@/hooks";
import {Box} from '@mui/material'
import {loginSchema} from "@/utils/schema";

const LoginForm = ({
    setForgotPassword
}) => {
    const defaultValue = {
        username: '',
        password: ''
    }

    const [initialValues, setInitialValues] = useState(defaultValue);
    const {
        values,
        errors,
        handleInputChange,
        invalid,
        resetForm
    } = useForm(initialValues, setInitialValues, true, loginSchema)

    const handleToggleForgotPassword = (e) => {
        e.preventDefault()
        setForgotPassword()
    }

    return (
        <form>
           <CustomTextField
            id={'input_username'}
            name={'username'}
            label={'Username'}
            isRequired={true}
            value={values.username}
            onChange={handleInputChange}
            error={errors.username}
            type={'text'}
            sx={{
                marginBottom: '1rem'
            }}
           />
            <CustomTextField
                id={'input_password'}
                name={'password'}
                label={'Password'}
                isRequired={true}
                value={values.password}
                onChange={handleInputChange}
                error={errors.password}
                type={'password'}
                sx={{
                    marginBottom: '1rem'
                }}
            />
            <Box sx={{
                width: '100%',
                marginTop: '1rem',
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'end'
            }}>
                <a onClick={(e) => handleToggleForgotPassword(e)}
                    style={{
                    fontSize: '12px',
                    color: '#3FC1C9',
                    cursor: 'pointer',
                }}>Forgot Password?</a>
            </Box>
            <CustomButton
             fullWidth
             color={'primary'}
             type={'submit'}
             disabled={invalid}
             onClick={() => console.log('here')}
            >
              <span style={{color: '#FFFFFF'}}>Login</span>
            </CustomButton>
        </form>
    )
}

export default LoginForm;