export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  // Nuxt импользует vuex. Если у нас есть store, то работа начинается именно из этих файлов.
  // Поэтому можно отследить начало работы на сервере. Эта функция вызывается только один раз при старте
  // Может пригодиться при формировании авторизации, при загрузке данные для работы приложения
  nuxtServerInit({ dispatch }) {
    console.log('nuxtServerInit')
  },
  async login({ commit }) {
    commit('setToken', 'truetoken')
  },
  async logout({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken: s => !!s.token
}

