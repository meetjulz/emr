import type { TGender, TSuffix } from '~/shims/index'

// User
export interface IUser {
  id: string
  firstName: string
  middleName: string
  lastName: string
  suffix?: TSuffix
  birthDate: string
  gender: TGender
  username: string
  email: string
  phoneNumber: string
}

// Menu
export interface IMenu {
  icon: string
  title: string
  to: string
  subMenus?: IMenu[]
}
