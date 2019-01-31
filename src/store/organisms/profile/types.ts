export interface User {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export interface ProfileState {
  user: User
}

export const PROFILE_INIT_VALUE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}
