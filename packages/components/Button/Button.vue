<script setup lang="ts">
// 设置组件选项
defineOptions({
  // 设置组件名称
  name: 'AlButton',
})
</script>

<template>
  <button class="al-button">测试按钮</button>
  <a>链接</a>
</template>
<style lang="scss" scoped>
.al-button {
  background-color: bisque;
  color: red;
}
</style>
