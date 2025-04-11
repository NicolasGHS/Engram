use tauri::command;
use home::home_dir;
use walkdir::WalkDir;
use std::path::Path;


pub fn get_file_name(pathname: String) -> String {
    let path = Path::new(&pathname);
    

    path.file_stem()
        .and_then(|stem| stem.to_str())
        .unwrap_or("")
        .to_string()
}

#[command]
pub fn get_files(selected_folder: String) -> Vec<String> {
    let mut files = Vec::new();

    if let Some(home_path) = home_dir() {
        let target_dir = home_path.join("test_folder").join(selected_folder);

        for file in WalkDir::new(target_dir)
            .into_iter()
            .filter_map(|file| file.ok()) 
        {
            if file.metadata().unwrap().is_file() {
                let file_name = get_file_name(file.path().display().to_string());
                // files.push(file.path().display().to_string());
                files.push(file_name);
            }
        }
    }

    files
}

