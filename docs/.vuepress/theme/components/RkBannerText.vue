<template>
  <div v-show="!closeBanner" class="event-banner-text-container" :style="{
    backgroundColor: bgColor
  }">
    <div class="event-banner-content">
      <div id="banner-flip">
        <div>
          <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/Overview/" class="event-banner-link ">Access the improved structure for Sensor Hub documentation.</a>
        </div>
        <div>
          <a href="https://docs.rakwireless.com/Release-Notes/WisGateOS2/2024/January-2/" class="event-banner-link ">Discover the latest features of WisGateOS2 v2.2.1!</a>
        </div>
        <div>
          <a href="https://docs.rakwireless.com/Release-Notes/WisDM/2023/December-4/" class="event-banner-link ">WisDM v1.6.1 is out now. See what's new!</a>
        </div>
        <div>
          <a href="https://docs.rakwireless.com/Release-Notes/RUI/2023/December-14/" class="event-banner-link ">Check the latest updates of RUI3 v4.1.0!</a>
        </div>
      </div>
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
    height: 50px;
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

  #banner-flip {
    overflow: hidden;
    height: 50px;
  }

  #banner-flip > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #banner-flip > div > a {
    display: flex;
    margin-bottom:45px;
    height:45px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #banner-flip div:first-child {
    animation: show 10s linear infinite;
  }

  @keyframes show {
    0% {margin-top:-270px;}
    5% {margin-top:-180px;}
    33% {margin-top:-180px;}
    38% {margin-top:-90px;}
    66% {margin-top:-90px;}
    71% {margin-top:0px;}
    99.99% {margin-top:0px;}
    100% {margin-top:-270px;}
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