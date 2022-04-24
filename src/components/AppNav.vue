<template>
  <div id='AppNav'>
    <a-breadcrumb>
        <a-breadcrumb-item><router-link to="/home">首頁</router-link></a-breadcrumb-item>
         <a-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
            <router-link :to="item.path">{{item.name}}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { any } from 'vue-types'
export default defineComponent({
  name: 'AppNav',
  props: {
    breadcrumbList: any
  },
  setup (props) {
    console.log(props.breadcrumbList)
    return {}
  }
})
</script>

<style scoped lang='scss'>

</style>
