<template>
  <div id='AppFood'>
    <AppHeader />
    <div class="food-main lg:px-20 px-5 mx-auto containers">
      <AppNav :breadcrumbList="[{name:'品嘗美食', path:`${route.path}`}]" />
      <div class="food-select lg:flex mt-4 justify-center">
        <AppDropDownMenu />
        <a-input v-model:value="food" placeholder="你想吃甚麼? 請輸入關鍵字" class="lg:mt-0 mt-2" />
        <a-button class=" bg-green-200 hover:bg-green-500 lg:mt-0 mt-2 lg:w-20 w-full" >
          <template #icon>
            <SearchOutlined />
          </template>
          搜尋
        </a-button>
      </div>
      <div class="hot-topic mt-8" v-if="!search">
        <div class="event__block w-full text-3xl">熱門主題</div>
        <div class="card-main flex flex-wrap justify-flex">
          <a-card v-for="(type, index) in typeList" :key="index" class="rounded-3xl relative lg:w-64 sm:w-full lg:mx-4 md:mx-24 mx-4 my-4 cursor-pointer" @click="getApiFoodList(type.title)">
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
          <span class="ml-1">共有 <span class="text-orange-300 ml-1">{{ foodList.length }}</span> 筆</span>
        </div>
        <div class="card-whole grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10" >
          <div v-for="(item, index) in foodList" :key="index" class="w-full cursor-pointer" @click="getRouteFoodDetail(item)">
            <div class="h-48 w-full rounded-xl overflow-hidden">
              <img :src="item.Picture.PictureUrl1" alt="" class="object-cover h-48 w-full">
            </div>
            <div class="content">
              <div class="content-title font-bold text-xl">{{ item.RestaurantName }}</div>
              <div class="content-place">{{ item.City }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'
import { apiGetFoodList } from '@/api'
import { useRouter, useRoute } from 'vue-router'
import { SearchOutlined } from '@ant-design/icons-vue'
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
import AppDropDownMenu from '@/components/AppDropDownMenu.vue'
export default defineComponent({
  name: 'AppFood',
  components: {
    AppHeader,
    AppNav,
    AppDropDownMenu,
    SearchOutlined
  },
  setup () {
    const route = useRoute() // 获取到值
    const router = useRouter()
    const food = ref<string>('')
    const search = ref(false)
    const foodList = ref([])
    const typeList = reactive<any>([
      {
        title: '地方特產',
        value: '地方特產',
        img: require('@/assets/images/AppFood/1.png')
      },
      {
        title: '中式美食',
        value: '中式美食',
        img: require('@/assets/images/AppFood/2.png')
      },
      {
        title: '甜點冰品',
        value: '甜點冰品',
        img: require('@/assets/images/AppFood/3.png')
      },
      {
        title: '異國料理',
        value: '異國料理',
        img: require('@/assets/images/AppFood/4.png')
      },
      {
        title: '伴手禮',
        value: '伴手禮',
        img: require('@/assets/images/AppFood/5.png')
      },
      {
        title: '素食',
        value: '素食',
        img: require('@/assets/images/AppFood/6.png')
      }
    ])
    const getApiFoodList = (title: string) => {
      const param = `$filter=Picture/PictureUrl1 ne null and Class eq '${title}'`
      apiGetFoodList(param).then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        foodList.value = data
        search.value = true
        console.log('foodList', foodList.value)
      })
    }
    // 到美食詳細頁
    const getRouteFoodDetail = (item: any) => {
      router.push({
        path: `/food/${item.RestaurantID}`
      })
    }

    return { food, typeList, route, foodList, getApiFoodList, search, getRouteFoodDetail }
  }
})
</script>

<style scoped lang='scss'>
</style>
