<template>
  <q-page  style="max-width: 1250px; margin: 0 auto; padding: 2rem 2.5rem">
    <rk-breadcrumbs :sidebar-items="sidebarItems" />
    <Content id="nodeToRenderAsPDF" class="fit theme-default-content" />

    <PageEdit />
    <q-separator inset />
    <PageNav v-bind="{ sidebarItems }" />
  </q-page>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import RkBreadcrumbs from '@theme/components/RkBreadcrumbs.vue'

export default {
  components: { PageEdit, PageNav, RkBreadcrumbs },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
.theme-default-content {
  max-width: 2000px !important;
  padding: 0 !important;
}
</style>
