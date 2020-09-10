<template>
  <q-expansion-item
    group="faq"
    class="bg-primary text-white q-my-xs"
    expand-icon-class="text-white"
    :default-opened="defaultOpened"
  >
    <template #header>
      <div
        class="fit q-px-lg"
        style="margin:auto"
      >
        <slot name="question"></slot>
      </div>
    </template>
    <q-card class="text-grey-9 bg-grey-1">
      <q-card-section>
        <slot name="answer"></slot>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
export default {
  name: 'FAQ',
  props: {
    defaultOpened: { type: Boolean, default: false }
  }
}
</script>