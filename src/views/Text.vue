<template>
  <div
    class="text-view"
    v-loading.fullscreen.lock="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <ColorBg />
    <BackBtn />
    <Title />
    <textarea
      type="textarea"
      :rows="12"
      v-model="input_text"
      placeholder="Input your text here to start translating!"
      resize="none"
    >
    </textarea>
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
import {
  get_translation,
  get_detected_lang
} from "../controller/textController";
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
      input_text: "",
      output_text: "",
      options: LANGUAGES,
      from: "",
      to: "en"
    };
  },
  methods: {
    async get_translation(from) {
      if (this.from === this.to) {
        this.output_text = this.input_text;
      } else {
        // this.loading = true;
        var t = await get_translation(this.input_text, from, this.to);
        // this.loading = false;
        if (t.success) {
          this.output_text = t.data;
        } else {
          this.$message.error(t.error);
        }
      }
    },
    copyText() {
      this.$refs.translated.select();
      document.execCommand("copy");
      this.$notify.success("Copied to clipboard!");
    }
  },
  watch: {
    to() {
      this.get_translation(this.from);
    },
    async input_text() {
      if (this.input_text.length > 0) {
        // this.loading = true;
        var from_lang = await get_detected_lang(this.input_text);
        // this.loading = false;
        if (from_lang.success) {
          this.from = from_lang.data;
          this.get_translation(this.from);
        } else {
          this.$message.error(from_lang.error);
        }
      } else {
        this.output_text = this.input_text;
      }
    }
  }
};
</script>

<style scoped>
.text-view {
  margin: auto;
  margin-top: 5vh;
  width: 80vw;
  height: 90vh;
}

.display-box {
  width: 100%;
  height: 40%;
  border: 1px solid white;
  border-radius: 30px;
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
