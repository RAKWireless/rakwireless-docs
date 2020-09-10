<template>
  <div class="row q-py-md justify-start items-center q-gutter-md">
    <q-avatar
      v-for="(certi, id) in certifications"
      :key="`certi-${id}`"
      color="white"
      size="5rem"
      @click="openLink(certi.link)"
      class="cursor-pointer"
    >
      <img :src="certi.img" />
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        content-class="bg-black text-white"
        content-style="font-size: 1rem"
        :offset="[0,5]"
      >{{ certi.name }}</q-tooltip>
    </q-avatar>
  </div>
</template>

<script>
export default {
  name: 'RkCertifications',
  props: ['params'],
  computed: {
    certifications() {
      return this.params.map(p => {
        const data = {
          name: `${p[0]} Certification`,
          link: p[1],
          img: ''
        }

        switch (p[0]) {
          case 'CE':
            data.img = '/assets/images/certifications/CE.png'
            break
          case 'FCC':
            data.img = '/assets/images/certifications/FCC.png'
            break
          case 'IP67':
            data.img = '/assets/images/certifications/IP67.png'
            break
          case 'RoHS':
            data.img = '/assets/images/certifications/RoHS.png'
            break
          case 'KCC':
            data.img = '/assets/images/certifications/KCC.png'
            break
          case 'MIC':
            data.img = '/assets/images/certifications/MIC.png'
            break
          default:
            data.img =
              'https://image.shutterstock.com/image-illustration/white-unknown-document-icon-isolated-600w-1517588975.jpg'
        }

        return data
      })
    }
  },
  methods: {
    openLink(url) {
      if (!url) return
      window.open(url, '_blank')
    }
  }
}
</script>
