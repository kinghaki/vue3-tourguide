<template>
  <div id='AppFood'>
    <AppHeader />
    <div class="food-main lg:px-20 px-5 mx-auto">
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
      <div class="hot-topic mt-8">
        <div class="event__block w-full text-3xl">熱門主題</div>
        <div class="card-main flex flex-wrap justify-flex">
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
  name: 'AppFood',
  components: {
    AppHeader,
    AppNav,
    AppDropDownMenu,
    SearchOutlined
  },
  setup () {
    const route = useRoute() // 获取到值
    const food = ref<string>('')
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
    return { food, typeList, route }
  }
})
</script>

<style scoped lang='scss'>
</style>
