<template>
  <div class="newsletter--container">
    <div class="text-container">
      <p class="text-container-header">{{ computedTextHeader }}</p>
      <p>
        Stay up to date with the latest <b>software and hardware product releases</b>, <b> feature updates</b>, and <b>enhancements</b>.
      </p>
    </div>
    <div class="form-container">
      <form>
        <input type="email" placeholder="Your email address" v-model="email" />
        <input
          type="submit"
          :disable="email === '' || email.length < 1 ? true : false"
          :value="buttonText"
          @click="subscribeToList($event, email)"
        />
      </form>

      <div class="form-checkbox">
        <div>
          <input type="checkbox" required>
          <span>By continuing, you acknowledge that you have read and agree to our <a href="https://www.rakwireless.com/en-us/legal/privacy-notice" style="color:#FFFFFF;text-decoration: underline;">Privacy Notice.</a></span>
        </div>
        <div>
          <input type="checkbox" required>
          <span>By continuing, you consent to receive marketing emails from RAKwireless.</span>
        </div>
      </div>
      <p v-if="isShowMessage" :class="textColor">{{ message }}</p>

    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RkCertificationNewsletter",
  props: {
    propListId: { type: String },
    textHeader : { type: String }
  },
  // mixins: [CommonMixin],
  // 48 old id
  data: () => ({
    listId: 48,
    email: "",
    message: "",
    buttonText: 'Sign up',
    isShowMessage: false,
    textColor: 'text-white'
  }),
  computed: {
    computedApi() {

      let currentId = this.propListId ? this.propListId: this.listId
      let endpoint = `https://form-api.rakwireless.com/newsletter/api/contacts/${currentId}`;
      return endpoint;
    },
    computedTextHeader() {
      
      return this.textHeader ? this.textHeader : 'Newsletter'
    }
  },
  methods: {
    subscribeToList(event, email) {
      event.preventDefault();
      let $this = this;

      $this.buttonText = 'Loading'
      axios({
        method: "post",
        url: this.computedApi,
        data: {
          email: email,
        },
      }).then(function (response) {
        console.log("CERTIFICATION RESPONSE: ",response)

        let statusCodesResponse = [
          {
            statusCode : 400,
            message: 'Email already subscribed!',
            textColor: 'bg-red',
          },
          {
            statusCode : 200,
            message: 'Successfully subscribed!',
            textColor: 'bg-green'

          },
        ]

          if(response.data?.status === 400) {
            $this.isShowMessage = true
            $this.textColor = statusCodesResponse[0].textColor
            $this.message = statusCodesResponse[0].message
            $this.email = ""
            $this.buttonText = 'Sign up'

          }

          if(response.data.contacts.success) {
            $this.isShowMessage = true
            $this.textColor = statusCodesResponse[1].textColor
            $this.message = statusCodesResponse[1].message
            $this.email = ""
            $this.buttonText = 'Sign up'

          }
      });
    },
  },
};
</script>

<style scoped>
:root {
  --primary-color : #FFFFFF;
  --secondary-color : #0c6bc4;
  --font-xl : 20px;
  --font-base: 16px;
  --line-height-base: 16px;
}

@font-face {
  font-family: 'NeueHaasGroteskDsPro55Reg';
  src: url("./../public/assets/fonts/n-haas-grotesk-ds-pro-55-reg.woff2") format('woff2');
  font-display: swap;
}

.newsletter--container {
  font-family: 'NeueHaasGroteskDsPro55Reg' !important;
  position:relative;
  background-color:#0c6bc4;
  padding: 0 48px;
  display: grid;
  color: #FFFFFF;
  gap:20px;
}

.bg-red {
  color: #FFFFFF;
  background-color: red;
  padding: 1px 3px;
}

.bg-green {
  color: #FFFFFF;
  background-color: green;
  padding: 1px 3px;
}

/* .newsletter--container::before{
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -9999px;
  box-shadow: 1000px 0  #0c6bc4;
  z-index:0;
}

.newsletter--container::after{
  content: "";
  position: absolute;
  top: 0;
  right: -9999px;
  bottom: 0;
  left: 0;
  box-shadow: -1000px 0  #0c6bc4;
  z-index:0;
} */

.text-container {
  display:flex;
  flex-direction: column;
  align-items:start;
  font-size: 24px;
  font-family: 'NeueHaasGroteskDsPro55Reg' !important;
  line-height: 28px;
}

.text-container > .text-container-header {
  font-family: 'NeueHaasGroteskDsPro55Reg' !important;

  font-size: 36px;
  font-weight: 800;
  padding-bottom: 10px;
  margin-bottom:0;
  line-height: 32px;
}

.text-container > p {
  font-size: 20px;
  line-height: 28px;
}

.form-container {
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.form-container > form {
  display: flex;
  align-items: center;
}

.form-checkbox {
  margin-top: 10px;
  display:flex;
  flex-direction: column;
  justify-content: start;
}

.form-checkbox > div {
  display:flex;
  gap: 10px;
  padding-bottom: 5px;
}

.form-checkbox > div >span{
  margin: 0;
  font-size: 12px;
  padding: 0;
}

.form-checkbox > span {
  font-size: 12px;
  color: #A1B6E5;
}

.form-checkbox > input[type='checkbox'] {
  outline:  none;
  border: 1px solid #A1B6E5;
  border-radius: 5px;
  background-color: transparent;
}


input[type="email"]:focus {
  outline: none;
}

input[type="email"] {
	outline: none;
  height:40px;
  width: 100%;
	background-color: transparent;
	color: #FFFFFF;
	border: 1px solid #FFFFFF;
  border-radius: 20px;
	padding: 0 12px;
	font-size: 16px;
	line-height: 40px;
}

input[type="email"]::placeholder {
  color: #FFFFFF;
  font-size:16px;
  display: flex;
  justify-content: center;
  align-items:center;
}

input[type="submit"] {
	padding: .375rem 1.25rem;
	border-radius: 100px;
	outline: none;
	border: 1px solid #FFFFFF;
	background-color: #FFFFFF;
	color: #0c6bc4;
	box-sizing: border-box;
	cursor: pointer;
	transition-duration: 300ms;
	transition-timing-function: cubic-bezier(0,0,.2,1);
  position:absolute;
  right: 3.75rem;
}

input[type="submit"]:hover {
  cursor: pointer;
}

/* desktop 1280px */
/* medium 601 - 1279px */
/* mobile 360 - 600 */

@media (min-width: 1280px) {
  .newsletter--container {
    grid-template-columns: 1fr 1fr;
  }

  .text-container {
    padding-right:100px;
  }
}

@media (min-width: 801px) and (max-width: 1279px) {
  .newsletter--container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 360px) and (max-width: 800px) {
  .newsletter--container {
    grid-template-columns: 1fr;
    padding: 20px 16px;
    gap:0;
  }

  input[type="email"] {
    padding-right:5px;
  }
  input[type="email"],
  input[type="email"]::placeholder {
    font-size: 16px;
  }

  input[type="submit"] {
    right: 1.45rem;

  }
  .text-container {
    font-size: 16px;
  }

  .text-container > p {
    line-height: 18px;
  }

  .form-container-header {
    font-size: 12px;
    line-height:16px;
  }

  .form-checkbox > span {
    font-size: 12px;
    line-height: 16px;
    color: #A1B6E5;
  }

  .form-checkbox > div {
    align-items: start;
  }

}

</style>