<template>
  <div id='AppFoodDetail'>
    <AppHeader/>
    <div class="main">
      <AppNav/>
    </div>
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

    return { route, breadcrumbList }
  }
})
</script>

<style scoped lang='scss'>

</style>
