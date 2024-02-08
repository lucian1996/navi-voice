// src/main.rs

// region: --- mod
mod _utils;
// endregion: --- mod

// region: --- crates
pub use crate::_utils::azure::azure_response_to_audio;
pub use crate::_utils::azure::get_azure_response;
pub use crate::_utils::clipboard::get_clipboard;
pub use crate::_utils::clipboard::speak_clipboard;
pub use crate::_utils::endpoints::playback_pause_endpoint;
pub use crate::_utils::endpoints::playback_resume_endpoint;
pub use crate::_utils::endpoints::playback_stop_endpoint;
pub use crate::_utils::endpoints::speak_clipboard_endpoint;
pub use crate::_utils::endpoints::speak_ollama_endpoint;
pub use crate::_utils::ollama::ollama_generate_api;
pub use crate::_utils::ollama::speak_ollama;
pub use crate::_utils::record::record_audio;
pub use crate::_utils::server::launch_playback_server;
pub use crate::_utils::test::test_endpoint;
pub use crate::_utils::transcribe::speech_to_text;
// endregion: --- crates

// region: --- modules
use response_engine::AppState;
use response_engine::AudioPlaybackManager;
use response_engine::PlaybackCommand;
// endregion: --- modules

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    launch_playback_server().await
}
