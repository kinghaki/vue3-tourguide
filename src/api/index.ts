import axios from 'axios'
import JsSHA from 'jssha/dist/sha1'

/**
 * axios
 */
const AppID = 'd5a6593d182e41f5a7a7ecf37394918a'
const AppKey = 'VaIEYF4NnTH_OKWEunqEbz6sTgg'

const webTokenRequestV2 = axios.create({
  /** 之後來研究 process.env 寫法 */
  baseURL: 'https://ptx.transportdata.tw/MOTC'
})
const webTokenRequestV3 = axios.create({
  /** 之後來研究 process.env 寫法 */
  baseURL: 'https://gist.motc.gov.tw/gist_api'
})

// request攔截器
webTokenRequestV2.interceptors.request.use(function (config) {
  // header
  const UTCString = new Date().toUTCString()
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + UTCString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'

  config.headers = {
    Authorization: Authorization,
    'X-Date': UTCString
  }
  console.log(config.headers)

  return config
}, function (error) {
  console.log('error:: ', error)
  return Promise.reject(error)
})
webTokenRequestV3.interceptors.request.use(function (config) {
  // header
  const GMTString = new Date().toUTCString()
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'

  config.headers = {
    Authorization: Authorization,
    'X-Date': GMTString
  }
  console.log(config.headers)

  return config
}, function (error) {
  console.log('error:: ', error)
  return Promise.reject(error)
})

// Response攔截器
webTokenRequestV2.interceptors.response.use(
  function (response) {
    console.log(response.config.url)
    console.log(response)
    return response.data
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          // 發生錯誤
          alert('400 發生錯誤')
          console.error('400 發生錯誤')
          break
        case 404:
          // 你要找的頁面不存在
          alert('404 你要找的頁面不存在')
          console.error('404 你要找的頁面不存在')
          break
        case 500:
          // 程式發生錯誤，請聯絡管理員
          alert('500 程式發生錯誤，請聯絡管理員')
          console.error('500 程式發生錯誤，請聯絡管理員')
          break
        default:
          // 系統發生非預期錯誤，請聯絡管理員
          alert('系統發生非預期錯誤，請聯絡管理員')
          console.error('系統發生非預期錯誤，請聯絡管理員')
      }
      console.log(error.response.status)
    }
    if (!window.navigator.onLine) {
      // 沒有網路連線
      alert('沒有網路連線')
      console.error('沒有網路連線')
      return
    }
    return Promise.reject(error.response)
  }
)
webTokenRequestV3.interceptors.response.use(
  function (response) {
    console.log(response.config.url)
    console.log(response)
    return response.data
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          // 發生錯誤
          alert('400 發生錯誤')
          console.error('400 發生錯誤')
          break
        case 404:
          // 你要找的頁面不存在
          alert('404 你要找的頁面不存在')
          console.error('404 你要找的頁面不存在')
          break
        case 500:
          // 程式發生錯誤，請聯絡管理員
          alert('500 程式發生錯誤，請聯絡管理員')
          console.error('500 程式發生錯誤，請聯絡管理員')
          break
        default:
          // 系統發生非預期錯誤，請聯絡管理員
          alert('系統發生非預期錯誤，請聯絡管理員')
          console.error('系統發生非預期錯誤，請聯絡管理員')
      }
      console.log(error.response.status)
    }
    if (!window.navigator.onLine) {
      // 沒有網路連線
      alert('沒有網路連線')
      console.error('沒有網路連線')
      return
    }
    return Promise.reject(error.response)
  }
)

/**
 * TDX api v3
 */

// GET 取得縣市引用參數
export const apiGetCityList = () => webTokenRequestV3.get('/V3/Map/Basic/City')

/**
 * TDX api v2
 */

// GET 取得 所有 觀光景點資料
export const apiGetSpotList = async (data: string) => webTokenRequestV2.get(`/v2/Tourism/ScenicSpot?${data}`)
// GET 取得 所有 觀光景點資料
export const apiGetSpotCityList = (city: any, data: any) => webTokenRequestV2.get(`/v2/Tourism/ScenicSpot/${city}?${data}`)
// GET 取得 所有 觀光餐飲資料
export const apiGetFoodList = (data: string) => webTokenRequestV2.get(`/v2/Tourism/Restaurant?${data}`)
// GET 取得 縣市 觀光餐飲資料
export const apiGetFoodCityList = (city: any, data: any) => webTokenRequestV2.get(`/v2/Tourism/Restaurant/${city}?${data}`)
// GET 取得 所有 觀光活動資料
export const apiGetEventList = (data: string) => webTokenRequestV2.get(`/v2/Tourism/Activity?${data}`)
// GET 取得 縣市 觀光活動資料
export const apiGetEventCityList = (city: any, data: string) => webTokenRequestV2.get(`/v2/Tourism/Activity/${city}?${data}`)
