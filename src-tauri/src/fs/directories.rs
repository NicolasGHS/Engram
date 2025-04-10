use tauri::command;
use home::home_dir;
use walkdir::WalkDir;
use std::path::Path;


pub fn get_folder_name(pathname: String) -> String {
    let path = Path::new(&pathname);
    

    path.file_stem()
        .and_then(|stem| stem.to_str())
        .unwrap_or("")
        .to_string()
}

#[command]
pub fn get_folders() -> Vec<String> {
    let mut folders = Vec::new();

    if let Some(home_path) = home_dir() {
        let target_dir = home_path.join("test_folder");

        for folder in WalkDir::new(target_dir)
            .into_iter()
            .filter_map(|folder| folder.ok()) 
        {
            if folder.metadata().unwrap().is_dir() {
                let folder_name = get_folder_name(folder.path().display().to_string());

                // folders.push(folder.path().display().to_string());
                folders.push(folder_name);

            }
        }
    }

    folders
}