import React from 'react'
import {
  Div,
  Group,
  Panel,
  PanelHeader, PanelHeaderButton
} from '@vkontakte/vkui'

import PanelEnum from '../enum/Panel.enum'
import UserCard from '../../components/User/UserCard/UserCard'
import UserStats from '../../components/User/UserStats/UserStats'
import { Icon24UserAddOutline } from '@vkontakte/icons'

const ChallengersPanel: React.VFC = () => {
  return (
    <Panel id={PanelEnum.CHALLENGERS}>
      <PanelHeader left={(
        <PanelHeaderButton>
          <Icon24UserAddOutline />
        </PanelHeaderButton>
      )}>Участники</PanelHeader>
      <Div>
        {Array.from({ length: 4 }, (_, i) => (
          <Group separator="hide" key={i}>
            <UserCard>
              <UserStats
                currentStreak={72}
                averageContributes={6.82}
                totalContributes={482}
                daysMissed={0}
                variant="minified"
              />
            </UserCard>
          </Group>
        ))}
      </Div>
    </Panel>
  )
}

export default ChallengersPanel
