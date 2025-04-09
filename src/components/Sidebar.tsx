import { useState } from 'react';
import {
    Box,
    Button,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
  } from '@chakra-ui/react'


  const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Drawer.Root placement={"start"} open={isOpen} size={"xs"} onOpenChange={(e) => setIsOpen(e.open)}>
            <Drawer.Backdrop />
            <Drawer.Trigger asChild>
                <Button variant="outline" size="sm">
                    Close
                </Button>
            </Drawer.Trigger>
            <Drawer.Positioner>
                <Drawer.Content>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                    <Drawer.Title />
                </Drawer.Header>
                <Drawer.Body>
                    <p>Notebooks</p>
                </Drawer.Body>
                <Drawer.Footer />
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    )
}

export default Sidebar;