<!--
/*
 * @Description: SvgIcon公共组件，用于引用svg格式的图标，全局注册
 * @Author: LiuZhen
 * @Date: 2018-07-10 15:05:48
 * @Last Modified by: LiuZhen
 * @Last Modified time: 2019-07-29 15:20:36
 */
-->
<template>
  <svg :class='svgClass' aria-hidden='true'>
    <use :xlink:href='iconName'></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },

  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },

    svgClass () {
      if (this.className) {
        return `svg-icon ${this.className}`
      }
      return `svg-icon`
    }
  }
}
</script>

<style scoped lang='css'>
.svg-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  overflow: hidden;
}
</style>
