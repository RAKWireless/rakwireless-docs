<template>
  <div
    class="text-white">
    <div class="bg text-white ">
      <div class="row justify-start" style="max-width: 1250px; margin: 0 auto; padding: 2rem 2.5rem">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <p class="header">
            Explore the RAKStar Community
          </p>
          <p class="sub-header">
            Have a question ?
          </p>
          <p>
            Find quick answers to complex problems from other users, or ask RAKStars MVPs in our forum site.
          </p>
          <button class="btn btn-rounded">
            <span style="font-size: 1rem">
              <a href="https://forum.rakwireless.com/?utm_source=Docs&utm_medium=Docsheader&utm_campaign=RAKDocs" target="_blank">Visit the community</a>
            </span>
          </button>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-6 q-pa-lg">
          <img  src="./../public/assets/images/faq/FAQ.svg" style="margin:auto;" alt="" class="img-responsive veretical-middle">
        </div>
 
      </div>
    </div>
    <div class=" text-dark ">
      <div class="row justify-start"  style="max-width: 1250px; margin: 0 auto; padding: 2rem 2.5rem">
        <p class="col-12 header">Other ways to get help</p>

        <div class="col-sm-12 col-md-4 col-lg-3">
          <a href="https://www.facebook.com/RAKwirelessIoT"><span class="font-bold"><img src="../public/assets/images/faq/facebook-messenger-icon.png" alt="facebook messenger" class="icon"> Facebook Chat Support</span></a>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3">
          <a href="#">
            <span style="cursor:pointer;" v-on:click="openMenu()" class="font-bold"><img src="../public/assets/images/faq/chat-bubble-icon.png" alt="facebook messenger" class="icon"> Live Chat Support</span>
          </a>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3">
          <a href="mailto:support@rakwireless.com"><span class="font-bold"><img src="../public/assets/images/faq/email-icon.png" alt="facebook messenger" class="icon"> Email Support</span></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonMixin from './common.mixin'

export default {
  name: 'RkFaqFooter',
  mixins: [CommonMixin],
  data: () => ({

  }),
  methods: {
    setScript: function(){
      let externalScript = document.createElement('script')
      externalScript.setAttribute('src','https://static.zdassets.com/ekr/snippet.js?key=1a5ac733-fac6-4769-9091-f47005c3893d');
      externalScript.setAttribute('id','ze-snippet');
      document.body.appendChild(externalScript);
    },
    openMenu : function(){
      zE('webWidget', 'open');
      // var waitForZopim = setInterval(function () {
      //   if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
      //     return;
      //   }
      //   zE('webWidget', 'open');
      //   var display = zE('webWidget:get', 'display');
      //   if (display === "chat") {
      //     zE('webWidget', 'close');
      //     clearInterval(waitForZopim);
      //   }
      // }, 100);
    }

  },
  mounted (){
    this.setScript();
  }

}
</script>

<style scoped>
  .img-responsive {
    max-width: 70%;
    height: auto;
  }
  .text-white {
    color: #ffffff; 
  }
  .text-dark {
    color: #eeeeee; 
  }
  .font-bold {
    font-weight: bold;
  }
  .header {
    font-size: 1.8em;
    font-weight: bolder;
  }
  .sub-header {
    font-size: 1em;
    font-weight: bold;
  }
  .btn {
    background-color: #ffffff; /* Green */
    border: none;
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .btn a {
    color: #333333 !important;
  }
  .btn-rounded {
    border-radius: 50px;
  }
  .full-width {
    bottom: 0;
    left: 0;
    right: 0;
    margin : 0;
    padding : 0;
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  .bg {
    display: block;
    width: 100%;
    background-color: #333333;
  }

  
</style>