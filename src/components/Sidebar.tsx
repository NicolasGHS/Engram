import { useState } from "react";
import { Button } from "@chakra-ui/react";

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    return (
        <>
            <p className="">Sidebar</p>
            <Button>Test button</Button>
        </>
    );  
}

export default Sidebar;