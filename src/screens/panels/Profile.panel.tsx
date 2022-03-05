import React from 'react'
import { Panel, PanelHeader, Title } from '@vkontakte/vkui'

import PanelEnum from '../enum/Panel.enum'

const ProfilePanel: React.VFC = () => {
  return (
    <Panel id={PanelEnum.PROFILE}>
      <PanelHeader>Профиль</PanelHeader>
      <Title level="1">Страница профиля</Title>
    </Panel>
  )
}

export default ProfilePanel