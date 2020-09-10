<template>
  <rk-card
    class="overflow-hidden"
    @mouseenter="hovered=true"
    @mouseleave="hovered=false"
    @click="nav(path)"
  >
    <div class="col flex flex-center overflow-hidden relative-position">
      <img
        :src="img || '/assets/rakwireless/rak-blue-dark.svg'"
        class="absolute q-pa-md"
        style="max-width: 100%; max-height: 100%;"
      />
      <transition
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutDown"
      >
        <div
          v-show="hovered"
          class="column fit absolute q-pa-sm"
          style="max-height: 99%; background-color: rgba(255,255,255,0.95); z-index: 2"
        >
          <div
            class="col overflow-hidden q-mb-xs non-selectable flex flex-center"
            style="line-height: 1.25rem"
          >
            <slot />
          </div>
        </div>
      </transition>
    </div>
    <div class="q-px-md q-py-sm">
      <div
        class="text-weight-medium ellipsis-2-lines"
        style="font-size: 1.15rem; line-height: normal"
      >{{ name }}</div>
      <q-separator class="q-my-sm" />
      <div class="row items-center">
        <div class="text-caption">
          Model:
          <b>{{ model_ }}</b>
        </div>
        <q-space />
        <q-btn
          icon="fas fa-external-link-alt"
          size="0.5rem"
          color="grey-7"
          @click="e => { customNav(path); e.stopPropagation() }"
          round
          flat
        />
      </div>
    </div>
  </rk-card>
</template>

<script>
import CommonMixin from './common.mixin'
export default {
  name: 'RkProduct',
  props: ['img', 'path', 'label', 'model'],
  mixins: [CommonMixin],
  data: () => ({
    hovered: false
  }),
  computed: {
    name() {
      if (this.model) return this.label
      else return this.label.replace(this.model_, '').trim()
    },
    model_() {
      return this.model || this.label.split(' ')[0]
    }
  },
  methods: {
    test(p) {
      p.stopPropagation()
      console.log(p)
    },
    customNav(path) {
      this.nav(`${window.location.origin}${path}`)
    }
  }
}
</script>