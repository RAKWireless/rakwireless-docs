<template>
  <div style="padding: 0 0 2.5rem 0">
    <q-breadcrumbs class="text-grey-7" gutter="xs">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el
        v-for="item in items"
        :key="item.path"
        :label="item.label.replace(/-/g, ' ')"
        :to="item.path"
      />
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: 'RkBreadcrumbs',
  props: ['sidebarItems'],
  computed: {
    items() {
      const path = this.$page.path
      const splits = path === '/' ? [] : path.slice(1, -1).split('/')
      return splits.map((s, idx) => {
        return {
          label: s,
          path: this.getlink(splits, idx)
        }
      })
    }
  },
  methods: {
    getlink(splits, idx) {
      let t = ''
      for (let i = 0; i <= idx; ++i) {
        t = `${t}/${splits[i]}`
      }
      return t
    }
  },
  mounted() {
    // console.log(this.$page.path)
    // console.log()
  }
}
</script>