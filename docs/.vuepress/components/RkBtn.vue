<template>
  <div class="q-py-md flex flex-center">
    <q-btn
      v-if="opt._blank"
      class="q-px-lg"
      color="primary"
      style="line-height: normal"
      type="a"
      target="_blank"
      :size="opt.size || '0.95rem'"
      :label="opt.label"
      :href="opt.src"
      :rounded="!square"
      no-caps
      dense
    />
    <q-btn
      v-else
      class="q-px-lg"
      color="primary"
      style="line-height: normal"
      :size="opt.size || '0.95rem'"
      :label="opt.label"
      :to="opt.src"
      :rounded="!square"
      no-caps
      dense
    />
  </div>
</template>

<script>
export default {
  props: {
    params: { type: Object },
    src: { type: String },
    label: { type: String },
    _blank: { type: Boolean, default: false },
    size: { type: String },
    square: { type: Boolean, default: false }
  },
  computed: {
    opt() {
      const { params, src, label, _blank, size } = this
      if (params) return params
      else return { src, label, _blank, size }
    }
  }
}
</script>