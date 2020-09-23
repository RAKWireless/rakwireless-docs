<template>
  <!-- <div class="flex flex-center" style="margin: 0 auto;"> -->
  <div class="row" :class="{ 'justify-center': ltMdDiv }">
    <div class="cursor-pointer q-pa-sm" v-for="qs in filtered" :key="qs.path">
      <rk-product
        :img="qs.frontmatter.rak_img"
        :path="qs.frontmatter.xpath || qs.path"
        :label="qs.title"
        :model="qs.frontmatter.rak_model"
        :v2="isV2(qs.path)"
        style="height: 19rem; width: 17rem"
      >{{ qs.frontmatter.rak_desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula est ex, in ullamcorper mauris pretium non. Sed egestas elit nec fermentum aliquet. Nulla molestie nisl fringilla lacus viverra tristique quis ut tellus. Vivamus faucibus porta tellus, eget condimentum enim commodo sit amet.' }}</rk-product>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import CommonMixin from './common.mixin'

export default {
  name: 'RkProducts',
  mixins: [CommonMixin],
  props: {
    tags: { type: Array }
  },
  computed: {
    overviews() {
      return this.$site.pages.filter(t => {
        return t.path.match(
          /^\/Product-Categories\/[\w\d-]+\/[\w\d-]+\/Overview\/$/g
        )
      })
    },
    filtered() {
      return this.overviews.filter(ov => {
        const { rak_grp } = ov.frontmatter

        switch (typeof rak_grp) {
          case 'string':
            return this.tags.includes(rak_grp)
          case 'object':
            if (Array.isArray(rak_grp)) {
              return (
                this.tags.includes(rak_grp[0]) && this.tags.includes(rak_grp[1])
              )
            }
          default:
            console.error(
              `[RkHomeGrid] Invalid rak_grp of type ${typeof rak_grp} for ${
                ov.path
              }`
            )
        }
      })

      // sort keys
      // const ordered = {}
      // const unordered = this.groups
      // filtered.map(t => t.path)
      //   .sort()
      //   .forEach(function(key) {
      //     ordered[key] = unordered[key]
      //   })
      // this.groups = ordered
    }
  },
  methods: {
    isV2(path) {
      const v2 = [
        'Software-APIs-and-Libraries',
        'Software-Tools'
      ]
      return v2.some(t => path.includes(t))
    }
  }
}
</script>

<style scoped>
.grow {
  transition: all 0.1s ease-in-out;
}
.grow:hover {
  transform: scale(1.05);
}
.img-container {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5%;
}
</style>