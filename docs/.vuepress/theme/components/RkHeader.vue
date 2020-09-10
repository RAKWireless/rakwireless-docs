<template>
  <div
    class="wrapper fit flex flex-center text-white"
    :class="{ 'height-1': !ltMdDiv, 'height-2': ltMdDiv }"
  >
    <q-parallax class="fit">
      <template v-slot:media>
        <img :src="header.img" />
      </template>

      <template v-slot:content="scope">
        <div class="absolute-full" style="background-color: rgba(0,0,0,0.2)"></div>
        <div class="full-width content q-gutter-y-md text-white q-px-md" style="z-index: 1">
          <div class="text-h2 text-weight-regular">{{ header.title }}</div>
          <div class="text-h5 text-weight-light" v-html="header.caption"></div>
          <div class="row q-gutter-xs">
            <q-btn
              v-for="(tag, id) of header.tags"
              :key="`tag-${id}`"
              :label="tag.replace(/-/g, ' ')"
              color="white"
              class="text-weight-medium q-px-sm"
              @click="onTagClick(tag)"
              outline
              rounded
              dense
              no-caps
            />
          </div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>

<script>
import CommonMixin from '../../components/common.mixin'

export default {
  name: 'RkHeader',
  mixins: [CommonMixin],
  computed: {
    header() {
      return {
        title:
          this.$page.frontmatter.header.title || 'Lorem ipsum dolor sit amet',
        caption:
          this.$page.frontmatter.header.caption ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ultricies massa, a consectetur lacus. Maecenas placerat molestie felis vel lobortis.',
        img:
          this.$page.frontmatter.header.img ||
          '/assets/rakwireless/rak-default-banner.png',
        tags: this.$page.frontmatter.tags || []
      }
    },
    bgImg() {}
  },
  methods: {
    onTagClick (tag) {
      this.$root.tag = tag.replace(/-/g, ' ')
      // console.log(this.$root.tag)
      this.$router.push('/Knowledge-Hub/Learn/')
    }
  }
}
</script>

<style scoped>
.height-1 {
  height: 50vh !important;
}
.height-2 {
  height: 100vh !important;
}
.wrapper {
  overflow: hidden;
}
.content {
  max-width: 80rem;
  margin: 0 auto;
}
.text-shadowed {
  text-shadow: 1px 1px black;
}
</style>