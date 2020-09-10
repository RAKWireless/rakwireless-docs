export const nav = path => {
    if (!path) return
    if (path.includes('://')) window.open(path, '_blank')
    else this.$router.push(path)
}