const Navbar = ({ children }) => {
    return (
        <>
            <div>
                <div className="flex app-background text-white justify-between p-3">
                    <h2>EMS</h2>
                    <div className="profile flex ">
                        <h2 className="mr-20">Shallon</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-16"><path fill="none" d="M0 0h24v24H0z" /><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" fill="rgba(255,255,255,1)" /></svg>
                    </div>

                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}


export default Navbar