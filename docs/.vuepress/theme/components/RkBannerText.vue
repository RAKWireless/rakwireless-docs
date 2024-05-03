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
          <a href="https://downloads.rakwireless.com/LoRa/RAK11720/Certification/RAK11720_ANATEL_Certification.pdf?utm_source=textad_docs&utm_medium=organic&utm_campaign=RAK11720-ANATEL-Certification" class="event-banner-link "><span :style="{
            paddingRight: '2px',
          }">LoRa Bluetooth Module RAK11720 now ANATEL-certified.</span>  <u>View certification for details</u>.</a>
        </div>
        <div>
          <a href="https://www.rakwireless.com/en-us/products/rui3?utm_source=newshub&utm_medium=organic&utm_campaign=rui3opensource" class="event-banner-link "><span :style="{
            paddingRight: '2px',
            textDecoration: 'underline'
          }">RUI3 is now open source.</span> Power your project with flexibility and community support.</a>
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
    min-height:45px;
    justify-content: center;
    align-items: center;
  }

  #banner-flip div:first-child {
    animation: flip3 15s linear infinite;
  }

  /* @keyframes show {
    0% {margin-top:-270px;}
    5% {margin-top:-180px;}
    33% {margin-top:-180px;}
    38% {margin-top:-90px;}
    66% {margin-top:-90px;}
    71% {margin-top:0px;}
    99.99% {margin-top:0px;}
    100% {margin-top:-270px;}
  } */

  @keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -90px;  }
    50% { margin-top: -90px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -180px; }
  }

  @keyframes flip3 {
    0% { margin-top: -270px; }
    5% { margin-top: -180px; }
    33% { margin-top: -180px; }
    38% { margin-top: -90px; }
    66% { margin-top: -90px; }
    71% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
  }

  /*@keyframes flip4 {
    0% { margin-top: -360px; }
    5% { margin-top: -270px; }
    25% { margin-top: -270px; }
    30% { margin-top: -180px; }
    50% { margin-top: -180px; }
    55% { margin-top: -90px; }
    75% { margin-top: -90px; }
    80% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -360px; }
  }

  @keyframes flip5 {
    0% { margin-top: -450px; }
    5% { margin-top: -360px; }
    20% { margin-top: -360px; }
    25% { margin-top: -270px; }
    40% { margin-top: -270px; }
    45% { margin-top: -180px; }
    60% { margin-top: -180px; }
    65% { margin-top: -90px; }
    80% { margin-top: -90px; }
    85% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -450px; }
  }

  @keyframes flip6 {
    0% { margin-top: -540px; }
    5% { margin-top: -450px; }
    15% { margin-top: -450px; }
    25% { margin-top: -360px; }
    35% { margin-top: -360px; }
    40% { margin-top: -270px; }
    50% { margin-top: -270px; }
    55% { margin-top: -180px; }
    65% { margin-top: -180px; }
    70% { margin-top: -90px; }
    80% { margin-top: -90px; }
    85% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -540px; }
  }

    @keyframes flip7 {
    0% { margin-top: -630px; }
    5% { margin-top: -540px; }
    12.5% { margin-top: -540px; }
    17.5% { margin-top: -450px; }
    30% { margin-top: -450px; }
    35% { margin-top: -360px; }
    45% { margin-top: -360px; }
    50% { margin-top: -270px; }
    60% { margin-top: -270px; }
    65% { margin-top: -180px; }
    75% { margin-top: -180px; }
    80% { margin-top: -90px; }
    90% { margin-top: -90px; }
    95% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -630px; }
  }*/

  @media screen and (max-width: 599px){
    .event-banner-text-container {
      min-height: 74px;
    }

    #banner-flip > div > a {
      padding: 0 20px;
      flex-direction: column;
    }

    .event-banner-link {
      font-size: 12px;
    }
    .event-banner-content  {
      max-width: 380px !important;
      text-align:center;
    }
    .close-event-banner-btn  {
      top:30%;
    }
  }

</style>