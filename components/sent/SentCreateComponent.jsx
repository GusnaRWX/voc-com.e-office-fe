import React, {useState} from 'react';
import {Card, Typography, Box, Stepper, Step, StepLabel} from '@mui/material'
import {useRouter} from "next/router";
import {useForm} from "@/hooks";
import RecipientLetterForm from "@/components/_shared/commonForm/inbox/RecipientLetterForm";
import HeadLetterForm from "@/components/_shared/commonForm/inbox/HeadLetterForm";
import ContentLetterForm from "@/components/_shared/commonForm/inbox/ContentLetterForm";
import EndLetterForm from "@/components/_shared/commonForm/inbox/EndLetterForm";
import NumberingValidatorForm from "@/components/_shared/commonForm/inbox/NumberingValidatorForm";
import {CustomButton} from "@/components/_shared/form";
import {CustomModalPdfView, ConfirmationModal} from "@/components/_shared/common";

const steps = [
    'Penerima Surat',
    'Kepala Surat',
    'Isi Surat',
    'Akhir Surat',
    'Penomoran / Paraf'
]

const SentCreateComponent = () => {
    const {query, push} = useRouter();
    const [step, setStep] = useState(0);
    const [preview, setPreview] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);

    const defaultValue = {
        internal_name: '',
        external_receiver: [
            {
                name: '',
                email: '',
                description: ''
            }
        ],
        letter_type: '',
        date: null,
        receiver: '',
        place_to: '',
        category: '',
        attach: '',
        about: '',
        content: '',
        mandate: '',
        mandate_position: '',
        signature_group: [
            {signature_name: ''}
        ],
        numbering: '',
        validator: ''

    }

    const [initialValues, setInitialValues] = useState(defaultValue)
    const {
        values,
        errors,
        handleInputChange,
        setValues,
        invalid
    } = useForm(initialValues, setInitialValues, true)

    const handleAddExternal = () => {
        setInitialValues({
            ...initialValues,
            external_receiver: [
                ...initialValues.external_receiver,
                {name: '', email: '', description: ''}
            ]
        })
        setValues({
            ...values,
            external_receiver: [
                ...values.external_receiver,
                {name: '', email: '', description: ''}
            ]
        })
    }

    const handleAddSignatureGroup = () => {
        setInitialValues({
            ...initialValues,
            signature_group: [
                ...initialValues.signature_group,
                {signature_name: ''}
            ]
        })

        setValues({
            ...values,
            signature_group: [
                ...values.signature_group,
                {signature_name: ''}
            ]
        })
    }

    const handleDeleteExternal = (index) => {
        const initialIndex = initialValues.external_receiver.filter((_, idx) => idx !== index);
        const valuesIndex = values.external_receiver.filter((_, idx) => idx !== index);

        setInitialValues({
            ...initialValues,
            external_receiver: initialIndex
        })

        setValues({
            ...values,
            external_receiver: valuesIndex
        })
    }

    const handleDeleteSignatureGroup = (index) => {
        const initialIndex = initialValues.signature_group.filter((_, idx) => idx !== index);
        const valuesIndex = values.signature_group.filter((_, idx) => idx !== index);

        setInitialValues({
            ...initialValues,
            signature_group: initialIndex
        })

        setValues({
            ...values,
            signature_group: valuesIndex
        })
    }
    return (
        <Card sx={{ p: '1rem' }}>
            <Typography sx={{ fontWeight: 'bold', mb: '2rem' }}>
                Buat {query?.title}
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Stepper sx={{ mb: '4rem' }} activeStep={step} alternativeLabel>
                    {
                        steps.map((step, index) => (
                            <Step key={index}>
                              <StepLabel>{step}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
                <form>
                    {
                        step === 0 && (
                            <RecipientLetterForm
                             formData={initialValues}
                             handleInputChange={handleInputChange}
                             values={values}
                             errors={errors}
                             handleBack={() => push('/surat-keluar')}
                             handleNext={() => setStep(1)}
                             isReadonly={false}
                             handleAddExternal={handleAddExternal}
                             handleDeleteExternal={handleDeleteExternal}
                            />
                        )
                    }
                    {
                        step === 1 && (
                            <HeadLetterForm
                             formData={initialValues}
                             handleInputChange={handleInputChange}
                             values={values}
                             errors={errors}
                             handleBack={() => setStep(0)}
                             handleNext={() => setStep(2)}
                             isReadonly={false}
                            />
                        )
                    }
                    {
                        step === 2 && (
                            <ContentLetterForm
                             formData={initialValues}
                             handleInputChange={handleInputChange}
                             values={values}
                             errors={errors}
                             handleBack={() => setStep(1)}
                             handleNext={() => setStep(3)}
                             isReadonly={false}
                            />
                        )
                    }
                    {
                        step === 3 && (
                            <EndLetterForm
                             formData={initialValues}
                             handleInputChange={handleInputChange}
                             values={values}
                             errors={errors}
                             handleBack={() => setStep(2)}
                             handleNext={() => setStep(4)}
                             isReadonly={false}
                             handleAddSignatureGroup={handleAddSignatureGroup}
                             handleDeleteSignatureGroup={handleDeleteSignatureGroup}
                            />
                        )
                    }
                    {
                        step === 4 && (
                            <>
                             <NumberingValidatorForm
                              formData={initialValues}
                              handleInputChange={handleInputChange}
                              values={values}
                              errors={errors}
                              isReadonly={false}
                             />
                             <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', gap: '1rem', mt: '2rem', paddingLeft: '4rem', paddingRight: '4rem' }}>
                               <CustomButton
                                id={'btn_back'}
                                fullWidth={false}
                                variant={'outlined'}
                                color={'grey'}
                                type={'button'}
                                onClick={() => setStep(3)}
                               >
                                   <span>Kembali</span>
                               </CustomButton>
                               <CustomButton
                                id={'btn_preview'}
                                fullWidth={false}
                                variant={'contained'}
                                color={'indigo'}
                                type={'button'}
                                onClick={() => setPreview(true)}
                               >
                                   <span style={{ color: '#FFFFFF' }}>Preview</span>
                               </CustomButton>
                               <CustomButton
                                id={'btn_submit'}
                                fullWidth={false}
                                variant={'contained'}
                                color={'primary'}
                                type={'button'}
                                onClick={() => setModalConfirm(true)}
                               >
                                   <span style={{ color: '#FFFFFF' }}>Selesai</span>
                               </CustomButton>
                             </Box>
                            </>
                        )
                    }
                </form>
                <CustomModalPdfView
                 open={preview}
                 onClose={() => setPreview(false)}
                 title={'Preview'}
                />
                <ConfirmationModal
                 open={modalConfirm}
                 type={'confirmation'}
                 onClose={() => setModalConfirm(false)}
                 onConfirm={() => push('/surat-keluar')}
                />
            </Box>
        </Card>
    )
}

export default SentCreateComponent;