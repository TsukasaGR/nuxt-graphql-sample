import { ActionTree } from 'vuex'
import { User, ProfileState } from './types'
import { RootState } from '~/store/types'

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): void {
    const payload: User = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'sample@example.com',
      phone: '090-0000-0000'
    }
    commit('setProfile', payload)
  }
}
