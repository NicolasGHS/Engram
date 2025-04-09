import { useState } from "react";

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    return (
        <>
            <p className="">Sidebar</p>
        </>
    );  
}

export default Sidebar;