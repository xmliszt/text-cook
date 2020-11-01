import Axios from "axios";
import { KEY } from ".";

export async function call_detect_audio(base64_encoded_audio) {
  // console.log(base64_encoded_img);
  try {
    var resp = await Axios.post(
      "https://speech.googleapis.com/v1/speech:recognize?key=" + KEY,
      {
        config: {
          encoding: "FLAC",
          languageCode: "en-US",
          enableWordTimeOffsets: false
        },
        audio: {
          content: base64_encoded_audio
        }
      }
    );
    var detections = resp.data.results[0].alternatives;
    if (detections.length > 0) {
      return {
        success: true,
        text: detections[0].transcript
      };
    } else {
      return {
        success: false,
        error: "No language detected!"
      };
    }
  } catch (err) {
    return {
      success: false,
      error: err.response
    };
  }
}
