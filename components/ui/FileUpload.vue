<template>
  <div class="custom-file-upload">
    <div class="dropzone_image_upload">
      <div
        v-if="true"
        ref="uploadImg"
        class="upload_img"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
      >
        <div class="drop_div">
          <label for="assetsFieldHandle" class="brows_btn">
            <div class="label-block">
              <span class="svg">
                <svg-file-upload />
              </span>
              <p class="text-upload">Upload file PNG, PDF, CSV</p>
            </div>
          </label>
          <input
            id="assetsFieldHandle"
            ref="file"
            type="file"
            class="input_file"
            accept=".pdf,.jpg,.jpeg,.png"
            @change="changeFile"
          />
        </div>
      </div>
      <div v-if="false" class="progressbar-wrapper">
        <div class="progressbar">
          <div class="progressbar-content">
            <div class="part" :style="{ width: countWidth }"></div>
          </div>
          <span>{{ (5 / 10) * 100 }}%</span>
        </div>
      </div>

      <div v-if="selectFile" class="file-name">
        <button class="btn-upload" @click="removeImage">
          <svg-close-black />
        </button>
        <span>{{ selectFile }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SvgFileUpload from "~/assets/img/upload-file.svg?inline";
import SvgCloseBlack from "~/assets/img/close-black.svg?inline";
export default {
  name: "FileUpload",
  components: {
    SvgFileUpload,
    SvgCloseBlack,
  },
  data() {
    return {
      selectFile: "",
      progress: 0,
    };
  },
  computed: {
    countWidth() {
      return (5 / 10) * 100 + "%";
    },
  },
  methods: {
    dragover(event) {
      event.preventDefault();
      if (!event.currentTarget.classList.contains("bg-gray-300")) {
        this.$refs.uploadImg.classList.add("bg-grey");
      }
    },
    dragleave(event) {
      this.$refs.uploadImg.classList.remove("bg-grey");
    },
    drop(event) {
      event.preventDefault();
      this.changeFile();
    },
    changeFile() {
      this.selectFile = this.$refs.file.files[0].name;

      // const formData = new FormData();
      // formData.append("file", this.$refs.file.files);
      // this.$axios
      //   .post("/file-progress", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //     onUploadProgress(progressEvent) {
      //       this.progress = parseInt(
      //         Math.round((progressEvent.loaded / progressEvent.total) * 100)
      //       );
      //     },
      //   })
      //   .then(function () {
      //     console.log("SUCCESS!!");
      //   })
      //   .catch(function () {
      //     console.log("FAILURE!!");
      //   });
    },

    removeImage() {
      this.selectFile = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/ui/file-upload";
</style>
