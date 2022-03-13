import React from 'react'
import { View, Panel } from '@vkontakte/vkui'

import ProfilePanel from './panels/Profile.panel'
import ChallengersPanel from './panels/Challengers.panel'
import SettingsPanel from './panels/Settings.panel'

import { useScreenContext } from './Screen.context'

import PanelEnum from './enum/Panel.enum'

const Screen = () => {
  const { activeScreen: activePanel } = useScreenContext()

  return (
    <View activePanel={activePanel}>
      <Panel id={PanelEnum.PROFILE} children={<ProfilePanel />} />
      <Panel id={PanelEnum.CHALLENGERS} children={<ChallengersPanel />} />
      <Panel id={PanelEnum.SETTINGS} children={<SettingsPanel />} />
    </View>
  )
}

export default Screen
