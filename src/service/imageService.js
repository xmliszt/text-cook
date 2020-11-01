import Axios from "axios";
import { KEY } from ".";

export async function call_detect_image(base64_encoded_img) {
  // console.log(base64_encoded_img);
  try {
    var resp = await Axios.post(
      "https://vision.googleapis.com/v1/images:annotate?key=" + KEY,
      {
        requests: [
          {
            image: {
              content: base64_encoded_img
            },
            features: [
              {
                type: "TEXT_DETECTION"
              }
            ]
          }
        ]
      }
    );
    var detections = resp.data.responses[0].textAnnotations;
    if (detections.length > 0) {
      return {
        success: true,
        text: detections[0].description,
        lang: detections[0].locale
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
