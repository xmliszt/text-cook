<template>
  <div class="back-btn-holder">
    <el-button
      type="danger"
      circle
      icon="el-icon-arrow-left"
      @click="redirect('home')"
    ></el-button>
  </div>
</template>

<script>
import router from "../../router";
export default {
  methods: {
    redirect(name) {
      router.push({ name: name });
    }
  }
};
</script>

<style scoped>
.back-btn-holder {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 999;
}
</style>
