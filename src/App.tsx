import React from 'react'
import {
  AppRoot,
  ConfigProvider,
  PanelHeader,
  SplitCol,
  SplitLayout,
  useAdaptivity,
  useAppearance,
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
  const appearance = useAppearance()

  return (
    <AppRoot>
      <ConfigProvider appearance={appearance} webviewType={WebviewType.VKAPPS}>
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
