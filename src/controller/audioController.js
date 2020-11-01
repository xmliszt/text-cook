import { call_detect_audio } from "../service/audioService";

function isAudio(extension) {
  switch (extension.toLowerCase()) {
    case "flac":
      return true;
  }
  return false;
}

export const convert_audio_to_base64 = audioFile =>
  new Promise((resolve, reject) => {
    var parts = audioFile.name.split(".");
    var extension = parts[parts.length - 1];
    if (!isAudio(extension))
      reject({
        data: {
          error: {
            message:
              "Audio must be in FLAC format! Please use online converter to convert your audio file first!"
          }
        }
      });
    const reader = new FileReader();
    reader.readAsDataURL(audioFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = err => reject(err);
  });

export async function get_text_detection_from_audio(audioFile) {
  try {
    var base64Audio = await convert_audio_to_base64(audioFile);
    base64Audio = base64Audio.split(",")[1];
    var result = await call_detect_audio(base64Audio);
    if (result.success) {
      return result;
    } else {
      throw result.error;
    }
  } catch (err) {
    return {
      success: false,
      error: err === undefined ? "Unknown Error!" : err.data.error.message
    };
  }
}
