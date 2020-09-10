<template>
  <div :class="computedClass">
    <q-btn
      class="full-height text-weight-medium"
      style="min-height: 3rem;"
      align="left"
      :label="label"
      :icon-right="opened ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
      size="1rem"
      @click="opened=!opened"
      flat
      no-caps
    >
      <q-menu
        v-if="!v2"
        transition-show="flip-down"
        transition-hide="flip-up"
        content-class="bg-white text-grey-9"
        auto-close
        fit
        max-width="15rem"
        @hide="opened=false"
      >
        <slot></slot>
      </q-menu>
    </q-btn>
    <div v-if="v2 && opened" class="column q-ml-md">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String },
    v2: { type: Boolean, default: false }
  },
  data: () => ({
    opened: false
  }),
  computed: {
    computedClass() {
      return {
        column: this.v2,
        'no-wrap': true
      }
    }
  }
}
</script>