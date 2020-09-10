<template>
  <div class="row q-py-lg text-grey-8">
    <div v-if="editLink">
      <a class="text-grey-8" :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink />
    </div>

    <q-space />

    <div v-if="lastUpdated">
      <span class="text-weight-medium">{{ lastUpdatedText }}:</span>
      <span class="text-grey-6">{{ lastUpdated }}</span>
    </div>
  </div>
</template>

<script>
import isNil from 'lodash/isNil'
import { endingSlashRE, outboundRE } from '../util'

export default {
  name: 'PageEdit',

  computed: {
    lastUpdated() {
      return this.$page.lastUpdated
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    editLink() {
      const showEditLink = isNil(this.$page.frontmatter.editLink)
        ? this.$site.themeConfig.editLinks
        : this.$page.frontmatter.editLink

      const {
        repo,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(
          repo,
          docsRepo,
          docsDir,
          docsBranch,
          this.$page.relativePath
        )
      }
      return null
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      )
    }
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo
        return (
          base.replace(endingSlashRE, '') +
          `/src` +
          `/${docsBranch}/` +
          (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '') +
        `/edit` +
        `/${docsBranch}/` +
        (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
        path
      )
    }
  }
}
</script>