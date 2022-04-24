<template>
  <div id='AppEvent'>
    <AppHeader />
    <div class="event-main lg:px-20 px-5 mx-auto">
      <AppNav :breadcrumbList="[{name:'節慶活動', path:`${route.path}`}]" />
      <div class="event-select lg:flex mt-4">
        <AppDropDownMenu />
        <AppDatePick />
        <a-input v-model:value="fun" placeholder="想找有趣的? 請輸入關鍵字" class="lg:mt-0 mt-2"/>
        <a-button class=" bg-green-200 hover:bg-green-500 lg:mt-0 mt-2">
          <template #icon>
            <SearchOutlined />
          </template>
          搜尋
        </a-button>
      </div>
      <div class="hot-topic  mt-8">
        <div class="event__block w-full text-3xl">熱門主題</div>
        <div class="card-main flex flex-wrap justify-start">
          <a-card bordered v-for="(type, index) in typeList" :key="index"  class="rounded-3xl relative lg:w-64 sm:w-full lg:mx-4 md:mx-24 mx-4 my-4 cursor-pointer">
          <div class="">{{type.title}}</div>
          <template #cover>
            <img alt="example" :src="type.img" class="h-32 lg:h-full">
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
    const fun = ref<string>('')
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
    return { fun, typeList, route }
  }
})
</script>

<style scoped lang='scss'>

</style>
