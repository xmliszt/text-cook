<template>
  <div
    class="image-view"
    v-loading.fullscreen.lock="loading"
    element-loading-text="Running OCR and Translation..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <ColorBg />
    <BackBtn />
    <Title />
    <div class="image-container">
      <el-upload
        ref="imgUpload"
        action="#"
        :limit="1"
        :auto-upload="false"
        :on-change="onUploadChange"
        :on-exceed="onExceed"
        :file-list="fileList"
        :show-file-list="false"
      >
        <el-button size="small" type="warning"
          >Click to upload your image</el-button
        >
      </el-upload>
      <div style="margin-top: 20px">
        <el-image :src="imgUrl" fit="fill" alt="Failed to Load Image">
          <div
            slot="error"
            style="background-color: white; color: #909399; height: 50vw; display: flex; justify-content: center; align-items: center"
          >
            NO IMAGE
          </div>
        </el-image>
      </div>
    </div>

    <div class="language-selection-box">
      <div style="color: white">
        Translate to: <i class="el-icon-caret-right"></i>
      </div>
      <el-select size="mini" v-model="to" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.language"
          :label="item.name"
          :value="item.language"
        >
        </el-option>
      </el-select>
    </div>
    <el-tooltip
      content="Click to copy to clipboard"
      effect="dark"
      placement="top"
    >
      <textarea
        ref="translated"
        type="textarea"
        :rows="12"
        v-model="output_text"
        resize="none"
        readonly
        @click="copyText"
      >
      </textarea>
    </el-tooltip>
  </div>
</template>

<script>
import ColorBg from "@/components/ui/ColorBg.vue";
import BackBtn from "../components/ui/BackBtn";
import Title from "../components/ui/Title";
import { get_text_detection_from_image } from "../controller/imageController";
import { get_translation } from "../controller/textController";
import { LANGUAGES } from "../controller";
export default {
  components: {
    ColorBg,
    BackBtn,
    Title
  },
  data() {
    return {
      loading: false,
      imgUrl: "",
      output_text: "",
      options: LANGUAGES,
      to: "en",
      fileList: [],
      img: null
    };
  },
  methods: {
    copyText() {
      this.$refs.translated.select();
      document.execCommand("copy");
      this.$notify.success("Copied to clipboard!");
    },
    onExceed(files) {
      var img = {
        raw: files[0]
      };
      this.fileList[0] = img;
      this.onUploadChange(img);
    },
    onUploadChange(file) {
      this.img = file.raw;
      this.imgUrl = URL.createObjectURL(file.raw);
    },
    async get_detected_text(imgFile) {
      this.loading = true;
      var result = await get_text_detection_from_image(imgFile);
      if (result.success) {
        var lang = result.lang;
        var text = result.text;
        if (lang === this.to) {
          this.output_text = text;
          this.loading = false;
        } else {
          result = await get_translation(text, lang, this.to);
          if (result.success) {
            this.output_text = result.data;
          } else {
            this.$message.error(result.error);
          }
          this.loading = false;
        }
      } else {
        this.loading = false;
        console.error(result.error);
        this.$message.error(result.error);
      }
    }
  },
  watch: {
    to() {
      if (this.imgUrl.length > 0) this.get_detected_text(this.img);
    },
    imgUrl() {
      if (this.imgUrl.length > 0) this.get_detected_text(this.img);
    }
  }
};
</script>

<style scoped>
.image-container {
  width: 80vw;
  margin: auto;
  margin-top: 30px;
}

.image-error-slot {
  height: 40vw;
  text-align: center;
  font-size: 40px;
  color: white;
  background-color: #505050;
}

.language-selection-box {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
}

.el-select {
  width: 25vw;
}

.el-image {
  width: 80vw;
  height: 50vw;
  border: 2px solid white;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

textarea {
  padding: 10px;
  width: 75vw;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
