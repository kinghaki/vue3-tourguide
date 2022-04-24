<template>
  <div class="home">
    <AppHeader />
    <div class="containermx-auto px-5 lg:px-20 mt-20 my-20">
      <div class="search lg:flex justify-between">
        <div class="search-left">
          <h1 class="text-4xl">
            探索
            <span class="underline underline-offset-2 decoration-yellow-500">台灣之美</span>
            <br>
            讓我們更親近這片土地
          </h1>
          <div class="flex mt-5">
            <img src="@/assets/icons/AppHome/spot24_Y.svg" alt="">
            <span> 台灣旅遊景點導覽Taiwan Travel Guide</span>
          </div>
        </div>
        <div class="search-right">
          <a-select v-model:value="option" class=" w-full">
            <a-select-option value="探索景點">探索景點</a-select-option>
            <a-select-option value="節慶活動">節慶活動</a-select-option>
            <a-select-option value="品嘗美食">品嘗美食</a-select-option>
          </a-select>
          <a-input v-model:value="where" placeholder="你想去哪裡? 請輸入關鍵字" class="mt-4" />
          <a-button class="mt-4 bg-green-200 hover:bg-green-500" size="large" block>
            <template #icon>
              <SearchOutlined />
            </template>
            Search
          </a-button>
        </div>
      </div>
      <div class="banner">
        <!-- <a-carousel arrows dotPosition="bottom" autoplay>
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
              <left-circle-outlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
              <right-circle-outlined />
            </div>
          </template>
          <h2>4</h2>
          <h1>3</h1>
          <h1>{{ bannerList }}</h1>
          <div v-for="item in bannerList" :key="item.ScenicSpotID">
            {{}}
          </div>
        </a-carousel> -->
        <!-- 近期活動 -->
        <div class="recent-active w-full mt-8">
          <div class="flex justify-between w-full">
            <div class="text-2xl">近期活動</div>
            <div class="text-orange-500 cursor-pointer" @click="router.push({ name: 'event' })">
              查看更多活動<img src="@/assets/icons/AppHome/arrow-right16_R.svg" />
            </div>
          </div>
          <div class="whole-card grid lg:grid-cols-2 grid-cols1 gap-4 w-full">
            <div v-for="(item, index) in evnetList" :key="index" class="flex h-150" style="background-color: #F9F9F9" @click="getRouteEventDetail($event,item)">
              <div class="left basis-1/4 cursor-pointer" >
                <img :src="item.Picture.PictureUrl1" alt="" class="md:w-96 w-full md:h-50 h-40 ">
              </div>
              <div class="right basis-3/4 cursor-pointer flex flex-col justify-evenly">
                <div>
                  <div class="date text-slate-400 ">{{ `${item?.StartTime.substring(0, 10)} - ${item?.EndTime.substring(0, 10)}` }}</div>
                  <div class="title text-2xl font-bold ">{{ item?.ActivityName }}</div>
                </div>
                <div class="itself flex justify-between text-slate-500 font-bold">
                  <div class="city">{{ item?.City }}</div>
                  <div class="detail">詳細介紹 ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- 熱門打卡景點 -->
        <div class="hot-spot w-full mt-8">
          <div class="flex justify-between w-full">
            <div class="text-2xl">熱門打卡景點</div>
            <div class="text-orange-500 cursor-pointer" @click="router.push({ name: 'spot' })">
              查看更多景點<img src="@/assets/icons/AppHome/arrow-right16_R.svg" />
            </div>
          </div>
          <div class="whole-card grid lg:grid-cols-2 grid-cols1 gap-4 w-full">
            <div v-for="(item,index) in spotList" :key="index" class="rounded-xl font-bold cursor-pointer">
              <img :src="item.Picture.PictureUrl1" alt="" class="lg:w-80 w-full h-60">
              <div class="text-2xl">{{item.ScenicSpotName}}</div>
              <span class="text-slate-500">{{item.Address.substring(0,3)}}</span>
            </div>
          </div>
        </div>
        <!-- 一再回訪美食 -->
        <div class="foods w-full mt-8">
          <div class="flex justify-between w-full">
            <div class="text-2xl">一再回訪美食</div>
            <div class="text-orange-500 cursor-pointer" @click="router.push({ name: 'food' })">
              查看更多美食<img src="@/assets/icons/AppHome/arrow-right16_R.svg" />
            </div>
          </div>
           <div class="whole-card grid lg:grid-cols-2 grid-cols1 gap-4 w-full">
             <div v-for="(item,index) in foodList" :key="index" class="rounded-xl font-bold cursor-pointer">
              <img :src="item.Picture.PictureUrl1" alt="" class="lg:w-80 w-full h-60">
              <div class="text-2xl">{{item.RestaurantName}}</div>
              <span class="text-slate-500">{{item.City}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { SearchOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
import { apiGetSpotList, apiGetEventList, apiGetFoodList } from '@/api'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

export default defineComponent({
  name: 'AppHome',
  components: {
    AppHeader,
    AppFooter,
    /** 按鈕 */
    SearchOutlined
    /** 輪播圖˙ */
    // LeftCircleOutlined,
    // RightCircleOutlined
  },
  setup () {
    const router = useRouter()
    const route = useRoute() // 获取到值
    const option = ref<string>('探索景點')
    const where = ref<string>('')
    const bannerList = ref<any>([])
    const evnetList = ref<any>([])
    const spotList = ref<any>([])
    const foodList = ref<any>([])

    onMounted(async () => {
      await onInitial()
    })
    const onInitial = async () => {
      // 取得輪播圖景點5筆
      await getApiBannerList()

      // 取得近期活動資料4筆
      await getApiEventList()

      // 取的熱門打卡景點資料4筆
      await getApiSpotList()

      // 取得一再回訪美食4筆
      await getApiFoodList()
    }

    const getApiBannerList = async () => {
      const param = '$filter=Picture/PictureUrl1 ne null&$orderby=SrcUpdateTime desc&$top=5&$skip=1'
      bannerList.value = await apiGetSpotList(param)
      console.log('bannerList', bannerList.value)
    }

    const getApiEventList = async () => {
      const param = '$filter=Picture/PictureUrl1 ne null &$orderby=StartTime asc&$top=4'
      evnetList.value = await apiGetEventList(param)

      console.log('evnetList', evnetList.value)
    }

    const getApiSpotList = async () => {
      const param = '$filter=Picture/PictureUrl1 ne null&$top=4&$skip=5'
      spotList.value = await apiGetSpotList(param)
      console.log('spotList', spotList.value)
    }

    const getApiFoodList = async () => {
      const param = '$filter=Picture/PictureUrl1 ne null&$top=4&$skip=10'
      foodList.value = await apiGetFoodList(param)
      console.log('foodList', foodList.value)
    }

    const getRouteEventDetail = (event: any, item: any) => {
      router.push({
        path: `/event/${item.ActivityID}`
      })
    }
    return {
      router,
      route,
      option,
      where,
      bannerList,
      evnetList,
      spotList,
      foodList,
      getRouteEventDetail

    }
  }
})
</script>
<style scoped lang="scss">
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}

.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

#App .ant-card-body {
  position: static !important;
  display: block !important;
  font-size: 16px;
}

img{
  border-radius: 20px;
}

</style>
