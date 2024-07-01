import React, {memo, useState} from 'react';
import {Box, FormControl, FormControlLabel, FormLabel, FormGroup, Checkbox, Grid} from '@mui/material';
import {CustomButton} from "@/components/_shared/form";

const DispositionInstructionForm = ({
    formData,
    handleInputChange,
    values,
    errors,
    isReadonly = false,
    handleNext,
    handleBack
}) => {
    const [state, setState] = useState({
        instruction1: false,
        instruction2: false,
        instruction3: false,
        instruction4: false,
        instruction5: false,
        instruction6: false,
        instruction7: false,
        instruction8: false,
        instruction9: false,
        instruction10: false
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };


    return (
        <Box sx={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" fullWidth>
              <FormLabel component={'legend'} sx={{ mb: '1rem', color: '#000000' }}>Pilih Instruksi</FormLabel>
              <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid item lg={6} xl={6}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.instruction1} onChange={handleChange} name={'instruction1'}/>
                            }
                            label="Siapkan Konsep"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.instruction2} onChange={handleChange} name={'instruction2'}/>
                            }
                            label="Siapkan Laporan"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.instruction3} onChange={handleChange} name={'instruction3'}/>
                            }
                            label="Sudah diselesaikan / dilaksanakan"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.instruction4} onChange={handleChange} name={'instruction4'}/>
                            }
                            label="Edaran / Kirimkan"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={state.instruction5} onChange={handleChange} name={'instruction5'}/>
                            }
                            label="Gandakan"
                        />
                    </FormGroup>
                </Grid>
                  <Grid item lg={6} xl={6}>
                      <FormGroup>
                          <FormControlLabel
                              control={
                                  <Checkbox checked={state.instruction6} onChange={handleChange} name={'instruction6'}/>
                              }
                              label="Mohon Paraf"
                          />
                          <FormControlLabel
                              control={
                                  <Checkbox checked={state.instruction7} onChange={handleChange} name={'instruction7'}/>
                              }
                              label="Mohon Tanda Tangan"
                          />
                          <FormControlLabel
                              control={
                                  <Checkbox checked={state.instruction8} onChange={handleChange} name={'instruction8'}/>
                              }
                              label="Harap Cek & Laporkan"
                          />
                          <FormControlLabel
                              control={
                                  <Checkbox checked={state.instruction9} onChange={handleChange} name={'instruction9'}/>
                              }
                              label="Sudah ditandatangani"
                          />
                          <FormControlLabel
                              control={
                                  <Checkbox checked={state.instruction10} onChange={handleChange} name={'instruction10'}/>
                              }
                              label="Mohon Diproses"
                          />
                      </FormGroup>
                  </Grid>
              </Grid>
            </FormControl>
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

export default memo(DispositionInstructionForm)