<template>
  <div class="bg-grey-1 text-grey-7" style="padding: 2.5rem 0">
    <!-- <rk-faq-footer v-show="this.isShow"/> -->

    <div
      class="q-mx-md text-center text-italic q-px-md"
      style="max-width: 40rem; margin: 1.5rem auto 0 auto;"
    >LoRa® is a registered trademark or service mark of Semtech Corporation or its affiliates. LoRaWAN® is a licensed mark.</div>
    <div class="full-height flex flex-center q-mb-md">
      <img :src="`/assets/rakwireless/RAK-only-gray.png`" style="width: 20rem" alt="https://docs.rakwireless.com/assets/rakwireless/RAK-only-gray.png"/>
      <br />
    </div>
    <div class="column q-mx-md text-center">
      <span>
        © 2014-2023
        <a
          href="https://www.rakwireless.com/en-us/?utm_source=RAK-Doc-Home&utm_medium=footer"
          target="_blank"
        >RAKwireless Technology Limited</a>
      </span>
      <span>All rights reserved.</span>
      <div class="row justify-center q-mt-md social-icons-container">
        <q-btn
          v-for="link in links"
          :key="link.href"
          :icon="link.icon"
          type="a"
          :href="link.href"
          target="_blank"
          size="1rem"
          flat
          dense
          class="social-btn"
        />
        <a href="https://twitter.com/RAKwireless/" target="_blank" class="twitter-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 1200 1227">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="#757575" stroke="#757575" stroke-width="50">
            </path>
          </svg>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import RkFaqFooter from '../../components/RkFaqFooter.vue';
export default {
  components : {RkFaqFooter},
  data: () => ({
    isShow : false,
    links: [
    {
        icon: 'fab fa-facebook',
        href: 'https://www.facebook.com/RakwirelessIoT/'
      },
      {
        icon: 'fab fa-instagram',
        href: 'https://www.instagram.com/rak_wireless/'
      },
      {
        icon: 'fab fa-linkedin',
        href: 'https://www.linkedin.com/company/rakwireless/'
      },
      {
        icon: 'fab fa-youtube',
        href: 'http://www.youtube.com/c/RAKwireless/'
      },
      {
        icon: 'fab fa-tiktok',
        href: 'https://www.tiktok.com/@rakwireless'
      },
      {
        icon: 'fab fa-pinterest',
        href: 'https://pinterest.com/rakwireless'
      },
      {
        icon: 'fab fa-github',
        href: 'https://github.com/RAKWireless'
      },
      // {
      //   icon: 'fa fa-hackster',
      //   href: 'https://www.hackster.io/rakwireless'
      // },
      {
        icon: 'fab fa-discord',
        href: 'https://discord.com/invite/Tk9VGRFG4w'
      },
      {
        icon: 'fab fa-medium',
        href: 'https://medium.com/@rakwireless'
      },
    ]
  }),

  methods : {
    setIsShow(flag){
      this.isShow = flag;
    },
    checkRoute(route){
      if(route.path === '/Knowledge-Hub/FAQs/'
        ||route.path === '/Knowledge-Hub/FAQs/General/'
        ||route.path === '/Knowledge-Hub/FAQs/Hardware/'
        ||route.path === '/Knowledge-Hub/FAQs/Software/'){
          this.setIsShow(true);
        }
      else {
        this.setIsShow(false);
      }
    },
    checkRouteName(routeName){
      if(routeName == 'v-00ca1ee8' || routeName == 'v-339265df' || routeName == 'v-1f7eaef6' || routeName == 'v-83e8fff2'){
        this.setIsShow(true);
      }else {
        this.setIsShow(false);
      }
    }
  },
  mounted() {
   this.checkRouteName(this.$route.name);
  },
  watch: {
    $route(to, from) {
      this.checkRoute(to);
    }
  }
}
</script>

<style>
.social-icons-container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.social-btn {
  margin-right: 0.1rem;
}

.twitter-icon {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  vertical-align: middle;
  margin-left: 0.5rem;
}


</style>




