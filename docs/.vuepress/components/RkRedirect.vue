<template>
  <div>Redirecting ...</div>
</template>

<script>
export default {
  props: {
    to: { type: String },
    parseUrl: { type: String, default: null }
  },
  mounted() {
    if (this.parseUrl) {
      const variations = ['evaluation', 'breakout', 'module']
      const parsed = this.parseUrl.match(/rak\d+/gi)
      if (parsed && parsed.length) {
        const device = parsed[0].toLowerCase()
        const variation = variations.filter(t => this.parseUrl.includes(t))[0]
        for (const page of this.$site.pages) {
          const path = page.path.toLowerCase()
          if (path.includes(device) && path.includes('overview')) {
            // additional filter for variations
            if (variation) {
              if (path.includes(variation)) {
                this.$router.push(page.path)
                return
              }
            } else {
              this.$router.push(page.path)
              return
            }
          }
        }
      }
      // send to 404 if not found
      this.$router.push('/404/')
    } else {
      const { to } = this
      this.$router.push(to[to.length - 1] === '/' ? to : `${to}/`)
    }
  }
}
</script>