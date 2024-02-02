<template>
  <div class="row q-py-md justify-start items-center q-gutter-md row-cert">
    <q-avatar
      v-for="(certi, id) in certifications"
      :key="`certi-${id}`"
      square
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
          case 'FAC':
            data.img = '/assets/images/certifications/FAC.png'
            break
          case 'FCC':
            data.img = '/assets/images/certifications/FCC.png'
            break
          case 'IP65':
            data.img = '/assets/images/certifications/IP65.jpg'
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
          case 'IC':
            data.img = '/assets/images/certifications/IC.png'
            break
          case 'IMDA':
            data.img = '/assets/images/certifications/IMDA.png'
            break
          case 'Ukraine':
            data.img = '/assets/images/certifications/Ukraine.png'
            break
          case 'SRRC':
            data.img = '/assets/images/certifications/SRRC.svg'
            break
          case 'TELEC':
            data.img = '/assets/images/certifications/TELEC.svg'
            break
          case 'RCM':
            data.img = '/assets/images/certifications/RCM.svg'
            break
          case 'OFCA':
            data.img = '/assets/images/certifications/OFCA.svg'
            break
          case 'Anatel':
            data.img = '/assets/images/certifications/Anatel.svg'
            break
          case 'REACH':
            data.img = '/assets/images/certifications/REACH.jpg'
            break
          case 'UKCA':
            data.img = '/assets/images/certifications/ukca.png'
            break
          case 'KC':
            data.img = '/assets/images/certifications/KCC.png'
            break
          case 'NTC':
            data.img = '/assets/images/certifications/NTC.png'
            break
          case 'NCC':
            data.img = '/assets/images/certifications/NCC.png'
            break
          case 'LoRaWAN':
            data.img = '/assets/images/certifications/lorawan-certified.png'
            break
          case 'JRL':
            data.img = '/assets/images/certifications/JRL.png'
            break
          case 'NBTC':
            data.img = '/assets/images/certifications/NBTC.png'
            break
          case 'ISED':
            data.img = '/assets/images/certifications/ISED.png'
            break
          case 'RSM':
            data.img = '/assets/images/certifications/RSM.png'
            break
          case 'EAC':
            data.img = '/assets/images/certifications/EAC.png'
            break
          case 'SUTEL':
            data.img = '/assets/images/certifications/SUTEL.png'
            break
          case 'Vietnam':
            data.img = '/assets/images/certifications/Vietnam.png'
            break
          case 'SIRIM':
            data.img = '/assets/images/certifications/SIRIM.png'
            break
          case 'TDRA':
            data.img = '/assets/images/certifications/TDRA.png'
            break
          case 'SUBTEL':
            data.img = '/assets/images/certifications/SUBTEL.png'
            break
          case 'MOC':
            data.img = '/assets/images/certifications/MOC.png'
            break
          case 'WPC':
            data.img = '/assets/images/certifications/WPC.png'
            break
          case 'MA':
            data.img = '/assets/images/certifications/MA.jpg'
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
