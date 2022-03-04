import React from 'react'
import {
  View,
  AppRoot,
  useAdaptivity,
  PanelHeader,
  SplitLayout,
  SplitCol,
  Panel,
  ViewWidth,
  Group,
  SimpleCell,
  Header
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'

const App = () => {
  const { viewWidth } = useAdaptivity()

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                <SimpleCell>Hello</SimpleCell>
                <SimpleCell>World</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
