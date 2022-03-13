import React from 'react'
import {
  AppRoot,
  ConfigProvider,
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  ViewWidth,
  WebviewType
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import ScreenContext from 'screens/Screen.context'
import Screen from './screens/Screen'
import Navigation from 'screens/components/Navigation'
import AppErrorBoundary from './components/Error/AppErrorBoundary'

const App = () => {
  const { viewWidth } = useAdaptivity()

  return (
    <AppRoot>
      <ConfigProvider appearance="light" webviewType={WebviewType.VKAPPS}>
        <AppErrorBoundary>
          <SplitLayout header={<PanelHeader separator={false} />}>
            <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
              <ScreenContext>
                <Screen />
                <Navigation />
              </ScreenContext>
            </SplitCol>
          </SplitLayout>
        </AppErrorBoundary>
      </ConfigProvider>
    </AppRoot>
  )
}

export default App
