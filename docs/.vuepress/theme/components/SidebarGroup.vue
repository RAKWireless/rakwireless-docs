<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
      `depth-${depth}`
    ]"
  >
    <RouterLink
      v-if="item.path"
      class="sidebar-heading clickable"
      :class="{
        open,
        'active': isActive($route, item.path)
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span class="float-left" style="width:90%">{{ item.title }}</span>
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
      <!-- Temporarily disabled -->
      <div v-if="item.download" class="float-right">
        <q-btn icon="fas fa-download" size="xs" @click="onDownload(item.path)" round flat dense />
      </div>
    </RouterLink>

    <p v-else class="sidebar-heading" :class="{ open }" @click="$emit('toggle')">
      <span>{{ item.title }}</span>
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
    </p>

    <DropdownTransition>
      <SidebarLink
        v-if="item.nested"
        :sidebar-depth="item.sidebarDepth || sidebarDepth"
        :item="item"
      />
    </DropdownTransition>
    <DropdownTransition>
      <SidebarLinks
        v-if="open || !collapsable"
        class="sidebar-group-items"
        :items="item.children"
        :sidebar-depth="item.sidebarDepth || sidebarDepth"
        :depth="depth + 1"
      />
    </DropdownTransition>
  </section>
</template>

<script>
import { isActive } from '../util'
import DropdownTransition from '@theme/components/DropdownTransition.vue'
import SidebarLink from '@theme/components/SidebarLink.vue'

export default {
  name: 'SidebarGroup',

  components: {
    DropdownTransition,
    SidebarLink
  },

  props: ['item', 'open', 'collapsable', 'depth', 'sidebarDepth'],

  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks = require('@theme/components/SidebarLinks.vue').default
  },
  mounted() {
    // console.log('item: ', this.item)
  },

  methods: {
    isActive,
    onDownload(pathname) {
      const { origin } = window.location
      // this.$q.dialog({
      //   title: 'Information',
      //   message: `This should open a new tab to download <b>${origin}/${pathname}</b>.`,
      //   html: true
      // })
      const xEncoded = encodeURIComponent(`${origin}${pathname}`)
      window.open(
        `https://dl-docs.rakwireless.com/api/render/?emulateScreenMedia=false&pdf.format=legal&url=${xEncoded}`,
        '_blank'
      )
    }
  }
}
</script>

<style lang="stylus">
.sidebar-group {
  .sidebar-group {
    padding-left: 0.5em;
  }

  &:not(.collapsable) {
    .sidebar-heading:not(.clickable) {
      cursor: auto;
      color: inherit;
    }
  }

  // refine styles of nested sidebar groups
  &.is-sub-group {
    padding-left: 0;

    & > .sidebar-heading {
      font-size: 0.95em;
      line-height: 1.4;
      font-weight: normal;
      padding-left: 2rem;

      &:not(.clickable) {
        opacity: 0.5;
      }
    }

    & > .sidebar-group-items {
      padding-left: 1rem;

      & > li > .sidebar-link {
        font-size: 0.95em;
        border-left: none;
      }
    }
  }

  &.depth-2 {
    & > .sidebar-heading {
      border-left: none;
    }
  }
}

.sidebar-heading {
  color: $textColor;
  transition: color 0.15s ease;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  // text-transform uppercase
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  border-left: 0.25rem solid transparent;

  &.open, &:hover {
    color: inherit;
  }

  .arrow {
    position: relative;
    top: -0.12em;
    left: 0.5em;
  }

  &.clickable {
    &.active {
      font-weight: 600;
      color: $accentColor;
      border-left-color: $accentColor;
    }

    &:hover {
      color: $accentColor;
    }
  }
}

.sidebar-group-items {
  transition: height 0.1s ease-out;
  font-size: 0.9rem;
  overflow: hidden;
}
</style>
