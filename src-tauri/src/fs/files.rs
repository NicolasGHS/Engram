use tauri::command;
use home::home_dir;
use walkdir::WalkDir;


#[command]
pub fn read_dir() -> Vec<String> {
    let mut files = Vec::new();

    if let Some(home_path) = home_dir() {
        let target_dir = home_path.join("test_folder");

        for file in WalkDir::new(target_dir)
            .into_iter()
            .filter_map(|file| file.ok()) 
        {
            if file.metadata().unwrap().is_file() {
                files.push(file.path().display().to_string());
            }
        }
    }

    files
}