<template>
  <div id='AppEventDetail'>
    <AppHeader/>
    <div class="main lg:px-20 px-5 mx-auto max-w-6xl">
      <AppNav :breadcrumbList="breadcrumbList" />
      <img :src="eventDetail[0]?.Picture.PictureUrl2" alt="" class="w-full h-96 mt-4">
      <div class="text-2xl mt-6">{{eventDetail[0]?.ActivityName}}</div>

      <div class="font-bold text-xl mt-6">活動介紹:</div>
      <div class="leading-7 text-slate-500">{{eventDetail[0]?.Description}}</div>
      <div class="content mt-9">
        <div class="text bg-slate-100">
          <div><span class="text-xl font-bold">活動時間 :</span> <span class="text-xl font-medium">{{`${eventDetail[0]?.StartTime.substring(0, 10)} - ${eventDetail[0]?.EndTime.substring(0, 10)}`}}</span></div>
          <div><span class="text-xl font-bold">聯絡電話 :</span> <span class="text-xl font-medium">無</span></div>
          <div><span class="text-xl font-bold">主辦單位 :</span> <span class="text-xl font-medium">{{eventDetail[0]?.Organizer}}</span></div>
          <div><span class="text-xl font-bold">活動地點 :</span> <span class="text-xl">{{eventDetail[0]?.Location}}</span></div>
          <div><span class="text-xl font-bold">活動費用 :</span> <span class="text-xl">無</span></div>
          <div><span class="text-xl font-bold">注意事項 :</span> <span class="text-xl">無</span></div>
        </div>
      </div>
    </div>
     <iframe
         class="mt-10"
          width="100%"
          height="250"
          frameborder="0" style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyACwDFpYlaQkcQkdCaUMxSKV3rO9G3hAMI&q=${eventDetail[0]?.Address}`"
          allowfullscreen>
      </iframe>
    <AppFooter/>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted, reactive } from 'vue'
import { apiGetEventList } from '@/api'
import { useRouter, useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppNav from '@/components/AppNav.vue'
export default defineComponent({
  name: 'AppEventDetail',
  components: {
    AppHeader,
    AppFooter,
    AppNav
  },
  setup () {
    const route = useRoute() // 获取到值
    const eventDetail = reactive<any>([]) // 詳細頁的圖片
    const breadcrumbList = reactive([
      {
        name: '節慶活動',
        path: '/event'
      }
    ])
    const getApiEventList = () => {
      const param = `$filter=ActivityID eq '${route.params.id}'`
      apiGetEventList(param).then(data => {
        console.log('datas', data[0])
        const eventData = [{
          name: data[0].City,
          path: '/home'
        },
        {
          name: data[0].ActivityName,
          path: `/event/${route.params.id}`
        }
        ]
        breadcrumbList.push(...eventData)

        eventDetail.push(data[0])
        console.log(eventDetail)
      })
    }

    onMounted(() => {
      getApiEventList()
    })

    return { route, breadcrumbList, eventDetail }
  }
})
</script>

<style scoped lang='scss'>

</style>
