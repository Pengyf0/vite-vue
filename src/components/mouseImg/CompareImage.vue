<template>
  <div style="height:100%">
    <div class="image-comparison" ref="box">
      <div class="cover-image" ref="coverImage">
        <img :src="images[0]" alt="" />
      </div>
      <div class="slider" ref="slider" @mousedown="startChange">
        <span class="tag-icon"></span>
      </div>
      <div class="base-image">
        <img :src="images[1]" alt="" />
      </div>

    </div>
  </div>
</template>
  
<script>
export default {
  name: "ImageComparison",
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      offsetX: 0,
    };
  },
  methods: {
    startChange(event) {
      this.offsetX = event.pageX - this.$refs.slider.offsetLeft;
      console.log(event.pageX, this.$refs.slider.offsetLeft, 88, this.offsetX)
      window.addEventListener("mousemove", this.moveHandler);
      window.addEventListener("mouseup", this.endChange);
    },
    endChange() {
      window.removeEventListener("mousemove", this.moveHandler);
      window.removeEventListener("mouseup", this.endChange);
    },
    moveHandler(e) {
      this.$refs.slider.style.left = (e.pageX - this.offsetX || 0) > 500 ? '500px' : (e.pageX - this.offsetX || 0) + "px";
      this.$refs.coverImage.style.width = (e.pageX - this.offsetX || 0) > 500 ? '500px' : (e.pageX - this.offsetX || 0) + "px";
    }
  }
};
</script>
<style lang="scss" scoped>
.image-comparison {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  * {
    user-select: none;
  }

  .slider {
    position: absolute;
    left: -2px;
    width: 2px;
    height: 100%;
    // cursor: col-resize;
    cursor: pointer;
    z-index: 20;
    background: rgba(0, 0, 0, 0.5);

    .tag-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      transform: translate(-50%, -50%);
    }
  }

  .cover-image,
  .base-image {
    position: absolute;
    left: 0;
    height: 100%;
    overflow: hidden;
  }

  .cover-image {
    width: 0;
    z-index: 1;

    img {
      max-height: 100%;
    }
  }

  .base-image {
    height: 100%;

    img {
      max-height: 100%;
    }
  }


}
</style>
  