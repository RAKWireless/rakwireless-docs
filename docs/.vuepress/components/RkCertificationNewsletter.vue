<template>
  <div class="newsletter-container grid">
    <div class="text-container">
      <h3 class="text-white">Keep Updated! 📧</h3>
      <p class="text-white">
        Get monthly updates of our products and tools by subscribing
        to our newsletter!
      </p>
    </div>
    <div class="form-container">
      <form>
        <input type="email" placeholder="example@email.com" v-model="email" />
        <input
          type="submit"
          :disable="email === '' || email.length < 1 ? true : false"
          value="SUBSCRIBE"
          @click="subscribeToList($event, email)"
        />
        <p class="text-white text-center">{{ message }}</p>
      </form>
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

<style scope>
.text-container {
  padding-left: 50px;
}

.form-container {
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;
  width: 100%;
  padding-right: 50px;
}

input[type="email"]:focus {
  outline: none;
}

input[type="email"] {
  width: 450px;
  height: 50px;
  padding-right: 110px;
  padding-left: 10px;
  border-radius: 10px;
  border: none;
  vertical-align: middle;
}

input[type="submit"] {
  background-color: #3e3d3e;
  color: white;
  margin-left: -110px;
  padding: 0 8px;
  height: 50px;
  width: 110px;
  border: none;
  border-radius: 0 10px 10px 0;
  vertical-align:middle;
}

input[type="submit"]:hover {
  cursor: pointer;
}

.newsletter-container {
  position: relative;
  background-color: #0c6bc4;
  padding: 20px;
  height: 200px;
}

.newsletter-message {
  color: #ffffff;
  text-align: center;
}

.grid {
  display: flex;
}
.text-white {
  color: #ffffff;
}

@media only screen and (max-width: 1286px) {
  /* .text-container {
    height: 150px !important;
  } */
  input[type="email"] {
    width: 320px;
    height: 40px;
    padding-right: 80px;
    padding-left: 10px;
    border-radius: 10px;
  }

  input[type="submit"] {
    margin-left: -80px;
    padding: 0 4px;
    height: 40px;
    width: 80px;
    border-radius: 0 10px 10px 0;
  }
  .form-container {
    display: flex;
    align-items: center;
    padding-right:0;
  }
  .newsletter-container {
    height: 200px;
  }

}

@media (min-width:920px) and (max-width: 1100px) {
  input[type="email"] {
    width: 280px;
  }

  input[type="submit"] {
    margin-left: -75px;
    padding: 0 2px;
    width: 75px;
  }
}
@media (min-width:770px) and(max-width:900px){
  input[type="email"] {
    width: 300px;
  }

  input[type="submit"] {
    margin-left: -75px;
    padding: 0 2px;
    width: 75px;
  }

  .newsletter-container {
    height:240px !important;
  }

  .form-container {
    display: flex;
    align-items: start;
    justify-content: center;
  }
}

@media (min-width:428px) and (max-width: 768px){
  .text-container {
    height:150px !important;
    padding:0;
  }

  input[type="email"] {
    width: 300px;
    height: 40px;
    padding-right: 50px;
    padding-left: 10px;
    border-radius: 10px;
  }

  input[type="submit"] {
    margin-left: -80px;
    padding: 0 4px;
    height: 40px;
    width: 80px;
  }

  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .newsletter-container {
    height:300px;
  }

  .grid{
    display:grid;
    grid-template-columns: fit-content(100%);
  }

  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-container {
    padding:0;
  }
}

@media only screen and (max-width:427px) {
  input[type="email"] {
    width: 230px;
    height: 40px;
  }

  input[type="submit"] {
    margin-left: -75px;
    padding: 0 2px;
    height: 40px;
    width: 75px;
  }

  .newsletter-container {
    height:300px;
  }

  .grid{
    display:grid;
    grid-template-columns: fit-content(100%);
  }


  .form-container {
    align-items: center;
    justify-content: center;
  }
  .text-container {
    padding:0;
  }
}
</style>