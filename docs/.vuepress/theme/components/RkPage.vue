<template>
  <q-page style="max-width: 1250px; margin: 0 auto; padding: 2rem 2.5rem">
    <rk-breadcrumbs :sidebar-items="sidebarItems" />

    <table id="pdf-container">
      <thead id="pdf-header">
        <tr>
          <th>
            <pdf-header />
          </th>
        </tr>
      </thead>
      <!-- No footer as per suggestion -->
      <tfoot id="pdf-footer">
        <tr>
          <td>
            <pdf-footer v-if="false" />
          </td>
        </tr>
      </tfoot>

      <tbody>
        <tr>
          <td style="max-width: 0px">
            <Content id="pdf-content" class="theme-default-content" />
          </td>
        </tr>
      </tbody>
    </table>

    <PageEdit />
    <q-separator inset />
    <PageNav v-bind="{ sidebarItems }" />
  </q-page>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import RkBreadcrumbs from '@theme/components/RkBreadcrumbs.vue'
import PdfHeader from './PdfHeader'
import PdfFooter from './PdfFooter'

export default {
  components: { PageEdit, PageNav, RkBreadcrumbs, PdfHeader, PdfFooter },
  props: ['sidebarItems'],
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
