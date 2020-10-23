<template>
  <div :class="computedClass">
    <q-btn
      v-if="vertical"
      label="Home"
      class="full-height"
      align="left"
      style="min-height: 3rem"
      size="1rem"
      :to="`/`"
      flat
      no-caps
    />
    <rk-search-box v-if="!vertical" class="gt-md" />
    <rk-dropdown label="RAK Services" :v2="vertical">
      <q-list style="min-width: 100px">
        <q-item class="full-width q-py-md" :to="`/RUI`">
          <q-item-section>
            <q-item-label>RUI</q-item-label>
            <q-item-label caption>Rakwireless Unified Interface</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </rk-dropdown>
    <rk-dropdown label="Knowledge Hub" :v2="vertical">
      <q-list style="min-width: 100px">
        <q-item class="full-width q-py-md" :to="`/Knowledge-Hub/Learn`">
          <q-item-section>
            <q-item-label>Learn Section</q-item-label>
            <q-item-label caption>Learning is never boring</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="full-width q-py-md" :to="`/Knowledge-Hub/FAQs`">
          <q-item-section>
            <q-item-label>FAQs</q-item-label>
            <q-item-label caption>Frequently Asked Questions</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </rk-dropdown>
    <q-btn
      label="Community"
      class="full-height"
      align="left"
      style="min-height: 3rem"
      size="1rem"
      @click="openLink('https://forum.rakwireless.com/?utm_source=Docs&utm_medium=Docsheader&utm_campaign=RAKDocs', '_blank')"
      flat
      no-caps
    />
    <!-- Temporarily disabled -->
    <!-- <rk-dropdown label="Languages" :v2="vertical">
      <q-list style="min-width: 100px">
        <q-item
          class="full-width q-py-md"
          @click="openLink('https://doc.rakwireless.com')"
          clickable
        >
          <q-item-section>
            <q-item-label>English (US)</q-item-label>
            <q-item-label caption>en-US</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="full-width q-py-md"
          @click="openLink('https://doc.rakwireless.com.cn')"
          clickable
        >
          <q-item-section>
            <q-item-label>Chinese</q-item-label>
            <q-item-label caption>zh-CN</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </rk-dropdown> -->
  </div>
</template>

<script>
import RkDropdown from '@theme/components/RkDropdown.vue'
import RkSearchBox from '@theme/components/RkSearchBox.vue'

export default {
  name: 'RkToolbarDropdown',
  props: {
    vertical: { type: Boolean, default: false }
  },
  components: { RkDropdown, RkSearchBox },
  computed: {
    computedClass() {
      return {
        'full-height': !this.vertical,
        'no-wrap': true,
        row: !this.vertical,
        column: this.vertical
      }
    }
  },
  methods: {
    openLink(url, opt = '_self') {
      window.open(url, opt)
    }
  }
}
</script>