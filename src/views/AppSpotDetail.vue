<template>
  <div id='AppSpotDetail'>
    <AppHeader/>
    <div class="main lg:px-20 px-5 mx-auto max-w-6xl containers">
      <AppNav :breadcrumbList="breadcrumbList"/>
      <img :src="spotDetail[0]?.Picture.PictureUrl1" alt="" class="w-full h-96 mt-4">
      <div class="text-2xl mt-6">{{spotDetail[0]?.ScenicSpotName}}</div>

      <div class="font-bold text-xl mt-6">活動介紹:</div>
      <div class="leading-7 text-slate-500">{{spotDetail[0]?.Description}}</div>
      <div class="content mt-9">
        <div class="text bg-slate-100">
          <div><span class="text-xl font-bold">開放時間 :</span> <span class="text-xl font-medium">{{spotDetail[0]?.OpenTime}}</span></div>
          <div><span class="text-xl font-bold">服務電話 :</span> <span class="text-xl font-medium">{{spotDetail[0]?.Phone}}</span></div>
          <div><span class="text-xl font-bold">景點地址 :</span> <span class="text-xl font-medium">{{spotDetail[0]?.Address}}</span></div>
          <div><span class="text-xl font-bold">官方網站 :</span> <span class="text-xl">{{spotDetail[0]?.WebsiteUrl?? '無'}}</span></div>
          <div><span class="text-xl font-bold">票價資訊 :</span> <span class="text-xl">{{spotDetail[0]?.TicketInfo?? '無'}}</span></div>
          <div><span class="text-xl font-bold">注意事項 :</span> <span class="text-xl">{{spotDetail[0]?.Remarks ?? '無'}}</span></div>
        </div>
      </div>
    </div>
    <iframe
         class="mt-10"
          width="100%"
          height="250"
          frameborder="0" style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyACwDFpYlaQkcQkdCaUMxSKV3rO9G3hAMI&q=${spotDetail[0]?.Address}`"
          allowfullscreen>
    </iframe>
    <AppFooter/>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, onMounted } from 'vue'
import { apiGetSpotList } from '@/api'
import { useRouter, useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppNav from '@/components/AppNav.vue'
export default defineComponent({
  name: 'AppSpotDetail',
  components: {
    AppHeader,
    AppFooter,
    AppNav
  },
  setup () {
    const route = useRoute() // 获取到值
    const spotDetail = reactive<any>([])
    const breadcrumbList = reactive([
      {
        name: '探索景點',
        path: '/spot'
      }
    ])
    const getApiSpotList = () => {
      const param = `$filter=ScenicSpotID eq '${route.params.id}'`
      apiGetSpotList(param).then(data => {
        console.log('datas', data)
        const spotData = [{
          name: data[0].Address.substring(0, 3),
          path: '/home'
        },
        {
          name: data[0].ScenicSpotName,
          path: `/spot/${route.params.id}`
        }
        ]
        breadcrumbList.push(...spotData)
        spotDetail.push(data[0])
      })
    }
    onMounted(() => {
      getApiSpotList()
    })
    return { breadcrumbList, route, spotDetail }
  }
})
</script>

<style scoped lang='scss'>

</style>
