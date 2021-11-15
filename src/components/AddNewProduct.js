import React, { useEffect, useState } from "react";
import "../styles/register.css";
import { useDispatch, useSelector } from "react-redux";
import Input from './Input'
import Select from 'react-select';
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import authHeader from "../utils/authHeader";
import axios from "axios";
import BASE_URL from '../utils/baseUrl'

const AddNewProduct = ({ showFormView }) => {
    const productOption = [
        { label: "ORANGES", value: "ORANGES" },
        { label: "ORANGES", value: "ORANGES" },
        { label: "ORANGES", value: "ORANGES" },

    ]


    // const dispatch = useDispatch();
    // const history = useHistory();
    const initialUser = {
        quantity_in_stock: "",
        name: "",
        unit_price: ""
    };


    const [loginData, setLoginData] = useState(initialUser);
    const inputHandler = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setLoginData({ ...loginData, [name]: value });
    };

    const selectHandler = (payload) => {
        var name = payload.target.name;
        var value = payload.target.value;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData);

        axios.post(`${BASE_URL}/products`, loginData, { headers: authHeader() })
            .then(function (response) {
                toast.success("Successfully Added new Product")
                setTimeout(() => { showFormView("false") }, 3000)

            }).catch((err) => {
                toast.error(err?.response?.data?.message)
            })


    };

    return (
        <>
            <div className="login-form-container">
                <div className="text-center font-bold app-color uppercase text-xl header-reg px-10">
                    Add New Product
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

                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button className="app-background text-gray-800 font-bold  py-2 px-10 rounded inline-flex items-center">
                            <span className="text-white">Add New Product</span>
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddNewProduct;