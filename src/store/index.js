import { createStore } from 'vuex'
import axios from "axios";
const apiUrl = process.env.VUE_APP_API_URL;

export default createStore({
  state: {
    strong_js: [],
    middle_js: [],
    light_js: [],
  },

  getters: {
    STRONG_JS(state) {
      return state.strong_js
    },
    MIDDLE_JS(state) {
      return state.middle_js
    },
    LIGHT_JS(state) {
      return state.light_js
    }
  },

  mutations: {
    SET_STRONG_JS_TO_STATE: (state, data) => {
      const arr = []
      for (const key in data) {
        const item = {
          id: key,
          answer: data[key].answer,
          question: data[key].question,
        };
        arr.push(item);
      }
      state.strong_js = arr
    },
    SET_MIDDLE_JS_TO_STATE: (state, data) => {
      const arr = []
      for (const key in data) {
        const item = {
          id: key,
          answer: data[key].answer,
          question: data[key].question,
        };
        arr.push(item);
      }
      state.middle_js = arr
    },

    SET_LIGHT_JS_TO_STATE: (state, data) => {
      const arr = []
      for (const key in data) {
        const item = {
          id: key,
          answer: data[key].answer,
          question: data[key].question,
        };
        arr.push(item);
      }
      state.light_js = arr
    },

  },

  actions: {
    GET_STRONG_JS_TEST_FROM_API({commit}) {
      return axios(`${apiUrl}test/strongjs.json`, {
        method: "GET"
      }).then((tests) => {
        commit('SET_STRONG_JS_TO_STATE', tests.data);
        return tests;
      }).catch((error) => {
        console.log(error);
        return error;
      })
    },

    GET_MIDDLE_JS_TEST_FROM_API({commit}) {
      return axios(`${apiUrl}test/middlejs.json`, {
        method: "GET"
      }).then((tests) => {
        commit('SET_MIDDLE_JS_TO_STATE', tests.data);
        return tests;
      }).catch((error) => {
        console.log(error);
        return error;
      })
    },

    GET_LIGHT_JS_TEST_FROM_API({commit}) {
      return axios(`${apiUrl}test/lightjs.json`, {
        method: "GET"
      }).then((tests) => {
        commit('SET_LIGHT_JS_TO_STATE', tests.data);
        return tests;
      }).catch((error) => {
        console.log(error);
        return error;
      })
    },

  },

  modules: {
  }

})
