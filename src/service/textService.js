import Axios from "axios";
import { KEY } from ".";

export async function call_get_detected_langs(input_text) {
  try {
    var resp = await Axios.post(
      "https://translation.googleapis.com/language/translate/v2/detect?key=" +
        KEY,
      {
        q: input_text
      }
    );
    var detections = resp.data.data.detections;
    if (detections.length > 0) {
      return {
        success: true,
        data: detections[0][0].language
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
      error: err.response.data.error
    };
  }
}

export async function call_get_supported_langs() {
  try {
    var resp = await Axios.get(
      "https://translation.googleapis.com/language/translate/v2/languages?key=" +
        KEY
    );
    return {
      success: true,
      data: resp.data.data.languages
    };
  } catch (err) {
    return {
      success: false,
      error: err.response.data.error
    };
  }
}

export async function call_get_supported_translation_langs(target_lang) {
  console.log(target_lang);
  try {
    var resp = await Axios.post(
      "https://translation.googleapis.com/language/translate/v2/languages?key=" +
        KEY,
      {
        target: target_lang
      }
    );
    return {
      success: true,
      data: resp.data.data.languages
    };
  } catch (err) {
    return {
      success: false,
      error: err.response.data.error
    };
  }
}

export async function call_text_translation_service(
  input_text,
  input_lang,
  output_lang
) {
  try {
    var resp = await Axios.post(
      "https://translation.googleapis.com/language/translate/v2?key=" + KEY,
      {
        q: input_text,
        source: input_lang,
        target: output_lang,
        format: "text"
      },
      {
        "Content-Type": "application/json"
      }
    );
    return {
      success: true,
      data: resp.data.data.translations[0].translatedText
    };
  } catch (err) {
    return {
      success: false,
      error: err.response.data.error
    };
  }
}
