import { useUserStoreHook } from '@/store/modules/user'
import { Directive, DirectiveBinding } from 'vue'
import router from '@/router/index'

/**
 * 按钮权限 eg: v-hasPerm="['user-add','user-edit']"
 */
export const hasPerm: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // 「超级管理员」拥有所有的按钮权限
    const { roles, perms } = useUserStoreHook()
    if (roles.includes('admin')) {
      return true
    }

    // 「其他角色」按钮权限校验
    const buttons = router.currentRoute.value.meta.buttons as string[]
    const { value } = binding
    if (value) {
      const requiredPerms = value // DOM绑定需要的按钮权限标识
      const hasPerm = buttons?.some((perm) => {
        return requiredPerms.includes(perm)
      })

      if (!hasPerm) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error("need perms! Like v-has-perm=\"['user-add','user-edit']\"")
    }
  }
}

/**
 * 角色权限
 */
export const hasRole: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding

    if (value) {
      const requiredRoles = value // DOM绑定需要的角色编码
      const { roles } = useUserStoreHook()
      const hasRole = roles.some((perm) => {
        return requiredRoles.includes(perm)
      })

      if (!hasRole) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error("need roles! Like v-has-role=\"['admin','test']\"")
    }
  }
}
