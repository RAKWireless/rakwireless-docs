export default {
  data: () => ({
    ltMdDiv: null
  }),
  methods: {
    updateLtMdDiv () {
      const div = document.querySelector('#lt-md-div')
      if (!div) return
      const style = getComputedStyle(div)
      this.ltMdDiv = style.display === 'block'
    },
    nav (path) {
      if (!path) return
      if (path.includes('://')) window.open(path, '_blank')
      else this.$router.push(path[path.length - 1] === '/' ? path : `${path}/`)
    }
  },
  mounted () {
    this.updateLtMdDiv()
  },
  updated () {
    this.updateLtMdDiv()
  }
}