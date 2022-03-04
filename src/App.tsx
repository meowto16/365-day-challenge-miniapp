import React, { useState, useEffect, MouseEventHandler } from 'react'
import bridge, { UserInfo } from '@vkontakte/vk-bridge'
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'

import Home from './panels/Home'
import Persik from './panels/Persik'

const App = () => {
  const [activePanel, setActivePanel] = useState('home')
  const [fetchedUser, setUser] = useState<UserInfo | null>(null)
  const [popout, setPopout] = useState<React.ReactNode | null>(<ScreenSpinner size='large' />)

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme')
        // @ts-ignore
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light'
        document.body.attributes.setNamedItem(schemeAttribute)
      }
    })
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo')
      setUser(user)
      setPopout(null)
    }
    fetchData()
  }, [])

  const go: MouseEventHandler<HTMLElement> = (e) => {
    const to = e.currentTarget.dataset.to

    if (to) {
      setActivePanel(to)
    }
  }

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel} popout={popout}>
          <Home id='home' fetchedUser={fetchedUser} go={go} />
          <Persik id='persik' go={go} />
        </View>
      </AppRoot>
    </AdaptivityProvider>
  )
}

export default App
