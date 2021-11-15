const TableHeader = ({ tabs = [], activeTab, changeActiveTab, children }) => {
    return (
        <>
            <div className="flex justify-between tabs-container">
                <div>

                    {tabs.map((tab) => (
                        <button onClick={() => changeActiveTab(tab)} className={` ml-4 font-medium ${activeTab === tab && 'active'}`}>{tab}</button>
                    ))}
                </div>
                {children}
            </div>
        </>
    )
}

export default TableHeader