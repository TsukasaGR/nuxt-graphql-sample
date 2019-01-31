import { MutationTree } from 'vuex'
import { ProfileState, User } from './types'

export const mutations: MutationTree<ProfileState> = {
  setProfile(state: ProfileState, payload: User) {
    state.user = payload
  }
}
