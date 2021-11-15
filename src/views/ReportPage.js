import React from 'react';
import Navbar from '../components/Navbar'
import TableHeader from '../components/TableHeader'
import TableSubHeader from '../components/TableSubHeader'
import RegistrationPage from '../views/RegistrationPage'
import ReportTable from '../components/ReportTable'
import AddNewProduct from '../components/AddNewProduct'
import AddSoldProduct from '../components/AddSoldProduct'
const ReportPage = ({ products, employees }) => {

    const [activeTab, setActiveTab] = React.useState("Products")
    const [activeSubTab, setActiveSubTab] = React.useState("STOCK IN")
    const [showForm, setShowForm] = React.useState("false")

    const changeActiveTab = (newValue) => {
        setActiveTab(newValue)
    }
    const showFormView = (newValue) => {
        setShowForm(newValue)
    }

    // console.log(showForm, activeTab, activeSubTab)
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
        tabs.add(report.title)
    })
    tabs = [...tabs]

    return (
        <>
            <div>
                <Navbar>
                    <TableHeader tabs={[...tabs]} activeTab={activeTab} changeActiveTab={changeActiveTab}>
                        {activeTab === "Employees" &&
                            <div>
                                <button className="register-button" onClick={() => showFormView("Employees")}>Register Employee</button>
                            </div>
                        }
                    </TableHeader>

                    {activeTab === "Products" &&

                        <TableSubHeader tabs={["STOCK IN", "STOCK OUT"]} activeSubTab={activeSubTab} changeActiveSubTab={changeActiveSubTab}>
                            <div>
                                <button className="register-button" onClick={() => showFormView(`${activeSubTab === "STOCK IN" ? "StockIn" : activeSubTab === "STOCK OUT" ? "StockOut" : ""}`)}>{activeSubTab === "STOCK OUT" ? "Add stock out Product" : "Add stock in Product"}</button>
                            </div>
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