<template>
  <rk-card
  class="overflow-hidden"
  @mouseenter="hovered=true"
  @mouseleave="hovered=false"
  >
    <div 
      class="col flex flex-col relative-position overflow-hidden" 
      id="category-container" 
      @click="goToLink(path)"
      style="background-color: #F1F5FB;"
      >
     
      <transition
        duration=1200
        appear
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
      >
       <div class="row relative" style="min-height:50%; margin:auto; width: 100%;background-color: #F1F5FB;">
        <!-- <img
          v-show="hovered"
          :src="img || '/assets/rakwireless/rak-blue-dark.svg'"
          class="relative q-pa-md"
          style="align-items:center;min-width: 50%; z-index: 2; margin : auto;transition: 1000ms;"
        /> -->
        <img
          
          :src="img || '/assets/rakwireless/rak-blue-dark.svg'"
          class="relative q-pa-md"
          style="max-width: 100%; height: 100px; margin: auto;"
        />
       </div>
      </transition>
      <div
        v-show="!hovered"
        class="row column fit  q-pa-sm"
        style="max-height: 50%; background-color: #0c6bc4;"
      >
        <div
          class="col overflow-hidden q-mb-xs non-selectable flex flex-center"
          style="line-height: 1.25rem"
        >
          <p>{{desc}}</p>
        </div>
      </div>
    </div>
  
  </rk-card>
</template>

<script>
export default {
  name : 'RkCategory',
  props: {
    img : { type : String },
    path : { type : String },
    label : { type : String },
    desc : { type : String }
  },
  computed : {
    
  },
  data : ()=>({
    hovered : false
  }),
  methods : {
    goToLink(path){
      window.open(path, '_blank')
    }
  }



}
</script>

<style scoped>
  p {
    color : #FFFFFF !important;
    padding : 3px;
    
  }  
</style>