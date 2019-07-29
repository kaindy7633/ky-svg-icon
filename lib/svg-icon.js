/*
 * @Description: Svg-Icon
 * @Author: LiuZhen
 * @Date: 2019-07-29 14:22:21
 * @Last Modified by: LiuZhen
 * @Last Modified time: 2019-07-29 16:29:22
 */
import SvgIcon from './component/svg-icon.vue'

export default {
  install (Vue, options) {
    // if (!options && !options.iconsPath) {
    //   // 如果初始化时未传入svg目录路径，则报错
    //   throw new Error('The svg icons directory must be passed in as an initialization parameter')
    // }

    // 引入所有svg资源
    const requireAll = (requireContext) => requireContext.keys().map(requireContext)
    const req = require.context('@/assets/svg-icons', false, /\.svg$/)
    requireAll(req)

    Vue.component('svg-icon', SvgIcon)
  }
}
