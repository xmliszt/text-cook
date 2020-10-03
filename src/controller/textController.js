import {
  call_text_translation_service,
  call_get_supported_langs,
  call_get_supported_translation_langs,
  call_get_detected_langs
} from "../service/textService";

export async function get_all_supported_langs() {
  var langs = await call_get_supported_langs();
  return langs;
}

export async function get_all_supported_langs_for(target_lang) {
  var langs = await call_get_supported_translation_langs(target_lang);
  return langs;
}

export async function get_detected_lang(input_text) {
  var lang = await call_get_detected_langs(input_text);
  return lang;
}

export async function get_translation(input_text, input_lang, output_lang) {
  if (input_text) {
    var result = await call_text_translation_service(
      input_text,
      input_lang,
      output_lang
    );
    return result;
  } else {
    return {
      success: true,
      data: ""
    };
  }
}
