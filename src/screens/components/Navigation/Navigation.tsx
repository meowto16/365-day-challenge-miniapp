import { Tabbar, TabbarItem } from '@vkontakte/vkui'
import React from 'react'

import { useScreenContext } from '../../Screen.context'

import { NAVIGATION_ITEMS } from './constants'

const Navigation: React.VFC = () => {
  const { activeScreen: activePanel, goToScreen } = useScreenContext()

  return (
    <Tabbar>
      {NAVIGATION_ITEMS.map(({ Icon, text, panel }) => (
        <TabbarItem
          key={panel}
          selected={activePanel === panel}
          onClick={() => goToScreen(panel)}
          text={text}
        >
          <Icon width={28} height={28} />
        </TabbarItem>
      ))}
    </Tabbar>
  )
}

export default Navigation