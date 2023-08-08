<template>
  <div
      class="col flex flex-col relative-position overflow-hidden"
      id="category-container"
      @click="goToLink(path)"
      >
    <div class="product">
      <h1 style="margin-top: 0">Product Compliance</h1>
      <div class="flex flex-center">
      <div class="row justify-center" >
        <div class="cursor-pointer q-pa-lg " v-for="qs in response" :key="qs.path">
            <rk-category
              :img="qs.img"
              :path="qs.path"
              :label="qs.title"
              :desc="qs.desc"
              style="height: 12rem; width: 20rem; margin: auto;">
            </rk-category>
        </div>
      </div>
      </div>
      <br>
      <div class="data" style="">
        <h1>Data Information and Security</h1>
          <div class="flex flex-center">
          <div class="row justify-center" >
                <div class="container">
                  <h6 style="margin: 20px 10px 0;"> GDPR </h6>
                  <hr style="width: 85%; margin: 10px 0; color : #007ACC"/>
                  <div class="actions">
                    <button type="button" class="button">
                      <a href="https://gdpr.eu/" target="_blank" class="text">Europe Data Protection and Privacy Rules</a>
                    </button>
                    <button type="button" class="button">
                      <a href="https://www.rakwireless.com/en-us/legal/privacy-notice" target="_blank" class="text">How We Protect Your Privacy</a>
                    </button>
                  </div>
                </div>

                <div class="container">
                  <h6 style="margin: 20px 10px 0;"> ISO27001 Certification </h6>
                  <hr style="width: 85%; margin: 10px 0; color : #007ACC"/>
                  <div class="actions">
                    <button type="button" class="button">
                      <a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank" class="text">International Information Security Management System Standard</a>
                    </button>
                  </div>
                </div>

                <div class="container">
                  <h6 style="margin: 20px 10px 0;"> LoRaWAN Certification </h6>
                  <hr style="width: 85%; margin: 10px 0; color : #007ACC"/>
                  <div class="actions">
                    <button type="button" class="button">
                      <a href="https://lora-alliance.org/about-lora-alliance/#" target="_blank" class="text">International Technology Alliance about LoRaWAN Standard</a>
                    </button>
                    <button type="button" class="button">
                      <a href="https://lora-alliance.org/alliance_member/rakwireless-technology-co/" target="_blank" class="text">RAKwireless LoRa Alliance Membership</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="width:100%; margin: 10px 0; color : #F1F5FB;"/>
        <br>
      </div>


</template>

<script>
  import {categories} from '../includes/certification/index'
  import RkCertificationPage from './RkCertificationPage.vue';

export default {
  name: 'RkCertificationPage',
    data() {
      return {
        response: categories
      };
    },
  methods : {
    goToLink(path){
      window.open(path, '_blank')
    }
  }
}

</script>

<style scoped>

.product {
  margin: 0;
}

.h2 {
  text-align: center;
  margin-bottom: 0;
}

.container {
  display: flex;
  background-color: #F1F5FB;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  border-radius: 0.5rem;
  max-width: 295px;
  min-height: 260px;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.1);
}

.h6 {
  text-align: center;
  margin-bottom: 0;
  color: #007ACC;
}

.actions {
  margin: 0px 15px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 0;
  background-color: #007ACC;
  outline: 2px #007ACC solid;
  outline-offset: -3px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  width: 100%;
  height: 70px;
}

.button .text {
  color: white;
  font-weight: 450;
  font-size: 1.15em;
  transition: 400ms;
  display: flex;
  justify-content: center;
  line-height: 1.3;
}

.button:hover {
  background-color: transparent;
}

.button:hover .text {
  color: #007ACC;
}

</style>