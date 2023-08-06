import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { usePermissionStoreHook } from '@/store/modules/permission'
import { useUserStoreHook } from '@/store/modules/user'
import { getToken } from '@/utils/auth'
import { notFoundAndNoPower } from '@/router/modules/errors'

NProgress.configure({ showSpinner: false }) // 进度条

const permissionStore = usePermissionStoreHook()

// 白名单路由
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，跳转首页
      next({ path: '/' })
      NProgress.done()
    } else {
      const userStore = useUserStoreHook()
      const hasRoles = userStore.roles && userStore.roles.length > 0
      if (hasRoles) {
        // next()
        // 未匹配到任何路由，跳转404
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next('/404')
        } else {
          next()
        }
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { roles } = await userStore.getInfo()

          var accessRoutes = []
          if (roles.includes('editor2')) {
            // 根据服务器获取的用户菜单生成路由
            const menus = await userStore.getUserMenus()
            var asyncRoutes = await permissionStore.generateDynamicRoutes(menus)
            // 404 page must be placed at the end !!!
            // accessRoutes = asyncRoutes.concat(notFoundAndNoPower)
            accessRoutes = asyncRoutes
          } else {
            // generate accessible routes map based on roles
            accessRoutes = await permissionStore.generateRoutes(roles)
          }

          // dynamically add accessible routes
          accessRoutes.forEach((route) => {
            router.addRoute(route)
          })

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error: any) {
          ElMessage.error(error.message || 'Router Has Error')
          // 移除 token 并跳转登录页
          await userStore.resetToken()
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 未登录可以访问白名单页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
