import { call_detect_image } from "../service/imageService";

function isImage(extension) {
  switch (extension.toLowerCase()) {
    case "jpg":
    case "gif":
    case "bmp":
    case "png":
      return true;
  }
  return false;
}

export const convert_image_to_base64 = imgFile =>
  new Promise((resolve, reject) => {
    var parts = imgFile.name.split(".");
    var extension = parts[parts.length - 1];
    if (!isImage(extension))
      reject({
        data: {
          error: {
            message: "Unable to encode invalid image file!"
          }
        }
      });
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = err => reject(err);
  });

export async function get_text_detection_from_image(imgFile) {
  try {
    var base64Img = await convert_image_to_base64(imgFile);
    base64Img = base64Img.split(",")[1];
    var result = await call_detect_image(base64Img);
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
