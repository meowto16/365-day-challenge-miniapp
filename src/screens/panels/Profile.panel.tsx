import React from 'react'
import {
  Group,
  Header,
  Panel,
  PanelHeader,
  PullToRefresh,
  Banner,
  Button, RichCell, Avatar, HorizontalCell, InitialsAvatar, InitialsAvatarProps, HorizontalScroll, Caption
} from '@vkontakte/vkui'

import PanelEnum from '../enum/Panel.enum'
import useRefreshProfile from '../../hooks/useRefreshProfile'

const MOCKED_STATS: { id: number; value: number; desc: React.ReactElement; gradientColor: InitialsAvatarProps['gradientColor']}[] = [
  { id: 1, value: 71, desc: <>Текущий стрик</>, gradientColor: 'green' },
  { id: 2, value: 6.82, desc: <>В среднем за день</>, gradientColor: 'violet' },
  { id: 3, value: 484, desc: <>Всего контрибьютов</>, gradientColor: 'blue' },
  { id: 4, value: 0, desc: <>Дней пропущено</>, gradientColor: 'red' },
]

const ProfilePanel: React.VFC = () => {
  const { handleRefresh, isRefreshing } = useRefreshProfile()

  return (
    <Panel id={PanelEnum.PROFILE}>
      <PanelHeader>Профиль</PanelHeader>
      <PullToRefresh onRefresh={handleRefresh} isFetching={isRefreshing}>
        <Group separator="hide">
          <RichCell 
            disabled 
            multiline 
            before={<Avatar size={72} src="/images/mocked-avatar.jpeg" />}
            text="Frontend разработчик"
            caption="VK (VKO-1)"
          >
              Киршин Максим
          </RichCell>
        </Group>
        <Group separator="hide">
          <Header mode="secondary">Статистика</Header>
          <HorizontalScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(95px, 130px))', textAlign: 'center' }}>
              {MOCKED_STATS.map(stat => (
                <HorizontalCell size="m" key={stat.id} disabled>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingRight: '16px' }}>
                    <InitialsAvatar size={56} gradientColor={stat.gradientColor} style={{ margin: '0 auto' }}>
                      {stat.value}
                    </InitialsAvatar>
                    <Caption weight="regular" level="2" style={{ marginTop: '12px' }}>{stat.desc}</Caption>
                  </div>
                </HorizontalCell>
              ))}
            </div>
          </HorizontalScroll>
        </Group>
        <Group>
          <Header mode="secondary">Прогресс</Header>
        </Group>
        <Group>
          <Banner
            mode="image"
            header="Мои достижения"
            subheader="Разблокировано 9 из 36"
            background={
              <div
                style={{
                  backgroundColor: '#65c063',
                  backgroundImage: 'url(/images/achievements-image.jpeg)',
                  backgroundPosition: 'right bottom',
                  backgroundSize: 320,
                  backgroundRepeat: 'no-repeat',
                }}
              />
            }
            actions={<Button mode="overlay_primary">Подробнее</Button>}
          />
        </Group>
      </PullToRefresh>
    </Panel>
  )
}

export default ProfilePanel