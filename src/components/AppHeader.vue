<template>
  <div id='APPHeader' class="w-full flex justify-between items-center lg:px-10 px-5 border-gray-200 border-b border-solid "
    v-if="innerWidth > 576 | offsetWidth > 576">
    <router-link to="/home" class="headerlogo h-full"></router-link>
    <div class="h-full md:flex hidden items-center font-bold" style="color: #646464;">
      <router-link to="/spot" class="ml-3 hover:border-yellow-300 hover:border-b-2 hover:border-solid">探索景點
      </router-link>
      <router-link to="/event" class="ml-3 hover:border-yellow-300 hover:border-b-2 hover:border-solid">節慶活動
      </router-link>
      <router-link to="/food" class="ml-3 hover:border-yellow-300 hover:border-b-2 hover:border-solid">品嘗美食
      </router-link>
    </div>
  </div>
  <!-- 手機板的Header -->
  <div id='APPHeaderPhone' class="w-full flex justify-between items-center lg:px-10 px-5 border-gray-200 border-b border-solid" v-else>
    <router-link to="/home" class="headerlogo h-full">
      <img src="@/assets/icons/AppHeader/Logo-mobile.svg" alt="">
    </router-link>

    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
             <router-link to="/spot" class="hover:border-solid">探索景點</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/event" class="hover:border-solid">節慶活動</router-link>
          </a-menu-item>
          <a-menu-item key="3">
             <router-link to="/food" class="hover:border-solid">品嘗美食</router-link>
          </a-menu-item>
        </a-menu>
      </template>
        <img src="@/assets/icons/AppHeader/menu-mobile.svg" alt="" class="cursor-pointer">
        <!-- <DownOutlined /> -->
    </a-dropdown>
  </div>

</template>

<script lang='ts'>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue'
export default defineComponent({
  name: 'APPHeader',
  components: {

  },
  setup () {
    const innerWidth = ref(0)
    const offsetWidth = ref(0)

    const handleResize = () => {
      innerWidth.value = window.innerWidth
    }
    const onReize = () => {
      window.addEventListener('resize', handleResize)
    }

    const handleMenuClick: MenuProps['onClick'] = e => {
      console.log('click', e)
    }
    onMounted(() => {
      offsetWidth.value = document.body.offsetWidth
      onReize()
    })

    return { innerWidth, handleMenuClick, offsetWidth }
  }

})
</script>

<style scoped lang='scss'>
#APPHeader {
  height: 80px;

  .headerlogo {
    display: block;
    width:241px;
    height: 32px;
    background: url(../assets/images/AppHeader/Logo-desktop.png) no-repeat center center / cover;
  }
}

#APPHeaderPhone {
  height: 80px;

  .headerlogo {
    display: block;
    width: 241px;
    height: 32px;
  }
}
</style>
