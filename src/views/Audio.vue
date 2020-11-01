<template>
  <div
    class="audio-view"
    v-loading.fullscreen.lock="loading"
    element-loading-text="Running Speech to Text and Translation..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <ColorBg />
    <BackBtn />
    <Title />
    <div class="audio-upload-box">
      <el-upload
        ref="audioUpload"
        action="#"
        :limit="1"
        :auto-upload="false"
        :on-change="onUploadChange"
        :on-exceed="onExceed"
        :file-list="fileList"
        :show-file-list="false"
      >
        <el-button size="small" type="warning"
          >Click to upload your audio</el-button
        >
      </el-upload>
    </div>

    <audio id="audio_playback" controls></audio>

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
import { get_translation } from "../controller/textController";
import { get_text_detection_from_audio } from "../controller/audioController";
import { LANGUAGES } from "../controller";
export default {
  components: {
    Title,
    ColorBg,
    BackBtn
  },
  data() {
    return {
      loading: false,
      output_text: "",
      options: LANGUAGES,
      to: "en",
      audioUrl: "",
      fileList: [],
      audio: null
    };
  },
  methods: {
    copyText() {
      this.$refs.translated.select();
      document.execCommand("copy");
      this.$notify.success("Copied to clipboard!");
    },
    onExceed(files) {
      var audio = {
        raw: files[0]
      };
      this.fileList[0] = audio;
      this.onUploadChange(audio);
    },
    onUploadChange(file) {
      this.audio = file.raw;
      var audio_playback = document.getElementById("audio_playback");
      this.audioUrl = URL.createObjectURL(file.raw);
      audio_playback.src = this.audioUrl;
      audio_playback.onend = () => URL.revokeObjectURL(this.audioUrl);
    },
    async get_detected_text(audioFile) {
      this.loading = true;
      var result = await get_text_detection_from_audio(audioFile);
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
      if (this.audioUrl.length > 0) this.get_detected_text(this.audio);
    },
    audioUrl() {
      if (this.audioUrl.length > 0) this.get_detected_text(this.audio);
    }
  }
};
</script>

<style scoped>
.audio-upload-box {
  margin-bottom: 30px;
}

.language-selection-box {
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
}

.el-select {
  width: 25vw;
}

textarea {
  padding: 10px;
  width: 75vw;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
