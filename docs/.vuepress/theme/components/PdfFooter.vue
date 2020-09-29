<template>
  <div
    class="q-px-none q-py-sm bg-grey-1 text-grey-7"
    style="padding: 2.5rem 0"
  >
    <div
      class="q-mx-md text-center text-italic q-px-md"
      style="max-width: 40rem; margin: 1.5rem auto 0 auto"
    >
      LoRa® is a registered trademark or service mark of Semtech Corporation or
      its affiliates. LoRaWAN® is a licensed mark.
    </div>
    <div class="full-height flex flex-center q-mb-md">
      <img
        :src="`/assets/rakwireless/RAK-only-gray.png`"
        style="width: 20rem"
      />
      <br />
    </div>
    <div class="column q-mx-md text-center">
      <span>
        © 2014-2020
        <a
          href="https://www.rakwireless.com/en-us/?utm_source=RAK-Doc-Home&utm_medium=footer"
          target="_blank"
          >Shenzhen RAKwireless Technology Co., Ltd.</a
        >
      </span>
      <span>All rights reserved. 粤ICP备16112976号</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PdfFooter',
}
</script>