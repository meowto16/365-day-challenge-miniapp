import React from 'react'
import { Panel, PanelHeader, Title } from '@vkontakte/vkui'

import PanelEnum from '../enum/Panel.enum'

const SettingsPanel: React.VFC = () => {
  return (
    <Panel id={PanelEnum.SETTINGS}>
      <PanelHeader>Настройки</PanelHeader>
      <Title level="1">Страница настроек</Title>
    </Panel>
  )
}

export default SettingsPanel