<template>

<div class="popup-container" v-show="!closeBanner">

  <a href="http://store.rakwireless.com/?utm_source=Docs+Center+Banner&utm_medium=Organic&utm_id=black+friday%2Fcyber+monday+campaign" >
    <img :src="isMobile?'https://res.rakwireless.com/tracked/misc/others/sm5-mobile-banner.jpg':'https://res.rakwireless.com/tracked/misc/others/sm5-desktop-banner.jpg'" alt="Black Friday and Cyber Monday Sale" class="popup-image" style="user-select: auto;">
  </a>

    <span class="">
      <svg class="fa fa-times popup-close-btn" id="close-popup" @click="closePopUpBanner()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82" style="user-select: auto;">
          <g id="exit" transform="translate(-1386 94)" style="user-select: auto;">
          <circle id="Ellipse_1" data-name="Ellipse 1" cx="41" cy="41" r="41" transform="translate(1386 -94)" fill="#97999b" style="user-select: auto;"></circle>
          <g id="x" transform="translate(1407.026 -73.444)" style="user-select: auto;">
              <g id="x-2" data-name="x" transform="translate(0 0)" style="user-select: auto;">
              <g id="Layer_5" data-name="Layer 5" style="user-select: auto;">
                  <path id="Path_1" data-name="Path 1" d="M39.036,35.83,23.5,20.419,39.036,5.007a2.927,2.927,0,0,0,0-4.144,2.875,2.875,0,0,0-4.118,0L19.973,15.834,5,.863A2.93,2.93,0,1,0,.858,5.007L16.4,20.548l-4.74,4.481L.858,35.83a2.921,2.921,0,0,0,4.118,4.144L19.947,25,34.892,39.974a2.93,2.93,0,0,0,4.144-4.144Z" transform="translate(0.002 0.005)" fill="#e6e6e7" fill-rule="evenodd" style="user-select: auto;"></path>
              </g>
              </g>
          </g>
          </g>
      </svg>
    </span>
</div>
</template>

<script>

export default {
  data: ()=>({
    closeBanner : false,
    isMobile: false,
    smBreakpoint: 640,
    mdBreakpoint: 1024,
  }),

  methods : {
    closePopUpBanner(){
      this.closeBanner = true;
    },
    onSetWidth(){
      this.isMobile = window.innerWidth < this.smBreakpoint ? true: false
    }
  },
  created() {
    window.addEventListener("resize", this.onSetWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.onSetWidth);
  },
  mounted(){
    this.onSetWidth()
  },
}


</script>

<style>
  .popup-container {
      z-index: 3000;
      /* padding-bottom: 10px; */
      position:fixed;
      /* top: calc(100vh - 197px); */
      bottom: 0;
      left:0;
      display: block;

  }

  .popup-close {
    display: hidden !important;
    transition: .5s;
  }
  .popup-image {
      width: 100%;
      max-height: 240px;
      outline: none;
      box-shadow: rgb(0, 0, 0) 0px 0px 8px 2px;
      user-select: auto;
      cursor : pointer;
  }

  .popup-close-btn {
      cursor : pointer;
      position: absolute;
      z-index: 30;
      color: #333333;
      height: 1.9rem;
      top: -10px;
      right: -10px;
      opacity: .9;
  }
  .popup-close-btn:hover {
      transition: .3s;
      opacity: 1;
  }

  .popup-submit-btn {
      position: absolute;
      top: 75%;
      left: 33%;
      z-index: 40;
  }

  .popup-submit-btn > svg {
      height: 2rem;
  }
</style>