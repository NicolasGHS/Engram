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
    const [notebooks, setNotebooks] = useState<string[]>([]);

    async function getFolders() {
        try {
            const folders: string[] = await invoke('get_folders');
            setNotebooks(folders);
        } catch (error) {
            console.error('Error reading directory:', error);
        }
    }

    getFolders();

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
                    {notebooks.map((notebook) => (
                        <p>{notebook}</p>
                    ))}
                </Drawer.Body>
                <Drawer.Footer />
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    )
}

export default Sidebar;