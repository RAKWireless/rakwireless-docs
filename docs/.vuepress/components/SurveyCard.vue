<template>
  <rk-card
    class="column fit bg-white"
    style="max-width: 350px; max-height: 400px"
  >
    <div class="row q-pa-sm">
      <q-space />
      <q-btn
        color="grey-5"
        icon="fas fa-times"
        size="sm"
        @click="onClose"
        round
        flat
      />
    </div>
    <div class="col flex flex-center overflow-hidden relative-position">
      <img
        src="/assets/images/_/illustration-reading.svg"
        class="absolute q-pa-md"
        style="max-width: 100%; max-height: 100%"
      />
    </div>
    <div
      class="col column items-center q-px-xl text-center q-gutter-y-md"
      style="line-height: normal"
    >
      <div class="text-primary text-weight-bold" style="font-size: 1.25rem">
        Hey RAKStar!
      </div>
      <div>
        We would like to know you better.<br />
        May we ask you to answer this 3-minute reader survey?
      </div>
      <q-btn
        label="Answer Survey"
        color="primary"
        style="width: 15rem"
        @click="onSubmit"
        no-caps
        dense
        rounded
      />
    </div>
  </rk-card>
</template>

<script>
import RkCard from './RkCard'
import Cookies from 'js-cookie'

export default {
  name: 'SurveyCard',
  components: { RkCard },
  methods: {
    onClose() {
      Cookies.set('surveyed', false)
      this.$emit('close')
    },
    onSubmit() {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSf6rqH3CAyI2kvo7rFYXnIsBK808xwC1m8JAN0d_H_IkHhmVQ/viewform',
        '_blank'
      )
      Cookies.set('surveyed', true)
      this.$emit('submit')
    },
  },
}
</script>