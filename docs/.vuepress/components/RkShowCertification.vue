<template>
  <div class="" style="margin-bottom: 100px;">
    <div class="certification--header">
      <div class="certification--lead">
        <h1>Certification</h1>
        <p>The product certification indicates the device has been properly assessed where it meets the qualification criteria and also has passed the performance and quality tests. Hence, the following tables display the various certifications of the RAK products to guarantee these devices are safe, reliable, and high-quality.</p>
      </div>
    </div>


    <h2>Product Compliance Certification</h2>


    <h3 v-if="activeTableData.length !==0 " v-show="activeTableData.length !==0 ">{{ selectedDevice.toUpperCase() }}</h3>
    <table border="1" v-if="activeTableData.length !==0" class="q-table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Certification</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody  v-for="(certData, index) in activeTableData[0].data" :value="certData" :key="index">
        <tr>
          <td>{{ certData.country }}</td>
          <td>{{ certData.cert }}</td>
          <td><a :href="certData.link" target="_blank">Download</a></td>
        </tr>
      </tbody>
    </table>

    <div v-if="activeTableData.length === 0">
      <h3>{{ computedHeadersData.product }}</h3>
      <table>
        <thead>
          <tr>
            <th class="sticky-col">DEVICE</th>
            <th v-for="header in computedHeadersData.headers">{{ header }}</th>
          </tr>
        </thead>
        <tbody v-for="(defaultDevice, deviceIndex) in computedAllCategories[(computedHeadersData.product).toLowerCase()][0].devices">

          <tr>
            <td class="sticky-col">{{ defaultDevice.device }}</td>
            <td v-for="(country,countryIndex) in (computedHeadersData.headers).length" :key="countryIndex">
              <span
                v-for="(deviceCountry,index) in defaultDevice.data"
                :key="index"
                v-if="(computedHeadersData.headers).indexOf((deviceCountry.country).toUpperCase()) === countryIndex"
                style="display:flex;flex-direction:column; gap: 4px;">
                <a :href="deviceCountry.link" target="_blank">{{ deviceCountry.cert }}
                  <!-- <span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span> -->
                </a>
              </span>

            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- <div>
      <h2>Data and Information Security</h2>
      <h3>GDPR Compliant</h3>
      <ul>
        <li><a href="https://gdpr.eu/" target="_blank">Europe Data Protection and Privacy Rules</a></li>
        <li><a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank">International Information Security Management System Standard</a></li>
      </ul>

      <h3>ISO27001 Certification</h3>
      <ul>
        <li><a href="https://www.iso.org/isoiec-27001-information-security.html" target="_blank">International Information Security Management System Standard</a></li>

      </ul>

      <h3>LoRaWAN Certification</h3>
      <ul>
        <li><a href="https://lora-alliance.org/about-lora-alliance/#" target="_blank">International Technology Alliance about LoRaWAN Standard</a><br>
        <a href="https://lora-alliance.org/alliance_member/rakwireless-technology-co/" target="_blank">View Details</a>
        </li>

      </ul>
    </div> -->
 </div>
</template>


<script>

import { categoriesFiveG } from '../includes/certification/5g'
import { categoriesWisTrio } from '../includes/certification/wistrio'
import { categoriesWisDuo } from '../includes/certification/wisduo'
import { categoriesWisGate } from '../includes/certification/wisgate'
import { categoriesWisBlock } from '../includes/certification/wisblock'
import { categoriesWisNode } from '../includes/certification/wisnode'
import { categoriesAccessories } from '../includes/certification/accessories'
import { categoriesWisLink } from '../includes/certification/wislink';
import { headers } from '../includes/certification/headers'



export default {
    data() {
        return {
            selectedDevice: "",
            activeTableData: []
        };
    },
    props: {
        product: {
            type: String,
            required: true
        },
        headers: {
            type: Array,
            required: true
        }
    },
    computed: {
        computedProductName: function () {
            return (this.product).toLowerCase(0);
        },
        computedAllCategories: function () {
            return {
                "5g": categoriesFiveG,
                "wistrio": categoriesWisTrio,
                "wisduo": categoriesWisDuo,
                "wisgate": categoriesWisGate,
                "wisblock": categoriesWisBlock,
                "wislink": categoriesWisLink,
                "wisnode": categoriesWisNode,
                "accessories": categoriesAccessories
            };
        },
        computedDeviceData: function () {
            return product => {
              return this.computedAllCategories[product][0].devices;
            }
        },
        computedSelectedDeviceData: function () {

          return this.computedAllCategories[this.computedProductName][0];

        },
        computedHeadersData: function () {
            return headers[this.product];
        },
    },
    methods: {
        onChange(event) {
            let selectedData = (this.computedDeviceData).filter(function (data) {
                return data.device == event.target.value;
            });
            this.activeTableData = selectedData[0];
        },
        checkIndex(device) {
            let countryIndexArray = [];
            let deviceMap = (device.data).map(data => {
                let countryIndex = (this.computedHeaderData).indexOf((data.country.toUpperCase()));
                countryIndexArray.push(countryIndex);
            });
            return countryIndexArray;
        },
        onChangeParams(){

          let url = new URL(window.location.href)
          let params = url.searchParams
          let device = params.get('device') || ''

          this.selectedDevice = device;
          this.activeTableData = (this.computedSelectedDeviceData.devices).filter(function (data) {
            return (data.device.toLowerCase()) == device.toLowerCase();
          })
        }
    },

    watch: {
      '$route'() {
        this.onChangeParams()

      }
    },
    mounted() {
      this.onChangeParams()
    },
}

</script>

<style scoped>

table {
  border-collapse: collapse;
  border : 1px solid #CECECE !important;
  outline: none;
}

tr {
  border-bottom: 0.5px solid #dcdada;
}

.container {
  margin-bottom: 40%;
  position: relative;
}

.certification--header {
  display: flex;
  place-content: space-between;
}


.certification--lead {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.certification--dropdown {
  display: flex;
  justify-content: center;
  align-items: start;
  color: #CECECE;
}


.label {
  color: #605e5e;
  font-size: 1.15em;
  font-weight: 450;
  letter-spacing: 0.5px;
}

.dropdown {
  border: 2px solid #007ACC;
  color: #007ACC;
  border-radius: 0.5rem;
  background-color: white;
  margin-left: 15px;
  height: 35px;
  width: 280px;
  transition: background-color 0.3s;
  overflow: auto;
}

.dropdown:hover .text {
  color: #007ACC;
  font-weight: bold;
}


.sticky-col {
  position: sticky;
  left: 0;
  background-color: #FFFFFF;
  z-index:10;
}

@media (min-width: 641px) and (max-width: 900px) {
  .certification--header {
    flex-direction: column;
  }

  .dropdown {
    min-width: 100%;
    margin-left: 0;
  }
}


@media screen and (max-width: 640px){
  .certification--header {
    flex-direction: column;
  }

  .dropdown {
    min-width: 100%;
    margin-left: 0;
  }
}
</style>

