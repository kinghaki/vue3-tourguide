<template>
  <div id='AppDropDownMenu' class="w-full">
    <a-select v-model:value="option" :value="modelValue" class="w-full">
      <a-select-option v-for ="(city,index) in cityList" :key="index" :value="city.City">{{city.CityName}}</a-select-option>
    </a-select>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref, reactive, computed, onUpdated } from 'vue'
import { apiGetCityList } from '@/api'
export default defineComponent({
  name: 'AppDropDownMenu',
  props: ['modelValue'],
  emits: {
    selectValue: null
  },
  setup (props, { emit }) {
    const cityList = ref<any>([])
    const option = ref<string>('全部縣市')
    // 傳給父元件使用
    // const selectCity = computed(() => {
    //   return option
    // })

    onUpdated(() => {
      console.log(option.value)
      console.log(props.modelValue)
    })
    const getApiCityList = () => {
      apiGetCityList().then(data => {
        // 將全部縣市加到下拉式選單
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data.unshift({ CityName: '全部縣市', City: '' })
        cityList.value = data
        console.log(cityList.value)
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
      // selectCity
    }
  }

})
</script>

<style scoped lang='scss'>
</style>
