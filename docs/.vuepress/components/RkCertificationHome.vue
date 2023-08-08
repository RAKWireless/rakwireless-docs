<template>
  <div class="" style="margin-bottom: 100px;">
    <div class="certification--header">
      <div class="certification--lead">
        <h1>Certification</h1>
        <p>The product certification indicates the device has been properly assessed where it meets the qualification criteria and also has passed the performance and quality tests. Hence, the following tables display the various certifications of the RAK products to guarantee these devices are safe, reliable, and high-quality.</p>
      </div>
    </div>

    <h2>Product Compliance Certification</h2>

    <div v-for="([headerKey,headerValue]) in Object.entries(computedHeadersData)">
      <h3>{{ computedHeadersData[headerKey].product }}</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th class="sticky-col sticky-row" style="z-index:13;">DEVICE</th>
              <th v-for="(header) in computedHeadersData[headerKey].headers" class="sticky-row">{{ header }}</th>
            </tr>
          </thead>
          <tbody v-for="(defaultDevice, deviceIndex) in computedAllCategories[headerKey][0].devices">
            <tr>
              <td class="sticky-col">{{ defaultDevice.device }}</td>
              <td v-for="(country,countryIndex) in (computedHeadersData[headerKey].headers).length" :key="countryIndex">
                <span
                  v-for="(deviceCountry,index) in defaultDevice.data"
                  :key="index"
                  v-if="(computedHeadersData[headerKey].headers).indexOf((deviceCountry.country).toUpperCase()) === countryIndex"
                  style="display:flex;flex-direction:column; gap: 4px;">
                  <a :href="deviceCountry.link" target="_blank">{{ deviceCountry.cert }}</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
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
    </div>
 </div>
</template>

<script>

import { headers } from '../includes/certification/headers'
import { categoriesFiveG } from '../includes/certification/5g'
import { categoriesWisTrio } from '../includes/certification/wistrio'
import { categoriesWisDuo } from '../includes/certification/wisduo'
import { categoriesWisGate } from '../includes/certification/wisgate'
import { categoriesWisBlock } from '../includes/certification/wisblock'
import { categoriesWisNode } from '../includes/certification/wisnode'
import { categoriesAccessories } from '../includes/certification/accessories'
import { categoriesWisLink } from '../includes/certification/wislink';

export default {
  name: 'RkCertificationHome',
  data() {
      return {
        selectedDevice: "",
        activeTableData: []
      }
  },
  computed : {
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
    computedHeadersData: function(){
      return headers
    }
  },
  methods : {
    currentProduct(product){
      return this.computedAllCategories[product][0].devices
    }
  },
  mounted(){
    console.log(this.computedAllCategories['wisgate'][0])
  }
}

</script>


<style>

/* quasar styling override */
.table-container .q-markup-table {
  overflow: revert !important;

}

.table-container .q-table--bordered {
  border : none !important;
}

.table-container .q-table .sticky-col {
  position: sticky;
  left: 0;
  background-color: #FFFFFF;
  z-index:11;
  border : 1px solid #CECECE !important;
}

/* .table-container .q-table .sticky-row {
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
  z-index:11;
  border : 1px solid #CECECE !important;
} */



.table-container > table {
  border-collapse: collapse;
  border : 1px solid #CECECE !important;
  outline: none;
  position: relative;

}
.table-container {
  max-height: 60vh;
  max-width: 100%;
  overflow: auto !important;
  scrollbar-gutter: stable;
}

.table-container tr {
  border-bottom: 0.5px solid #dcdada;
}

.table-container td,
.table-container th {
  border : 1px solid #CECECE !important;
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


/* .sticky-col {
  position: sticky;
  left: 0;
  background-color: #FFFFFF;
  z-index:9;
  border : 1px solid #CECECE !important;
} */

.sticky-row {
  position: sticky;
  top: 0;
  z-index: 11;
  background-color: #FFFFFF !important;
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

