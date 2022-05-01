<template>
  <div id='AppEvent'>
    <AppHeader />
    <div class="event-main lg:px-20 px-5 mx-auto containers">
      <AppNav :breadcrumbList="[{ name: '節慶活動', path: `${route.path}` }]" />
      <div class="event-select lg:flex mt-4">
        <AppDropDownMenu />
        <AppDatePick />
        <a-input v-model:value="fun" placeholder="想找有趣的? 請輸入關鍵字" class="lg:mt-0 mt-2" />
        <a-button class=" bg-green-200 hover:bg-green-500 lg:mt-0 mt-2 lg:w-20 w-full">
          <template #icon>
            <SearchOutlined />
          </template>
          搜尋
        </a-button>
      </div>
      <!-- 搜尋前 -->
      <div class="hot-topic before-search mt-8" v-if="!search">
        <div class="event__block w-full text-3xl">熱門主題</div>
        <div class="card-main flex flex-wrap justify-start">
          <a-card bordered v-for="(type, index) in typeList" :key="index"
            class="rounded-3xl relative lg:w-64 sm:w-full lg:mx-4 md:mx-24 mx-4 my-4 cursor-pointer"
            @click="getApiEventList(type.title)">
            <div class="">{{ type.title }}</div>
            <template #cover>
              <img alt="example" :src="type.img" class="h-32 lg:h-full">
            </template>

          </a-card>
        </div>

      </div>
      <div class="after-search mt-8" v-else>
        <div class="event__block w-full ">
          <span class="text-3xl">搜尋結果</span>
          <span class="ml-1">共有 <span class="text-orange-300 ml-1">{{ eventList.length }}</span> 筆</span>
        </div>
        <div class="card-whole grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10" >
          <div v-for="(item, index) in eventList" :key="index" class="w-full cursor-pointer" @click="getRouteEventDetail(item)">

            <!-- 這邊 css object fit 外面要有div包著 然後自己要寫長寬 -->
            <div class="h-48 w-full rounded-xl overflow-hidden">
              <img :src="item.Picture.PictureUrl1" alt="" class="object-cover h-48 w-full">
            </div>
            <div class="content">
              <div class="content-title font-bold text-xl">{{ item.ActivityName }}</div>
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
import { apiGetEventList } from '@/api'
import { useRouter, useRoute } from 'vue-router'
import { SearchOutlined } from '@ant-design/icons-vue'
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
import AppDropDownMenu from '@/components/AppDropDownMenu.vue'
import AppDatePick from '@/components/AppDatePick.vue'
export default defineComponent({
  name: 'AppEvent',
  components: {
    AppHeader,
    AppNav,
    AppDropDownMenu,
    AppDatePick,
    SearchOutlined
  },
  setup () {
    const route = useRoute() // 获取到值
    const router = useRouter()
    const fun = ref<string>('')
    const eventList = ref([])
    const search = ref(false)
    /** 看一下require是甚麼 */
    const typeList = reactive<any>([
      {
        title: '節慶活動',
        value: '節慶活動',
        img: require('@/assets/images/AppEvent/1.png')
      },
      {
        title: '自行車活動',
        value: '自行車活動',
        img: require('@/assets/images/AppEvent/2.png')
      },
      {
        title: '遊憩活動',
        value: '遊憩活動',
        img: require('@/assets/images/AppEvent/3.png')
      },
      {
        title: '產業文化活動',
        value: '產業文化活動',
        img: require('@/assets/images/AppEvent/4.png')
      },
      {
        title: '年度活動',
        value: '年度活動',
        img: require('@/assets/images/AppEvent/5.png')
      },
      {
        title: '四季活動',
        value: '四季活動',
        img: require('@/assets/images/AppEvent/6.png')
      }
    ])
    const getApiEventList = (title: string) => {
      const param = `$filter=Picture/PictureUrl1 ne null and Class1 eq '${title}' or Class2 eq '${title}'&$skip=1`
      apiGetEventList(param).then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        eventList.value = data
        search.value = true
        console.log('eventList', eventList.value)
      })
    }
    // 到活動詳細頁
    const getRouteEventDetail = (item: any) => {
      router.push({
        path: `/event/${item.ActivityID}`
      })
    }
    return { fun, typeList, route, getApiEventList, eventList, search, getRouteEventDetail }
  }
})
</script>

<style scoped lang='scss'>
</style>
