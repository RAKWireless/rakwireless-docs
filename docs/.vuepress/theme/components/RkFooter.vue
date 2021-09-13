<template>
  <div class="bg-grey-1 text-grey-7" style="padding: 2.5rem 0 ">
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
        © 2014-2021
        <a
          href="https://www.rakwireless.com/en-us/?utm_source=RAK-Doc-Home&utm_medium=footer"
          target="_blank"
        >Shenzhen RAKwireless Technology Co., Ltd.</a>
      </span>
      <span>All rights reserved. 粤ICP备16112976号</span>
      <div class="row justify-center q-mt-md">
        <q-btn
          v-for="link in links"
          :key="link.href"
          :icon="link.icon"
          type="a"
          :href="link.href"
          target="_blank"
          size="1.5rem"
          flat
          dense
        />
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
        icon: 'fab fa-facebook-square',
        href: 'https://www.facebook.com/RakwirelessIoT/'
      },
      {
        icon: 'fab fa-instagram-square',
        href: 'https://www.instagram.com/rak_wireless/'
      },
      {
        icon: 'fab fa-linkedin',
        href: 'https://www.linkedin.com/company/rak-wireless/'
      },
      {
        icon: 'fab fa-twitter-square',
        href: 'https://twitter.com/RAKwireless/'
      },
      {
        icon: 'fab fa-youtube-square',
        href: 'http://www.youtube.com/c/RAKwireless/'
      }
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






