<template>
  <div class="row q-py-md justify-center">
    <div class="col-12 col-sm-6 column">
      <div class="text-weight-bold">Learn More</div>
      <ul class="q-pa-xs q-ma-none q-ml-md q-pl-md">
        <li v-for="(link, id) in params.learnMore" :key="id">
          <a
            class="text-weight-medium text-secondary cursor-pointer"
            @click="nav(link.href)"
          >{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-sm-6 column">
      <div class="text-weight-bold">Resources</div>
      <ul class="q-pa-xs q-ma-none q-ml-md q-pl-md">
        <li v-for="(link, id) in params.resources" :key="id">
          <a
            class="text-weight-medium text-secondary cursor-pointer"
            @click="nav(link.href)"
          >{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CommonMixin from './common.mixin'
export default {
  props: ['params'],
  mixins: [CommonMixin]
}
</script>
