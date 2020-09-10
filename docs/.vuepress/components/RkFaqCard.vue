<template>
  <rk-card
    @mouseenter="hovered=true"
    @mouseleave="hovered=false"
    @click="nav(path)"
    class="cursor-pointer"
    style="height: 19rem; width: 17rem"
  >
    <div class="col flex flex-center overflow-hidden relative-position">
      <img
        :src="img || '/assets/rakwireless/rak-blue-dark.svg'"
        class="absolute"
        style="z-index: 1; margin-top: auto; max-width: 100%; max-height: 100%;"
      />
      <transition
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <div
          v-show="hovered"
          class="fit absolute q-pa-sm"
          style="background-color: rgba(255,255,255,0.95); z-index: 2"
        >
          <slot />
        </div>
      </transition>
    </div>
    <div class="q-pa-md">
      <div
        class="text-weight-medium ellipsis-2-lines"
        style="font-size: 1.15rem; line-height: normal"
      >{{ label }}</div>
    </div>
  </rk-card>
</template>

<script>
import CommonMixin from './common.mixin'
export default {
  name: 'RkFaqCard',
  props: ['img', 'path', 'label'],
  mixins: [CommonMixin],
  data: () => ({
    hovered: false
  })
}
</script>