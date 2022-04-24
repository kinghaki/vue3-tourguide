<template>
  <div id='AppSpotDetail'>
    <AppHeader/>
    <div class="main">
      <AppNav/>
    </div>
    <AppFooter/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppNav from '@/components/AppNav.vue'
export default defineComponent({
  name: 'AppSpotDetail',
  components: {
    AppHeader,
    AppFooter,
    AppNav
  }
})
</script>

<style scoped lang='scss'>

</style>
