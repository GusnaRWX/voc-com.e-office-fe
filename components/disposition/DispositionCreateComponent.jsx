import React, {useState} from 'react';
import {Card, Typography, Box, Stepper, Step, StepLabel} from '@mui/material'
import {useRouter} from "next/router";
import {useForm} from "@/hooks";
import DispositionReceipentLetterForm from "@/components/_shared/commonForm/disposition/DispositionReceipentLetterForm";
import DispositionHeadLetterForm from "@/components/_shared/commonForm/disposition/DispositionHeadLetterForm";
import DispositionContentLetterForm from "@/components/_shared/commonForm/disposition/DispositionContentLetterForm";
import DispositionInstructionForm from "@/components/_shared/commonForm/disposition/DispositionInstructionForm";
import DispositionNumberingValidatorForm from "@/components/_shared/commonForm/disposition/DispositionNumberingValidatorForm";
import {CustomButton} from "@/components/_shared/form";
import {CustomModalPdfView, ConfirmationModal} from "@/components/_shared/common";

const steps = [
    'Penerima Surat',
    'Kepala Surat',
    'Isi Surat',
    'Instruksi',
    'Penomoran / Paraf'
]

const DispositionCreateComponent = () => {
    const {query, push} = useRouter();
    const [preview, setPreview] = useState(false);
    const [modalConfirm, setModalConfirm] = useState(false);
    const [step, setStep] = useState(0);

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
        instruction: [],
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

    return (
        <Card sx={{ p: '1rem' }}>
            <Typography sx={{ fontWeight: 'bold', mb: '2rem' }}>
                Buat Disposisi
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
                            <DispositionReceipentLetterForm
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
                           <DispositionHeadLetterForm
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
                            <DispositionContentLetterForm
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
                          <DispositionInstructionForm
                              formData={initialValues}
                              handleInputChange={handleInputChange}
                              values={values}
                              errors={errors}
                              handleBack={() => setStep(2)}
                              handleNext={() => setStep(4)}
                              isReadonly={false}
                          />
                        )
                    }
                    {
                        step === 4 && (
                          <>
                           <DispositionNumberingValidatorForm
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
                    onConfirm={() => push('/disposisi')}
                />
            </Box>
        </Card>
    )
}

export default DispositionCreateComponent;