// store/modules/auth.js
import axios from 'axios'
import { toast } from 'vue3-toastify'

const API_URL = 'http://localhost:5000/api/auth' // Базовий URL для запитів

const state = {
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user')) || null,
  status: ''
}

const mutations = {
  AUTH_REQUEST(state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS(state, { token, user }) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  AUTH_ERROR(state) {
    state.status = 'error'
  },
  LOGOUT(state) {
    state.status = ''
    state.token = ''
    state.user = null
  }
}

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: `${API_URL}/login`, // Використовуйте повний шлях
        data: user,
        method: 'POST'
      })
        .then((resp) => {
          const token = resp.data.token
          const userData = resp.data.user // Отримуємо дані користувача з відповіді сервера

          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(userData)) // Зберігаємо реальні дані користувача

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit('AUTH_SUCCESS', { token, user: userData })
          toast.success('Login successful!', {
            position: 'top-right',
            autoClose: 3000
          })
          resolve(resp)
        })
        .catch((err) => {
          commit('AUTH_ERROR')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          toast.error(`Login failed: ${err.response.data.message}`, {
            position: 'top-right',
            autoClose: 3000
          })
          reject(err)
        })
    })
  },
  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      axios({
        url: `${API_URL}/register`, // Використовуйте повний шлях
        data: user,
        method: 'POST'
      })
        .then((resp) => {
          const token = resp.data.token
          const userData = resp.data.user // Отримуємо дані користувача з відповіді сервера

          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(userData)) // Зберігаємо реальні дані користувача

          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit('AUTH_SUCCESS', { token, user: userData })
          toast.success('Registration successful!', {
            position: 'top-right',
            autoClose: 3000
          })
          resolve(resp)
        })
        .catch((err) => {
          commit('AUTH_ERROR')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          toast.error(`Registration failed: ${err.response.data.message}`, {
            position: 'top-right',
            autoClose: 3000
          })
          reject(err)
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('LOGOUT')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete axios.defaults.headers.common['Authorization']
      toast.info('Logged out successfully', {
        position: 'top-right',
        autoClose: 3000
      })
      resolve()
    })
  }
}
const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
  user: (state) => state.user
}

export default {
  state,
  mutations,
  actions,
  getters
}
