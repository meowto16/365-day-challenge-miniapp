import { NavigationItem } from './types'
import PanelEnum from '../../enum/Panel.enum'

import {
  Icon56SettingsOutline,
  Icon56UserCircleOutline,
  Icon56UsersOutline
} from '@vkontakte/icons'

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { text: 'Участники', panel: PanelEnum.CHALLENGERS, Icon: Icon56UsersOutline },
  { text: 'Профиль', panel: PanelEnum.PROFILE, Icon: Icon56UserCircleOutline },
  { text: 'Настройки', panel: PanelEnum.SETTINGS, Icon: Icon56SettingsOutline }
]