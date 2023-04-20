import vars from './vars'

export default {
  created() {

    if (typeof this.$ssrContext !== "undefined") {
      // homepage and non-homepage
      if (this.$page.path === vars.homePath) {
        this.$ssrContext.userHeadTags += vars.homeScript;
        this.$ssrContext.userHeadTags += vars.introductionOG;

      }
      else if (this.$page.path === '/') {
        this.$ssrContext.userHeadTags += vars.homeOG;
      }
      else {
        // if (this.$page.path.includes('/Overview/')||this.$page.path.includes('/Datasheet/')) {
        //   this.$ssrContext.userHeadTags += this.pageOG();
        // }
        this.$ssrContext.userHeadTags += this.pageOG();
      }
      // all pages
      this.$ssrContext.userHeadTags += vars.zendesk;
      this.$ssrContext.userHeadTags += vars.googleAnalytics;
      this.$ssrContext.userHeadTags += this.canonical();
    }
  },
  methods: {
    canonical() {
      const buyFromStore = vars.disableBuyButtonFeature ? 'BuyfromStore' : '';
      const pageURL = `${vars.baseURL}${this.$page.path}?${buyFromStore}`;
      return this.$page.path.includes('/Introduction/') ? vars.canonical.replace('<pageURL>', 'https://docs.rakwireless.com/') : vars.canonical.replace('<pageURL>', pageURL);
    },
    pageOG() {
      const title = this.$page.title
      const pageURL = vars.baseURL + this.$page.path
      const imgURL = vars.baseURL + this.$page.frontmatter.rak_img
      const description = this.$page.frontmatter.rak_desc
      return vars.pageOG
        .replace(/<title>/g, title)
        .replace(/<pageURL>/g, pageURL)
        .replace(/<imgURL>/g, imgURL)
        .replace(/<og_description>/g, description)
        .replace(/<twitter_description>/g, description)
        .replace(/<description>/g, description)
    }
  }
}