
<template>
  <div v-html="icon" class="icon inline-block" :style="`width: ${size}px; height: ${size}px; color: ${color};`" />
</template>

<script>
import feather from 'feather-icons'
export default {
  props: {
    name: {
      require: true,
    },
    size: {
      default: 16,
    },
    color: {
      default: "",
    },
  },
  data() {
    return {
        icon: feather.icons[this.name].toSvg()
    };
  }
};
</script>

<style>
.icon svg {
    width: 100%;
    height: 100%;
}
</style>