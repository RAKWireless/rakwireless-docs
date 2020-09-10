<template>
  <div class="column items-center q-my-sm">
    <img
      ref="img"
      :src="opt.src"
      :width="ltMdDiv ? '100%' : opt.width"
      :alt="opt.caption"
      @click.prevent="() => $root.$emit('rk-zoom',opt.src,[$refs.img.clientWidth, $refs.img.clientHeight])"
      style="cursor: zoom-in"
    />
    <div class="text-caption q-my-sm">
      <b>Figure {{opt.figureNumber || figNum}}:</b>
      {{ opt.caption }}
    </div>
  </div>
</template>

<script>
import CommonMixin from './common.mixin'

let count = 0
let zoomFactor = 1.15
let imgEl

export default {
  props: ['params', 'src', 'width', 'figureNumber', 'caption'],
  mixins: [CommonMixin],
  data: () => ({
    figNum: null,
    zoom: false,
    zHeight: 0,
    zWidth: 0
  }),
  computed: {
    opt() {
      const { params, src, width, figureNumber, caption } = this
      if (params) return params
      else {
        return { src, width, figureNumber, caption }
      }
    }
  },
  methods: {
    onImgClicked() {
      this.$root.$emit('rk-zoom', this.opt.src)
    },
    handlePan({ ev, ...info }) {
      imgEl.style.top = imgEl.offsetTop + info.delta.y + 'px'
      imgEl.style.left = imgEl.offsetLeft + info.delta.x + 'px'
    },
    onWheel(ev) {
      // console.log(ev)
      const fh = imgEl.clientHeight
      const fw = imgEl.clientWidth
      let zHeight = fh
      let zWidth = fw

      if (ev.deltaY < 0) {
        zHeight *= zoomFactor
        zWidth *= zoomFactor
      } else if (ev.deltaY > 0) {
        zHeight /= zoomFactor
        zWidth /= zoomFactor
      }

      imgEl.style.width = zWidth + 'px'
      imgEl.style.height = zHeight + 'px'

      // console.log(zHeight, zWidth)

      // const scalechange = zHeight / fh - 1
      const offsetY = (fh - zHeight) / 2
      const offsetX = (fw - zWidth) / 2

      imgEl.style.top = imgEl.offsetTop + offsetY + 'px'
      imgEl.style.left = imgEl.offsetLeft + offsetX + 'px'
      // console.log(offsetY, offsetX)
    },
    onShow() {
      imgEl = document.querySelector('#rk-zoom')
      imgEl.style.top = imgEl.offsetTop + 'px'
      imgEl.style.left = imgEl.offsetLeft + 'px'
    }
  },
  mounted() {
    // console.log(this.$page.path, this.$root.lastPath)
    if (this.$page.path !== this.$root.lastPath) {
      count = 1
      this.figNum = count
      this.$root.lastPath = this.$page.path
    } else this.figNum = ++count
  }
}
</script>