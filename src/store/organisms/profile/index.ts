import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { ProfileState, PROFILE_INIT_VALUE } from './types'
import { RootState } from '~/store/types'

export const state: ProfileState = {
  user: PROFILE_INIT_VALUE
}

const namespaced: boolean = true

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
