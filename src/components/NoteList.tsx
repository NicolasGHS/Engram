import { useState, useEffect } from "react";
import { invoke } from '@tauri-apps/api/core';


const NoteList = ({ selectedFolder }: { selectedFolder: string | null }) => {
    const [notes, setNotes] = useState<string[]>([]);

    async function getFiles() {
        try {
            const files: string[] = await invoke('get_files', { selectedFolder: selectedFolder });
            setNotes(files);
        } catch (error) {
            console.error('Error reading directory:', error);
        }
    }

    useEffect(() => {
        if (selectedFolder) {
            getFiles();
        }
    }, [selectedFolder]);

    return (
        <div className="bg-[#3E3E3E] w-1/3 h-full">
            <p>Notes</p>
            {notes.map((note) => (
                <p key={note}>{note}</p>
            ))}
        </div>
    )
}

export default NoteList;