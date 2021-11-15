import React, { useEffect, useState } from "react";
import "../styles/register.css";
import { useDispatch, useSelector } from "react-redux";
import Input from './Input'
import Select from 'react-select';
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import BASE_URL from '../utils/baseUrl'

const AddSoldProduct = ({showFormView}) => {
    const productOption = [
        { label: "ORANGES", value: "ORANGES" },
        { label: "ORANGES", value: "ORANGES" },
        { label: "ORANGES", value: "ORANGES" },

    ]


    // const dispatch = useDispatch();
    // const history = useHistory();
    // const initialUser = {
    //     email: "",
    //     password: "",
    // };


    // const [loginData, setLoginData] = useState(initialUser);
    const inputHandler = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        // setLoginData({ ...loginData, [name]: value });
    };

    const selectHandler = (payload) => {
        var name = payload.target.name;
        var value = payload.target.value;
        // setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(login(loginData))
        //     .then(() => {
        //         // history.push("/dashboard");
        //         history.push("/users");
        //     })
        //     .catch((err) => {

        //     });
        // axios.post(`${BASE_URL}/user/login`, loginData)
        //     .then(function (response) {
        //         if (response.data.token) {
        //             sessionStorage.setItem('token', response.data.token)
        //         }
        //         toast.success("Successfully logged in")
        //         setTimeout(() => { history.push('/users') }, 3000)

        //     })


    };

    return (
        <>
            <div className="login-form-container">
                <div className="text-center font-bold app-color uppercase text-xl header-reg px-10">
                    Sold Product Registeration
                </div>

                <form onSubmit={handleSubmit} noValidate>

                    <div className="schoolmanager-container w-full max-w-xs mx-auto">
                        <div className="grid grid-cols-6 grid-rows-2  gap-8">


                            <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 flex input-container-flow">
                                <Input
                                    name="name"
                                    inputHandler={inputHandler}
                                    type="text"
                                    labelName="Product name"
                                    placeholder="Product name"
                                    className="login-input"
                                    required
                                />
                                <Input
                                    name="unitprice"
                                    inputHandler={inputHandler}
                                    type="text"
                                    labelName="Unit Price"
                                    placeholder="Unit Price"
                                    className="login-input"
                                    required
                                />
                            </div>
                            <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 flex input-container-flow">
                                <Input
                                    name="quantity"
                                    inputHandler={inputHandler}
                                    type="text"
                                    labelName="Quantity"
                                    placeholder="Quantity"
                                    className="login-input"
                                    required
                                />
                            </div>
                            <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1">
                                <Select
                                    options={productOption}
                                    onChange={(payload) => selectHandler({ ...payload, name: "product" })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button className="app-background text-gray-800 font-bold  py-2 px-10 rounded inline-flex items-center" onClick={()=>showFormView("false")}>
                            <span className="text-white">Add Sold Product</span>
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddSoldProduct;