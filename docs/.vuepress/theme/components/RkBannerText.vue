<template>
  <div v-show="!closeBanner" class="event-banner-text-container" :style="{
    backgroundColor: bgColor
  }">
    <div class="event-banner-content">
      <a href="https://docs.rakwireless.com/Release-Notes/WisDM/2023/December-4/" class="event-banner-link ">WisDM v1.6.1 is out now. See what's new!</a>
      <span @click="closePopUpBanner" class="close-event-banner-btn">
        X
      </span>
    </div>
  </div>
</template>


<script>
  export default {
    data: ()=> ({
      closeBanner : false
    }),
    props: ['bgColor'],
    methods : {
      closePopUpBanner(){
        this.closeBanner = true
      }
    }
  }
</script>

<style scoped>
  .event-banner-text-container {
    min-height: 50px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  .event-banner-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .event-banner-link {
    line-height: 15px;
    color: #ffffff;
    font-size: 15px;
  }

  a > .event-banner-link {
    text-decoration: none;
    color: #ffffff !important;
  }

  .close-event-banner-btn {
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 50;
    cursor: pointer;
    color: #ffffff;
    margin-right: 0.75rem;
    height: 1.75rem;
  }

  @media screen and (max-width: 599px){
    .event-banner-content  {
      max-width: 380px !important;
      text-align:center;
    }
    .close-event-banner-btn  {
      top:0;
    }
  }

</style>