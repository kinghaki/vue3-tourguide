<template>
  <div id='AppSpot'>
    <AppHeader />
    <div class="spot-main lg:px-20 px-5 mx-auto">
      <AppNav :breadcrumbList="[{name:'探索景點', path:`${route.path}`}]" />
      <div class="spot-select lg:flex mt-4">
        <AppDropDownMenu v-model="selectValue" />
        <a-input v-model:value="spot" placeholder="你想吃甚麼? 請輸入關鍵字" class="lg:mt-0 mt-2" />
        <a-button class=" bg-green-200 hover:bg-green-500 lg:mt-0 mt-2 lg:w-20 w-full">
          <template #icon>
            <SearchOutlined />
          </template>
          搜尋
        </a-button>
      </div>
      <div class="hot-topic mt-8" v-if="!search">
        <div class="event__block w-full text-3xl ">熱門主題</div>
        <div class="card-main flex flex-wrap justify-start">
           <a-card v-for="(type, index) in typeList" :key="index" class="rounded-3xl relative lg:w-64 sm:w-full lg:mx-4 md:mx-24 mx-4 my-4 cursor-pointer" @click="getApiSpotList(type.title)">
           <div class="">{{type.title}}</div>
          <template #cover>
            <img alt="example" :src="type.img">
          </template>
        </a-card>
        </div>

      </div>
      <div class="after-search mt-8" v-else>
        <div class="event__block w-full ">
          <span class="text-3xl">搜尋結果</span>
          <span class="ml-1">共有 <span class="text-orange-300 ml-1">{{ spotList.length }}</span> 筆</span>
        </div>
        <div class="card-whole grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10" >
          <div v-for="(item, index) in spotList" :key="index" class="w-full cursor-pointer" @click="getRouteSpotDetail(item)">
            <div class="h-48 w-full rounded-xl overflow-hidden">
              <img :src="item.Picture.PictureUrl1" alt="" class="object-cover h-48 w-full">
            </div>
            <div class="content">
              <div class="content-title font-bold text-xl">{{ item.ScenicSpotName }}</div>
              <div class="content-place">{{ item.Address?.substring(0,3) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, onUpdated } from 'vue'
import { apiGetSpotList } from '@/api'
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
    const router = useRouter()
    const spot = ref<string>('')
    const search = ref(false)
    const selectValue = ref('全部縣市')
    const spotList = ref([])
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

    const getApiSpotList = (title: string) => {
      const param = `$filter=Picture/PictureUrl1 ne null and Class1 eq '${title}' or Class2 eq '${title}' or Class3 eq '${title}'`
      apiGetSpotList(param).then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        spotList.value = data
        search.value = true
        console.log('spotList', spotList.value)
      })
    }

    // 到景點詳細頁
    const getRouteSpotDetail = (item: any) => {
      router.push({
        path: `/spot/${item.ScenicSpotID}`
      })
    }
    return { spot, typeList, route, selectValue, getApiSpotList, spotList, search, getRouteSpotDetail }
  }
})
</script>

<style scoped lang='scss'>
</style>
