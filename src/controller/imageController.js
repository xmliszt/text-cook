import { call_detect_image } from "../service/imageService";

export const convert_image_to_base64 = imgFile =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export async function get_text_detection_from_image(imgFile) {
  try {
    var base64Img = await convert_image_to_base64(imgFile);
    base64Img = base64Img.split(",")[1];
    var result = await call_detect_image(base64Img);
    return result;
  } catch (err) {
    return {
      success: false,
      error: "Unable to convert image into base64!"
    }
  }
}
