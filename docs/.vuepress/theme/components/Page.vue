<template>
  <main class="page">
    <slot name="top" />
    
    <Content
      id="nodeToRenderAsPDF"
      class="theme-default-content"
    />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />
    <div
      class="q-mx-md text-center text-grey-8"
      style="font-size: 0.90rem"
      v-for="(footer, id) of $site.themeConfig.pageFooter"
      :key="`footer-${id}`"
    >
      {{ footer }}
    </div>

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
