import React from 'react'
import {
  Group, Header,
  Panel,
  PanelHeader, SimpleCell
} from '@vkontakte/vkui'

import {
  Icon28PaletteOutline,
  Icon28HieroglyphCharacterOutline,
  Icon28Notifications,
  Icon28UserOutline,
  Icon28MailOutline, Icon28SmileOutline
} from '@vkontakte/icons'

import PanelEnum from '../enum/Panel.enum'

const SettingsPanel: React.VFC = () => {
  return (
    <Panel id={PanelEnum.SETTINGS}>
      <PanelHeader>Настройки</PanelHeader>

      <Group separator="auto">
        <Header>Меню</Header>
        <SimpleCell before={<Icon28UserOutline />} indicator="Киршин М." expandable>
          Аккаунт
        </SimpleCell>
        <SimpleCell before={<Icon28SmileOutline />} indicator="Не установлен" expandable>
          Статус
        </SimpleCell>
        <SimpleCell before={<Icon28Notifications />} indicator="Включены" expandable>
          Уведомления
        </SimpleCell>
      </Group>

      <Group>
        <Header>Настройки системы</Header>
        <SimpleCell
          before={<Icon28HieroglyphCharacterOutline />}
          indicator="Русский"
          expandable
        >
          Язык
        </SimpleCell>
        <SimpleCell
          before={<Icon28PaletteOutline />}
          indicator="Светлая"
          expandable
        >
          Тема
        </SimpleCell>
      </Group>

      <Group separator="hide">
        <Header>Поддержка</Header>
        <SimpleCell
          before={<Icon28MailOutline />}
          expandable
        >
          Написать разработчику
        </SimpleCell>
      </Group>
    </Panel>
  )
}

export default SettingsPanel
