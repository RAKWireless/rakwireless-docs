<template>
  <div :id="id">
    <div class="row fit">
      <div
        class="row items-center"
        :class="{ 'col-12 justify-center': v2, 'q-mr-xl': !v2 }"
      >
        <img :src="img" :width="imgWidth" :height="imgHeight" />
      </div>
      <q-space />
      <div
        class="column col justify-center text-justify"
        :class="{'col-12 flex flex-center': v2}"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { uid } from 'quasar'
import CommonMixin from './common.mixin'

export default {
  name: 'RkHead',
  mixins: [CommonMixin],
  props: {
    img: { type: String },
    imgWidth: { type: String, default: '' },
    imgHeight: { type: String, default: '50px' },
    center: { type: Boolean, default: false }
  },
  data: () => ({
    id: ''
  }),
  computed: {
    v2 () {
      return this.center || this.ltMdDiv
    }
  },
  mounted() {
    const self = this
    setTimeout(() => {
      const el = document.getElementById(self.id)
      const parent = el.parentElement
      const children = parent.children
      for (var i = 0; i < children.length; ++i) {
        if (children[i].id === self.id) {
          if (children[i - 1]) {
            el.id = children[i - 1].id
            el.style.cssText = ''
            const style = window.getComputedStyle(children[i - 1]).cssText
            const props = ['padding-top', 'margin-top', 'margin-bottom']
            style.split(';').map(l => {
              if (props.includes(l.split(':')[0].trim()))
                el.style.cssText += `${l};`
            })
            parent.replaceChild(el, children[i - 1])
          }
          break
        }
      }
      // console.log(el, parent, children)
    }, 100)
  },
  created() {
    this.id = `rk-head-${uid()
      .replace('-', '')
      .slice(0, 6)}`
  }
}
</script>