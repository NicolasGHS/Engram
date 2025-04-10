import { useState } from "react";
import { invoke } from '@tauri-apps/api/core';


type Note = {
    name: string;
}

const NoteList = () => {
    const [notes, setNotes] = useState<string[]>([]);

    async function getFiles() {
        try {
            const files: string[] = await invoke('read_dir');
            setNotes(files);
        } catch (error) {
            console.error('Error reading directory:', error);
        }
    }

    getFiles();

    return (
        <div className="bg-[#3E3E3E] w-1/3 h-full">
            <p>Notes</p>
            {notes.map((note) => (
                <p>{note}</p>
            ))}
        </div>
    )
}

export default NoteList;