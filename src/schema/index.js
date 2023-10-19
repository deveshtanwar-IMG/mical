import * as Yup from 'yup';

export const formValidation = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string().min(10).required("Please Enter 10 digit phone number")
})