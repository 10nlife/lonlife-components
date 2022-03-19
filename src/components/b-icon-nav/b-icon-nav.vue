<template>
  <div class="main-nav">
    <slot></slot>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export interface iconProps {
  icon: string
}

export default defineComponent({
  name: 'b-icon-nav',
  props: {
    title: {
      type: String,
      require: true
    }
  }
})
</script>

<style lang="less" scoped>
.main-nav {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #757575;
  cursor: pointer;

  .title {
    margin: 0 5px;
    font-size: 14px;
  }
}
</style>
