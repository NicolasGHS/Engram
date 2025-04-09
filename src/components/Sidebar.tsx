import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
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

    async function getFiles() {
        try {
            const files: string[] = await invoke('read_dir');
            console.log(files);
        } catch (error) {
            console.error('Error reading directory:', error);
        }
    }

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
                    <Button onClick={getFiles}>
                        Read files
                    </Button>
                </Drawer.Body>
                <Drawer.Footer />
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    )
}

export default Sidebar;