<template>
  <div id='AppFoodDetail'>
    <AppHeader/>
    <div class="main lg:px-20 px-5 mx-auto max-w-6xl containers">
      <AppNav :breadcrumbList="breadcrumbList"/>
      <img :src="foodDetail[0]?.Picture.PictureUrl1" alt="" class="w-full h-96 mt-4">
      <div class="text-2xl mt-6">{{foodDetail[0]?.RestaurantName}}</div>

      <div class="font-bold text-xl mt-6">活動介紹:</div>
      <div class="leading-7 text-slate-500">{{foodDetail[0]?.Description}}</div>
      <div class="content mt-9">
        <div class="text bg-slate-100">
          <div><span class="text-xl font-bold">開放時間 :</span> <span class="text-xl font-medium">{{foodDetail[0]?.OpenTime}}</span></div>
          <div><span class="text-xl font-bold">連絡電話 :</span> <span class="text-xl font-medium">{{foodDetail[0]?.Phone}}</span></div>
          <div><span class="text-xl font-bold">餐廳地址 :</span> <span class="text-xl font-medium">{{foodDetail[0]?.Address}}</span></div>
          <div><span class="text-xl font-bold">官方網站 :</span> <span class="text-xl">{{foodDetail[0]?.WebsiteUrl?? '無'}}</span></div>
        </div>
      </div>
    </div>
    <iframe
         class="mt-10"
          width="100%"
          height="250"
          frameborder="0" style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyACwDFpYlaQkcQkdCaUMxSKV3rO9G3hAMI&q=${foodDetail[0]?.Address}`"
          allowfullscreen>
    </iframe>
    <AppFooter/>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, onMounted } from 'vue'
import { apiGetFoodList } from '@/api'
import { useRouter, useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppNav from '@/components/AppNav.vue'
export default defineComponent({
  name: 'AppFoodDetail',
  components: {
    AppHeader,
    AppFooter,
    AppNav
  },
  setup () {
    const route = useRoute() // 获取到值
    const foodDetail = reactive<any>([])
    const getApiFoodList = () => {
      const param = `$filter=RestaurantID eq '${route.params.id}'`
      apiGetFoodList(param).then(data => {
        console.log('datas', data)
        const eventData = [{
          name: data[0].City,
          path: '/home'
        },
        {
          name: data[0].RestaurantName,
          path: `/food/${route.params.id}`
        }
        ]
        breadcrumbList.push(...eventData)
        foodDetail.push(data[0])
      })
    }

    const breadcrumbList = reactive([
      {
        name: '品嘗美食',
        path: '/food'
      }
    ])

    onMounted(() => {
      getApiFoodList()
    })

    return { route, breadcrumbList, foodDetail }
  }
})
</script>

<style scoped lang='scss'>

</style>
