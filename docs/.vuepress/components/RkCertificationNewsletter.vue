<template>
  <div class="newsletter--container">
    <div class="text-container">
      <p>
        Stay ahead of the game and be the first to know about RAK’s IoT Services and Solutions
      </p>
    </div>
    <div class="form-container">
      <div class="form-container-header">
        <p>Get 15% off voucher (plus the latest news on products and more) by joining our newsletter.</p>
      </div>
      <form>
        <input type="email" placeholder="Your email address" v-model="email" />
        <input
          type="submit"
          :disable="email === '' || email.length < 1 ? true : false"
          value="Sign up"
          @click="subscribeToList($event, email)"
        />
        <p>{{ message }}</p>
      </form>
      <div class="form-checkbox">
        <input type="checkbox" required>
        <span>By continuing, you agree to our Privacy Notice and consent to receive marketing emails from RAKwireless regarding its and its affiliates’ products and services.</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RkCertificationNewsletter",
  // mixins: [CommonMixin],
  data: () => ({
    listId: 48,
    email: "",
    message: "",
  }),
  computed: {
    computedApi() {
      let endpoint = `https://form-api.rakwireless.com/newsletter/api/contacts/${this.listId}`;
      return endpoint;
    },
  },
  methods: {
    subscribeToList(event, email) {
      event.preventDefault();
      let $this = this;
      axios({
        method: "post",
        url: this.computedApi,
        data: {
          email: email,
        },
      }).then(function (response) {
        console.log("CERTIOFICATION RESPONSE: ",response)
        if (response.status == 200) {
          $this.message = "Subscription success!";
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

.newsletter--container {
  background-color:#0c6bc4;
  padding: 20px 48px;
  display: grid;
  color: #FFFFFF;
  gap:20px;
}

.text-container {
  display:flex;
  align-items:center;
  font-size: 24px;

}

.text-container > p {
  line-height: 32px;
}
.form-container > form {
  display: flex;
  align-items:center;
}

.form-checkbox {
  margin-top: 10px;
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
  width: 100%;
	outline: none;
	border: none;
	background-color: transparent;
	color: #FFFFFF;
	border-bottom: 1px solid #FFFFFF;
	padding: 12px 0;
	font-size: 24px;
	line-height: 40px;
}

input[type="email"]::placeholder {
  color: #FFFFFF;
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

}

</style>