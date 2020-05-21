import { removeTokenFromStorage } from '@/assets/js/index'

export const state = () => ({
  userInfo: {
    name: '',
    avatar: '',
  },
})

export const mutations = {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo;
  },
  clearUserInfo(state) {
    state.userInfo = {}
  },
  clearAllUserData(state) {
    state.userInfo = {};
    removeTokenFromStorage();
  },
}

export const getters = {
  userInfo(state) {
    return state.userInfo;
  }
}