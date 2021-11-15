const TableSubHeader = ({ tabs = [], activeSubTab, changeActiveSubTab, children }) => {

    return (
        <>
            <div className="flex justify-between tabs-container">
                <div>

                    {tabs.map((tab) => (
                        <button onClick={() => changeActiveSubTab(tab)} className={` ml-4 font-medium ${activeSubTab === tab && 'active'}`}>{tab}</button>
                    ))}
                </div>
                {children}
            </div>
        </>
    )
}

export default TableSubHeader