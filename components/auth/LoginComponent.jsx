import React, {useState} from "react";
import {Box, Card, Typography} from '@mui/material';
import {BG_LOGIN, LOGO_LOGIN} from "@/utils/assetConstant";
import Image from "next/image";
import LoginForm from "@/components/_shared/commonForm/auth/LoginForm";
import ForgotPasswordForm from "@/components/_shared/commonForm/auth/ForgotPasswordForm";

const Overlay = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(54, 79, 107, 0.6)'
        }}></div>
    )
}

const BaseWrapper = ({
    children
}) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'transparent',
            zIndex: '10',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>{children}</div>
    )
}

const LoginComponent = () => {
    const [forgotPassword, setForgotPassword] = useState(false)
    const handleForgotPassword = () => {
        setForgotPassword(!forgotPassword)
    }
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            background: '#FFFFFF',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Box
             sx={{
                 width: '100%',
                 height: '50%',
                 backgroundImage: `url('${BG_LOGIN}')`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center',
                 borderRadius: '18px',
                 position: 'relative',
                 overflow: 'hidden'
             }}
            >
              <Overlay />
            </Box>
            <BaseWrapper>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFFFFF',
                    marginBottom: '2rem'
                }}>
                    <Typography component={'p'} sx={{ fontSize: '30px', fontWeight: 'bold' }}>Selamat Datang Kembali</Typography>
                    <p>Silahkan masuk ke akun anda</p>
                </Box>
                <Card sx={{
                    maxWidth: '453px',
                    width: '100%',
                    position: 'relative',
                    padding: '2rem',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2);'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'start',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <Image
                         src={LOGO_LOGIN}
                         alt={'logo_login'}
                         width={70}
                         height={80}
                        />
                    </Box>
                    <Box mt={'2rem'}>
                        {
                            !forgotPassword && (
                                <LoginForm setForgotPassword={handleForgotPassword}/>
                            )
                        }
                        {
                            forgotPassword && (
                                <ForgotPasswordForm setForgotPassword={handleForgotPassword}/>
                            )
                        }
                    </Box>
                </Card>
            </BaseWrapper>
        </Box>
    )
}

export default LoginComponent;