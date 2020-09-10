<template>
  <div
    class="column my-card relative-position"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RkCard'
}
</script>

<style>
.my-card {
  border-radius: 15px;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.1);
}
/* .my-card:before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
} */
</style>