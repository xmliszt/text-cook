import { call_detect_audio } from "../service/audioService";

export const convert_audio_to_base64 = audioFile =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(audioFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export async function get_text_detection_from_audio(audioFile) {
  try {
    var base64Audio = await convert_audio_to_base64(audioFile);
    base64Audio = base64Audio.split(",")[1];
    var result = await call_detect_audio(base64Audio);
    return result;
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: "Unable to convert audio into base64!"
    };
  }
}
