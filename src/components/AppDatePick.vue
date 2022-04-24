<template>
  <div id='AppDatePick' class="lg:mt-0 mt-2 lg:w-96 w-full">
    <a-space direction="vertical" :size="12" class="w-full">
      <a-date-picker v-model:value="date" placeholder="請選擇日期" class="w-full" />
    </a-space>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import type { Dayjs } from 'dayjs'
export default defineComponent({
  name: 'AppDatePick',
  setup () {
    return {
      date: ref<Dayjs>()
    }
  }
})
</script>

<style scoped lang='scss'>
</style>
