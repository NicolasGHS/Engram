import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { IconButton } from "@chakra-ui/react"
import { PanelLeft } from "lucide-react";
import {
    Box,
    Button,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
  } from '@chakra-ui/react'


  const Sidebar = ({ onSelectedFolder, selectedFolder }: { onSelectedFolder: (folder: string) => void; selectedFolder: string | null; }) => {
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

    useEffect(() => {
        getFolders();
    }, []);

    console.log("selectedFolder: ", selectedFolder);

    return (
        <Drawer.Root placement={"start"} open={isOpen} size={"xs"} onOpenChange={(e) => setIsOpen(e.open)}>
            <Drawer.Backdrop />
            <Drawer.Trigger asChild>
                <IconButton>
                    <PanelLeft />
                </IconButton>
            </Drawer.Trigger>
            <Drawer.Positioner>
                <Drawer.Content>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                    <Drawer.Title />
                </Drawer.Header>
                <Drawer.Body>
                    <p>Notebooks</p>
                    <div className='flex flex-col'>
                        {notebooks.map((notebook) => (
                            <Button key={notebook} onClick={() => onSelectedFolder(notebook)} variant={notebook === selectedFolder ? "subtle" : "plain"}>
                                {notebook}
                            </Button>
                        ))}
                    </div>
                </Drawer.Body>
                <Drawer.Footer />
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    )
}

export default Sidebar;