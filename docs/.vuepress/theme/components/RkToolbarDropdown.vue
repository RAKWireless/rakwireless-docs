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
    <!-- <rk-dropdown label="RAK Services" :v2="vertical">
      <q-list style="min-width: 100px">
        <q-item class="full-width q-py-md" :to="`/RUI`">
          <q-item-section>
            <q-item-label>RUI</q-item-label>
            <q-item-label caption>RAKwireless Unified Interface</q-item-label>
          </q-item-section>
        </q-item>
         <q-item class="full-width q-py-md" :to="`/RUI3/`">
          <q-item-section>
            <q-item-label>RUI3</q-item-label>
            <q-item-label caption>RAKwireless Unified Interface 3</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </rk-dropdown> -->
    <rk-dropdown label="RAK Services" :v2="vertical" :autoClose=false v-if="computedMobileScreen">
      <q-list style="min-width: 100px;" >
        <q-item class="full-width q-py-md" :to="`/Product-Categories/Software-APIs-and-Libraries/WisDM`">
          <q-item-section>
            <q-item-label>WisDM</q-item-label>
            <q-item-label caption>Management</q-item-label>
          </q-item-section>
        </q-item>
        
        <q-expansion-item
          label="WisGate"
          caption="Operating System for WisGate Edge System"
          expand-separator
        >
          <q-item
            class="full-width q-py-md" :to="`/Product-Categories/Software-APIs-and-Libraries/WisGateOS`">
              <q-item-section>
                <q-item-label overline>WisGateOS</q-item-label>
              </q-item-section>
          </q-item>
          <q-item 
            class="full-width q-py-md" :to="`/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2`">
              <q-item-section>
                <q-item-label overline>WisGate OS2</q-item-label>
              </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          label="RUI"
          caption="Firmware Development Platform"
          expand-separator
        >
          <q-item
            class="full-width q-py-md" :to="`/RUI`">
              <q-item-section>
                <q-item-label overline>RUI</q-item-label>
              </q-item-section>
          </q-item>
          <q-item 
            class="full-width q-py-md" :to="`/RUI3`">
            <q-item-section>
              <q-item-label overline>RUI3</q-item-label>
            </q-item-section>
          </q-item>
          <q-item 
            class="full-width q-py-md" :to="`/Product-Categories/Software-Tools/WisToolBox/Overview/`">
            <q-item-section>
              <q-item-label overline>WisToolBox</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </rk-dropdown>



    <div 
      v-if="!computedMobileScreen"
      no-wrap>
      <q-btn
        label="RAK Tools"
        class="full-height text-weight-medium"
        style="min-height: 3rem;"
        align="left"
        :icon-right="opened ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        size="1rem"
        @click="opened=!opened"
        flat
        fit
        auto-close
        no-caps
      >
        <q-menu
          transition-show="flip-down"
          transition-hide="flip-up"
          content-class="bg-white text-grey-9"
          @hide="opened=false"
        >
          <q-list class="h-nav">
            <q-item class="list-shrink" >
              <q-item-section>
                <q-item-label class="text-weight-medium text-left q-pb-sm">Management</q-item-label>
                <q-list>
                  <q-item class="item-align">
                    <q-item-label>
                      <a href="/Product-Categories/Software-APIs-and-Libraries/WisDM" class="text-grey-10 text-weight-regular text-subtitle2">WisDM</a> 
                    </q-item-label>
                  </q-item>
                </q-list>
              </q-item-section>
            </q-item>
            <q-item >
              <q-item-section>
                <q-item-label class="text-weight-medium text-left q-pb-sm">Firmware Development Platform</q-item-label>
                <q-list class="list-shrink">
                  <q-item class="item-align">
                    <q-item-section>
                      <q-item-label>
                        <a href="/RUI3" class="text-grey-10 text-subtitle2 text-weight-regular">RUI3</a>
                      </q-item-label>
                      <q-list dense >
                        <q-item dense class="list-height">
                          <a href="/Product-Categories/Software-Tools/DFU/Overview/"
                          class="text-weight-light text-grey-7 text-caption">DFU Tool</a>
                        </q-item>
                        <q-item dense class="list-height">
                          <a href="/Product-Categories/Software-Tools/Serial-Port/Overview/"
                          class="text-weight-light text-grey-7 text-caption">Serial Port Tool</a>
                        </q-item>
                      </q-list>
                    </q-item-section>
                  </q-item>
                  <q-item dense class="list-height item-align">
                    <q-item-label>
                      <a href="/Product-Categories/Software-Tools/WisToolBox/Overview/" class="text-grey-10 text-weight-regular text-subtitle2">WisToolBox</a>
                    </q-item-label>
                  </q-item>
                </q-list>
                  
              </q-item-section>
            </q-item>
            <q-item class="list-shrink">
              <q-item-section>
                <q-item-label class="text-weight-medium text-left q-pb-sm">Operating System for WisGate Edge System</q-item-label>
                <q-list>
                  <q-item class="item-align">
                    <q-item-section>
                      <q-item-label>
                        <a href="/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/" class="text-grey-10 text-weight-regular text-subtitle2">WisGate OS2</a>
                      </q-item-label>
                      <q-list dense >
                        <q-item dense>
                          <a href="/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/" 
                          class="text-weight-light text-grey-7 text-caption"
                          >WisGate OS</a>
                        </q-item>
                      </q-list>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
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
        <q-item class="full-width q-py-md" :to="`/Knowledge-Hub/Pin-Mapper`">
          <q-item-section>
            <q-item-label>IO Mapping</q-item-label>
            <q-item-label caption></q-item-label>
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
      no-caps/>

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
  data: () =>({
    opened : false
  }),
  components: { RkDropdown, RkSearchBox },
  computed: {
    computedClass() {
      return {
        'full-height': !this.vertical,
        'no-wrap': true,
        row: !this.vertical,
        column: this.vertical,
      }
    },
    computedMobileScreen(){
      if(window.screen.width <= 760) {
        console.log("MOBILE VIEW")
        return true
      }
      else {
        console.log("DESKTOP VIEW")
        return false
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

<style scoped>
.h-nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding: 10px;
  max-width:600px;
}

.list-height {
  min-height:15px !important;
}

.item-align{
  padding: 8px 0 ;
}

.list-shrink {
  flex-direction: row;
  align-items: flex-start;
  text-align:left;
  
  /* justify-content: flex-start; */
}
</style>