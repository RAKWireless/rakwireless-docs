<template>
  <div>
    <img 
      v-if="logo!=='#'"
      class="row justify-start" 
      :src="logo"
      width="140px" 
      height="auto"
      />
    <div class="row">
      <p>{{ description }}</p>
    </div>
    <hr />
    <div class="row details">
      <span class="text-h6">
        <q-icon name="fas fa-calendar" style="color: gray" />
        {{ lastUpdated }}
      </span>
      <span class="text-h6">
        <q-icon name="fas fa-code-branch" style="color: gray" />
        {{ version }}
      </span>
      <span class="download" v-if="typeof downloadLink === 'string' && downloadLink && disable===false" >
        <q-icon
          name="fas fa-file-download"
          style="color: gray;"
        />
        <a
          :href="downloadLink" class="text-h6" download>Download</a>
      </span>

      <span v-if="typeof downloadLink === 'object'&& downloadLink && disable===false">
        <q-icon
          name="fas fa-file-download"
          style="color: gray;"
        />

        <select name="" class="text-center" id="" :disabled="disable" @change="download">
          <option >Download</option>
          <option v-for="download in downloadLink" :value="download.link">
            
              {{download.text}}
          
          </option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
export default {

  name: 'RkReleaseNotes',
  data: () => ({
    disable : false
  }),
  computed: {
    frontmatter() {
      let frontmatter = this.$page;

      return frontmatter

    },
    lastUpdated() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let timestamp = this.frontmatter.frontmatter.release_date;
      let formattedDate = new Date(timestamp);
      let month = monthNames[formattedDate.getMonth()];
      let date = formattedDate.getDate();
      let year = formattedDate.getFullYear();
      return `${month} ${date}, ${year}`;
    },
    version() {
      return this.frontmatter.frontmatter.version || "1.0";
    },
    downloadLink() {
      return this.frontmatter.frontmatter.download_link || null;
    },
    description() {
      return this.frontmatter.frontmatter.release_notes_description || "";
    },
    logo() {
      return this.frontmatter.frontmatter.logo || "#";
    },
  },
  methods: {
    isMobile : function(){
      if(window.screen.width <= 760){
        this.disable = true;
      }else {
        this.disable = false;
      }
    },
    download : function(event){
      event.preventDefault();
      let link =(event.target.value).toString();
      console.log(window)
      if(event.target.value) {
        window.location.replace(link)
      }
    }
  },
  mounted(){
    this.isMobile()
  }

}

</script>

<style scoped>
.text-h6 {
  font-size: 1.25rem !important;
}
div > .row > span {
  padding-right: 40px;
  font-weight: bolder;
}
div > .row > h6 > i {
  padding-right: 10px;
}
hr {
  margin: 10px 0;
}
.fa-light-gray {
  color: #3e3d3e !important;
}
.details {
  display: flex;
  align-content: start;
}
.download > a {
  color: gray !important;
}
select {
    border-top :0;
    border-left :0;
    border-right :0;
}
span > select {
  vertical-align: middle;
}
select {
  padding: 0 5px;
}
@media (max-width: 476px) {
  .text-h6 {
    font-size: 0.85rem !important;
  }
  div > .row > span {
    padding-right: 12px;
    font-weight: bolder;
  }

  div > .row > h6 > i {
    padding-right: 10px;
  }
  select {
    border-top :0;
    border-left :0;
    border-right :0;
  }
  span > select {
    vertical-align: middle;
  }
  select {
    padding: 0 5px;
  }
  hr {
    margin : 10px 0;
  }
  .fa-light-gray{
    color: #3e3d3e !important;
  }
  .details {
    display:flex;
    align-content:start;
  }
  .download > a {
    color : gray !important;
  }

  @media (max-width: 476px) {
    .text-h6 {
      font-size: .85rem !important;
    }
    div > .row > span {
      padding-right: 12px;
      font-weight: bolder;
    }
  }

}

</style>