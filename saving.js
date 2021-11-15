import React, { useEffect } from 'react';
import { fetchAllUsers } from '../actions/userAction'
import { connect } from "react-redux";
import UsersTable from '../components/usersTable'
const UsersPage = ({ loading, dispatch, users }) => {

    React.useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    return (
        <>
            <UsersTable
                tableData={users?.docs}
                loading={loading}
            ></UsersTable>
            <div className="flex w-full justify-center">

                <div className="bg-white flex items-center justify-center px-3 w-50">
                    <button className="new-school-link">
                        Add new Employee
                    </button>
                </div>

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.users.loading,
    users: state.users.users,
})


export default connect(mapStateToProps)(UsersPage);