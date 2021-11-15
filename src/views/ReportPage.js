import React from 'react';
import Navbar from '../components/Navbar'
import TableHeader from '../components/TableHeader'
import TableSubHeader from '../components/TableSubHeader'
import RegistrationPage from '../views/RegistrationPage'
import ReportTable from '../components/ReportTable'
import AddNewProduct from '../components/AddNewProduct'
import AddSoldProduct from '../components/AddSoldProduct'
import axios from 'axios'
import authHeader from '../utils/authHeader';
import BASE_URL from '../utils/baseUrl'
import { toast } from 'react-toastify'

const ReportPage = ({ products, employees }) => {

    const [activeTab, setActiveTab] = React.useState("Products")
    const [activeSubTab, setActiveSubTab] = React.useState("STOCK IN")
    const [showForm, setShowForm] = React.useState("false")
    const [currentUser, setCurrentUser] = React.useState({})

    const getCurrentUser = async () => {
        await axios.get(`${BASE_URL}/auth/current-user  `, { headers: authHeader() })
            .then((response) => {
                setCurrentUser(response?.data?.data)
            }).catch((error) => {
                toast.error(error?.response?.data?.error)
            })
    }
    const changeActiveTab = (newValue) => {
        setActiveTab(newValue)
    }
    const showFormView = (newValue) => {
        setShowForm(newValue)
    }

    React.useEffect(async () => {
        await getCurrentUser()
    }, [])
    console.log(showForm, activeTab, activeSubTab)
    const changeActiveSubTab = (newValue) => {
        setActiveSubTab(newValue)
    }
    const reports = [
        {
            title: "Products",
            reports: products,
        },
        {
            title: "Employees",
            reports: employees
        }
    ]
    let tabs = new Set()
    reports.forEach(report => {
        if (currentUser?.userType === "EMPLOYEE" && report?.title === "Employees") {

        } else {

            tabs.add(report.title)
        }
    })
    tabs = [...tabs]

    return (
        <>
            <div>
                <Navbar>

                    <TableHeader tabs={[...tabs]} activeTab={activeTab} changeActiveTab={changeActiveTab} type={currentUser?.userType}>
                        {activeTab === "Employees" &&
                            <div>
                                <button className="register-button" onClick={() => showFormView("Employees")}>Register Employee</button>
                            </div>
                        }
                    </TableHeader>

                    {activeTab === "Products" &&

                        <TableSubHeader tabs={["STOCK IN", "STOCK OUT"]} activeSubTab={activeSubTab} changeActiveSubTab={changeActiveSubTab}>
                            {currentUser?.userType !== "EMPLOYEE" &&

                                <div>
                                    <button className="register-button" onClick={() => showFormView(`${activeSubTab === "STOCK IN" ? "StockIn" : activeSubTab === "STOCK OUT" ? "StockOut" : ""}`)}>{activeSubTab === "STOCK OUT" ? "Add stock out Product" : "Add stock in Product"}</button>
                                </div>
                            }
                        </TableSubHeader>
                    }



                    {(showForm === "Employees" && activeTab === "Employees") ? <RegistrationPage showFormView={showFormView} /> : (showForm !== "Employees" && activeTab === "Employees") ? <ReportTable /> : ''}

                    {(showForm === "StockIn" && activeTab === "Products" && activeSubTab === "STOCK IN") ? <AddNewProduct showFormView={showFormView} /> : (showForm !== "StockIn" && activeTab === "Products" && activeSubTab === "STOCK IN") ? <ReportTable /> : ""}
                    {(showForm === "StockOut" && activeTab === "Products" && activeSubTab === "STOCK OUT") ? <AddSoldProduct showFormView={showFormView} /> : (showForm !== "StockOut" && activeTab === "Products" && activeSubTab === " STOCK OUT") ? <ReportTable /> : ""}

                </Navbar>
            </div>
        </>
    )
}

export default ReportPage