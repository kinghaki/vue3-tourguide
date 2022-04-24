<template>
  <div id='AppDropDownMenu' class="w-full">
    <a-select v-model:value="option" class="w-full">
      <a-select-option v-for ="(city,index) in cityList" :key="index" value="city.City">{{city.CityName}}</a-select-option>
    </a-select>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { apiGetCityList } from '@/api'
export default defineComponent({
  name: 'AppDropDownMenu',
  setup () {
    const cityList = ref<any>([])
    const option = ref<string>('全部縣市')
    const getApiCityList = () => {
      apiGetCityList().then(data => {
        cityList.value = data
        console.log(cityList)
      })
    }
    const onInitial = () => {
      // 取得縣市名稱
      getApiCityList()
    }
    onMounted(() => {
      onInitial()
    })
    return {
      cityList,
      option
    }
  }

})
</script>

<style scoped lang='scss'>
</style>
