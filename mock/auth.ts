import { MockMethod } from 'vite-plugin-mock'

const tokens: any = {
  admin: {
    accessToken: 'admin-token'
  },
  editor: {
    accessToken: 'editor-token'
  },
  editor2: {
    accessToken: 'editor-token2'
  }
}

const users: any = {
  'admin-token': {
    userId: '1',
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    nickname: 'Super Admin'
  },
  'editor-token': {
    userId: '2',
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    nickname: 'Normal Editor'
  },
  'editor-token2': {
    userId: '3',
    roles: ['editor2'],
    introduction: 'I am an editor2',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    nickname: 'Normal Editor2'
  }
}

export default [
  // user login
  {
    url: '/v1/api/auth/login',
    method: 'post',
    response: (config: any) => {
      const { username } = config.body
      const accessToken = tokens[username]

      // mock error
      if (!accessToken) {
        return {
          code: 60204,
          msg: 'Account and password are incorrect.',
          data: ''
        }
      }

      return {
        code: 20000,
        msg: 'success',
        data: accessToken
      }
    }
  },

  // get user info
  {
    url: '/v1/api/user/info',
    method: 'get',
    response: (config: any) => {
      const { accessToken } = config.query
      const info = users[accessToken]

      // mock error
      if (!info) {
        return {
          code: 50008,
          msg: 'Login failed, unable to get user details.',
          data: ''
        }
      }

      return {
        code: 20000,
        msg: 'success',
        data: info
      }
    }
  },

  // user logout
  {
    url: '/v1/api/auth/logout',
    method: 'post',
    response: () => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
] as MockMethod[]
