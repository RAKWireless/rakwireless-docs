<template>
  <div class="flex flex-center" style="margin: 0 auto;">
  <!-- <div class="row" :class="{ 'justify-center': ltMdDiv }"> -->
    <div class="row justify-center" >
      <div class="cursor-pointer q-pa-lg " v-for="qs in response" :key="qs.path">
        <rk-category
          :img="qs.img"
          :path="qs.path"
          :label="qs.title"
          :desc="qs.desc"
          style="height: 19rem; width: 23rem; margin: auto;"
        >{{ qs.desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula est ex, in ullamcorper mauris pretium non. Sed egestas elit nec fermentum aliquet. Nulla molestie nisl fringilla lacus viverra tristique quis ut tellus. Vivamus faucibus porta tellus, eget condimentum enim commodo sit amet.' }}</rk-category>
      </div>
     
      
    </div>
    <hr style="width:100%; margin: 60px 0; color : #F1F5FB;"/>
  </div>
</template>

<script>
import {categories} from '../includes/release-notes/index'
import RkCategory from './RkCategory.vue';

export default {
  name: 'RkCategories',
  data : ()=>(
    {
      response: categories
    }
  ),
  computed: {

  },
  mounted(){
    console.log(this.response)
  }
}
</script>

<style scoped>
.grow {
  transition: all 0.6s ease-in-out;
}
.grow:hover {
  transform: scale(1.05);
}
.img-container {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5%;
}
</style>