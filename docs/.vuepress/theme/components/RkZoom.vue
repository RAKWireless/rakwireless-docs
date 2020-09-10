<template>
  <q-dialog v-model="zoom" @show="onShow" @hide="onClose" maximized persistent>
    <q-card class="column">
      <q-btn
        class="q-ma-md absolute bg-white"
        style="z-index: 99; right: 0"
        icon="close"
        color="grey-8"
        size="1.25rem"
        @click="onClose"
        round
        flat
      />
      <div
        class="absolute full-width flex flex-center"
        style="z-index: 99; bottom: 0; height: 7rem"
      >
        <q-item class="bg-white full-width" style="max-width: 30rem; margin: auto; border-radius: 50px">
          <q-item-section side>
            <q-btn
              class="q-pa-xs"
              color="primary"
              icon="remove"
              size="1rem"
              @click="zoomIO(-1); onSlide()"
              round
              flat
              dense
            />
          </q-item-section>
          <q-item-section>
            <q-slider
              v-model="slider"
              :min="1"
              :max="100"
              :label-value="`zoom: x${slider}`"
              @input="onSlide"
              label
              label-always
            />
          </q-item-section>
          <q-item-section side>
            <q-btn
              class="q-pa-xs"
              color="primary"
              icon="add"
              size="1rem"
              @click="zoomIO(1); onSlide()"
              round
              flat
              dense
            />
          </q-item-section>
        </q-item>
      </div>
      <q-card-section
        v-touch-pan.prevent.mouse="handlePan"
        class="col flex flex-center"
        style="overflow: hidden"
        @wheel="onClose"
      >
        <img
          class="absolute"
          id="rk-zoom"
          :src="img"
          :draggable="false"
          :width="width"
          :height="height"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
let imgEl, gHeight, gWidth, gOffsetTop, gOffsetLeft

export default {
  data: () => ({
    zoom: false,
    img: '',
    width: null,
    height: null,
    slider: 0
  }),
  methods: {
    zoomIO(v) {
      const { slider } = this
      if (v < 0) this.slider = slider === 0 ? 0 : slider - 1
      else this.slider = slider === 100 ? 100 : slider + 1
    },
    onClose() {
      // re-enable smooth scroll
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth'
      }, 100)

      // show  chat iframe
      const iframes = document.querySelectorAll('iframe')
      for (var i = 0; i < iframes.length; ++i)
        iframes[i].style.display = 'unset'

      this.zoom = false
    },
    onGlobalZoom(path, [width, height]) {
      // temporarily disable smooth scroll
      document.documentElement.style.scrollBehavior = 'unset'
      // console.log('globalzoom: ', path, width, height)
      this.img = path
      this.width = width
      this.height = height
      this.zoom = true
    },
    handlePan({ ev, ...info }) {
      imgEl.style.top = imgEl.offsetTop + info.delta.y + 'px'
      imgEl.style.left = imgEl.offsetLeft + info.delta.x + 'px'
    },
    onSlide() {
      const { slider } = this

      let zHeight = gHeight
      let zWidth = gWidth

      zHeight *= 1 + ((slider - 1) / 100) * 10
      zWidth *= 1 + ((slider - 1) / 100) * 10

      const offsetY = (imgEl.clientHeight - zHeight) / 2
      const offsetX = (imgEl.clientWidth - zWidth) / 2

      imgEl.style.width = zWidth + 'px'
      imgEl.style.height = zHeight + 'px'

      imgEl.style.top = imgEl.offsetTop + offsetY + 'px'
      imgEl.style.left = imgEl.offsetLeft + offsetX + 'px'
    },
    onShow() {
      imgEl = document.querySelector('#rk-zoom')
      imgEl.style.top = imgEl.offsetTop + 'px'
      imgEl.style.left = imgEl.offsetLeft + 'px'

      gHeight = imgEl.clientHeight
      gWidth = imgEl.clientWidth
      gOffsetTop = imgEl.offsetTop
      gOffsetLeft = imgEl.offsetLeft

      // hide all iframes
      const iframes = document.querySelectorAll('iframe')
      for (var i = 0; i < iframes.length; ++i) iframes[i].style.display = 'none'

      this.slider = 1
    }
  },
  mounted() {
    this.$root.$on('rk-zoom', this.onGlobalZoom)
  },
  beforeDestroy() {
    this.$root.$off('rk-zoom', this.onGlobalZoom)
  }
}
</script>

<style scoped>
.gradient {
  background: rgb(255, 255, 255);
  background: -moz-radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
}
</style>