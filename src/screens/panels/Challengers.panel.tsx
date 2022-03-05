import React from 'react'
import { Panel, PanelHeader, Title } from '@vkontakte/vkui'

import PanelEnum from '../enum/Panel.enum'

const ChallengersPanel: React.VFC = () => {
  return (
    <Panel id={PanelEnum.CHALLENGERS}>
      <PanelHeader>Участники</PanelHeader>
      <Title level="1">Страница участников</Title>
    </Panel>
  )
}

export default ChallengersPanel