import React, {useState} from 'react'
import {ZodError} from "zod";
import {useDispatch, useSelector} from "react-redux";

export const useAppDispatch = useDispatch
export const useAppSelector = useSelector

export const useForm = (
    initialValues,
    setFormData,
    validateOnChange = false,
    schema
) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [invalid, setInvalid] = useState(true);

    const validate = (formValues) => {
        try {
            schema.parse(formValues);
            setErrors({})
            setInvalid(false)
        } catch (error) {
            if (error instanceof ZodError) {
                const formattedError = {}
                error.errors.forEach((err) => {
                    const path = err.path.join('.')
                    formattedError[path] = err.message
                })
                setErrors(formattedError)
                setInvalid(true)
            }
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target

        if (name.includes('.')) {
            const keys = name.split('.');
            const updatedValues = { ...values };

            let nestedObject = updatedValues;
            for (let i = 0; i < keys.length - 1; i++) {
                nestedObject = nestedObject[keys[i]];
            }

            nestedObject[keys[keys.length - 1]] = value;

            setValues(updatedValues);
        }else{
            setValues({
                ...values,
                [name]: value
            })
        }

        if (validateOnChange) {
            validate({...values, [name]: value})
        }
    }

    const resetForm = () => {
        setValues(initialValues);
        setFormData(initialValues);
        setErrors({});
    }

    const resetField = (name, value) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetField,
        resetForm,
        invalid
    }
}
