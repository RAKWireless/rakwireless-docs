<template>
  <div class="full-width flex flex-center bg-grey-1" style="min-height: 17rem; margin-top: 5rem">
    <div class="row q-py-md justify-center items-center" style="max-width: 900px; margin: 0 auto;">
      <div class="col-12 col-md-2 flex flex-center">
        <q-avatar size="8rem">
          <img :src="author.img" />
        </q-avatar>
      </div>
      <div class="col-12 col-md-9 column q-pa-md">
        <span class="text-h4 q-mb-md">{{ author.name }}</span>
        <span>{{ author.about }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkAuthor',
  computed: {
    author() {
      return this.$page.frontmatter.author
    }
  }
}
</script>