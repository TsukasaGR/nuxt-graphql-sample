import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '~/store/types'
import { profile } from './organisms/profile/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    profile
  }
}

const createStore = () => {
  return new Vuex.Store<RootState>(store)
}

export default createStore
