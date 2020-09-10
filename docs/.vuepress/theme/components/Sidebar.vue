<template>
  <aside class="sidebar">
    <q-scroll-area
      ref="scrollArea"
      class="fit q-pb-md"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
      <NavLinks />

      <slot name="top" />

      <SidebarLinks
        :depth="0"
        :items="items"
      />
      <slot name="bottom" />
    </q-scroll-area>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',
  props: ['items'],
  components: { SidebarLinks, NavLinks },
  data: () => ({
    thumbStyle: {
      right: '4px',
      borderRadius: '5px',
      backgroundColor: '#027be3',
      width: '5px',
      opacity: 0.75
    },

    barStyle: {
      right: '2px',
      borderRadius: '9px',
      backgroundColor: '#027be3',
      width: '9px',
      opacity: 0.2
    }
  }),
  methods: {
    setInitialScroll () {
      const { path } = this.$page
      const element = document.getElementById(path)
      if (!element) return

      this.$refs.scrollArea.setScrollPosition(element.offsetTop)
    }
  },
  updated () {
    this.setInitialScroll()
  }
  // not applicable for ssr
  // watch: {
  //   $page: function (val) {
  //     this.setInitialScroll()
  //   }
  // }
}
</script>

<style lang="stylus">
.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  & > .sidebar-links {
    padding: 1.5rem 0;

    & > li > a.sidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    .nav-links {
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    & > .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
