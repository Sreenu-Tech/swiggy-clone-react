import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

interface ISignupForm {
    name: string;
    phoneNo: string;
    email: string
}

export default function Signup() {

    const [isSubmmitting, setIsSubmmitting] = useState(false);

    const signUpForm = useFormik<ISignupForm>({
        initialValues: {
            name: '',
            phoneNo: '',
            email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required').min(4).max(50),
            phoneNo: Yup.string().required('Phone No required').min(10).max(10).matches(RegExp('^[0-9]+$'), 'Invalid PhoneNo format'),
            email: Yup.string().required('Email is required').email('Invalid email format')
        }),
        onSubmit: async (formValue: ISignupForm) => {
            try {
                const res = await fetch(`http://localhost:3002/account/signup`, {
                    method: 'POST',
                    body: JSON.stringify(formValue)
                })
                const result = await res.json();
                console.log(result);
            }
            catch (err) {
                console.log(err)
            }

            fetch('').then().catch()

        },
    })

    const handleContinue = () => {
        console.log(signUpForm.values)
    }

    return (
        <div className="flex flex-col gap-5">
            <TextField id="name" name="name" label="Name" variant="standard" value={signUpForm.values
                .name} onChange={signUpForm.handleChange} />
            <span className="text-red-700 font-normal">{signUpForm.errors.name}</span>
            <TextField id="phoneNo" label="Phone No" variant="standard" value={signUpForm.values.phoneNo} onChange={signUpForm.handleChange} />
            <span className="text-red-700 font-normal">{signUpForm.errors.phoneNo}</span>
            <TextField id="email" label="Email" variant="standard" value={signUpForm.values.email} onChange={signUpForm.handleChange} />
            <span className="text-red-700 font-normal">{signUpForm.errors.email}</span>
            {JSON.stringify(signUpForm.values)}

            <button className="border bg-green-500 text-white p-3 disabled:bg-gray-500" onClick={() => signUpForm.handleSubmit()} disabled={isSubmmitting}>Continute</button>
        </div>
    )
}