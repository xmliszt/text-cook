<template>
  <div class="home">
    <ColorBg />
    <Title />
    <div class="btn-holder">
      <div class="btn-box">
        <el-button type="success" @click="redirect('text')">{{
          text_btn
        }}</el-button>
      </div>
      <div class="btn-box">
        <el-button type="warning" @click="redirect('image')">{{
          image_btn
        }}</el-button>
      </div>
      <div class="btn-box">
        <el-button type="danger" @click="redirect('audio')">{{
          audio_btn
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ColorBg from "@/components/ui/ColorBg.vue";
import Title from "../components/ui/Title";
import router from "./../router";
export default {
  name: "Home",
  components: {
    Title,
    ColorBg
  },
  data() {
    return {
      language: "en",
      text_btn: "I got text!",
      image_btn: "I got image!",
      audio_btn: "I got audio!"
    };
  },
  methods: {
    redirect(name) {
      router.push({ name: name });
    }
  }
};
</script>

<style scoped>
.btn-holder {
  display: block;
  margin-top: 30px;
}

.btn-box {
  margin-top: 15px;
  margin-bottom: 15px;
}

button {
  width: 60vw;
  height: 80px;
  font-size: 30px;
  font-weight: 700;
  font-variant-caps: all-petite-caps;
}
</style>
