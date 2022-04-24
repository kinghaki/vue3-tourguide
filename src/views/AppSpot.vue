<template>
  <div id='AppSpot'>
    <AppHeader />
    <div class="spot-main lg:px-20 px-5 mx-auto">
      <AppNav :breadcrumbList="[{name:'探索景點', path:`${route.path}`}]" />
      <div class="spot-select lg:flex mt-4">
        <AppDropDownMenu />
        <a-input v-model:value="spot" placeholder="你想吃甚麼? 請輸入關鍵字" class="lg:mt-0 mt-2" />
        <a-button class=" bg-green-200 hover:bg-green-500 lg:mt-0 mt-2">
          <template #icon>
            <SearchOutlined />
          </template>
          搜尋
        </a-button>
      </div>
      <div class="hot-topic mt-8">
        <div class="event__block w-full text-3xl ">熱門主題</div>
        <div class="card-main flex flex-wrap justify-start">
           <a-card v-for="(type, index) in typeList" :key="index" class="rounded-3xl relative lg:w-64 sm:w-full lg:mx-4 md:mx-24 mx-4 my-4 cursor-pointer">
           <div class="">{{type.title}}</div>
          <template #cover>
            <img alt="example" :src="type.img">
          </template>
        </a-card>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { SearchOutlined } from '@ant-design/icons-vue'
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
import AppDropDownMenu from '@/components/AppDropDownMenu.vue'
export default defineComponent({
  name: 'AppSpot',
  components: {
    AppHeader,
    AppNav,
    AppDropDownMenu,
    SearchOutlined
  },
  setup () {
    const route = useRoute() // 获取到值
    const spot = ref<string>('')
    const typeList = reactive<any>([
      {
        title: '自然風景類',
        value: '自然風景類',
        img: require('@/assets/images/AppSpot/1.png')
      },
      {
        title: '觀光工廠類',
        value: '觀光工廠類',
        img: require('@/assets/images/AppSpot/2.png')
      },
      {
        title: '遊憩類',
        value: '遊憩類',
        img: require('@/assets/images/AppSpot/3.png')
      },
      {
        title: '休閒農業類',
        value: '休閒農業類',
        img: require('@/assets/images/AppSpot/4.png')
      },
      {
        title: '生態類',
        value: '生態類',
        img: require('@/assets/images/AppSpot/5.png')
      },
      {
        title: '溫泉類',
        value: '溫泉類',
        img: require('@/assets/images/AppSpot/6.png')
      },
      {
        title: '古蹟類',
        value: '古蹟類',
        img: require('@/assets/images/AppSpot/7.png')
      }
    ])
    return { spot, typeList, route }
  }
})
</script>

<style scoped lang='scss'>
</style>
