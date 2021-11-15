import React, { useEffect, useState } from "react";
import "../styles/register.css";
import { useDispatch, useSelector } from "react-redux";
import Input from '../components/Input'
import Select from 'react-select';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from "react-router-dom";
import authHeader from '../utils/authHeader'
import axios from "axios";
import BASE_URL from '../utils/baseUrl'

const RegistrationPage = ({ showFormView }) => {
    const genderOptions = [
        { label: "MALE", value: "MALE" },
        { label: "FEMALE", value: "FEMALE" }
    ]

    // const dispatch = useDispatch();
    // const history = useHistory();
    const initialUser = {
        email: "",
        password: "",
        fullNames: "",
        email: "",
        nationalId: "",
        gender: "",
    };

    const [loginData, setLoginData] = useState(initialUser);
    const inputHandler = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setLoginData({ ...loginData, [name]: value });

    };

    const selectHandler = (payload) => {
        var name = payload.name;
        var value = payload.value;
        setLoginData({ ...loginData, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${BASE_URL}/employees`, loginData, { headers: authHeader() })
            .then((response) => {

                toast.success("Successfully registered Employee")
                setTimeout(() => { showFormView("false") }, 3000)

            }).catch((error) => {
                toast.error(error?.response?.data?.error)
            })


    };

    return (
        <>
            <div className="login-form-container">
                <div className="text-center font-bold app-color uppercase text-xl header-reg px-10">
                    Employee Register
                </div>

                <form onSubmit={handleSubmit} noValidate>

                    <div className="schoolmanager-container w-full max-w-xs mx-auto">
                        <div className="grid grid-cols-6 grid-rows-2  gap-8">
                            <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 flex input-container-flow">
                                <Input
                                    name="email"
                                    inputHandler={inputHandler}
                                    type="text"
                                    labelName="Email"
                                    placeholder="Email"
                                    className="login-input"
                                    required
                                />
                                <Input
                                    name="fullNames"
                                    inputHandler={inputHandler}
                                    type="text"
                                    labelName="Full Name"
                                    placeholder="Full Name"
                                    className="login-input"
                                    required
                                />
                            </div>
                            <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 flex input-container-flow">
                                <Input
                                    name="password"
                                    inputHandler={inputHandler}
                                    type="password"
                                    labelName="Password"
                                    placeholder="Password"
                                    className="login-input"
                                    required
                                />
                                <Input
                                    name="nationalId"
                                    inputHandler={inputHandler}
                                    type="text"
                                    labelName="National ID"
                                    placeholder="National ID"
                                    className="login-input"
                                    required
                                />
                            </div>
                            <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1">
                                <Select
                                    options={genderOptions}
                                    onChange={(payload) => selectHandler({ ...payload, name: "gender" })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button className="app-background text-gray-800 font-bold  py-2 px-10 rounded inline-flex items-center" >
                            <span className="text-white">Register</span>
                        </button>
                    </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={6000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                />
            </div>

        </>
    )
}

export default RegistrationPage;