import React, { useCallback } from 'react'

import {
  Group,
  Header,
  Panel,
  PanelHeader,
  PullToRefresh
} from '@vkontakte/vkui'


import UserInfo from '../../components/User/UserInfo/UserInfo'
import UserStats from '../../components/User/UserStats'
import UserActivity from 'components/User/UserActivity'
import AchievementsBanner
  from '../../components/Banner/AchievementsBanner'

import PanelEnum from '../enum/Panel.enum'
import useRefreshProfile from '../../hooks/useRefreshProfile'

const ProfilePanel: React.VFC = () => {
  const { handleRefresh, isRefreshing } = useRefreshProfile()

  const handleAchievementsBannerClick = useCallback(() => {
    console.log('Achievements more click')
  }, [])

  return (
    <Panel id={PanelEnum.PROFILE}>
      <PanelHeader>Профиль</PanelHeader>
      <PullToRefresh onRefresh={handleRefresh} isFetching={isRefreshing}>
        <Group separator="hide">
          <UserInfo
            name="Киршин Максим"
            workAt="VK (VKO-1)"
            profession="Frontend-разработчик"
            avatar="/images/mocked-avatar.jpeg"
          />
        </Group>
        <Group separator="hide">
          <Header mode="secondary">Статистика</Header>
          <UserStats currentStreak={72} averageContributes={6.82} totalContributes={482} daysMissed={0} />
        </Group>
        <Group separator="hide">
          <Header mode="secondary">Прогресс</Header>
          <UserActivity contributes={[
            { date: new Date('2022/03/13'), contributesCount: 4 },
            { date: new Date('2022/03/14'), contributesCount: 2 },
            { date: new Date('2022/03/15'), contributesCount: 1 },
            { date: new Date('2022/03/16'), contributesCount: 12 },
            { date: new Date('2022/03/17'), contributesCount: 5 },
            { date: new Date('2022/03/18'), contributesCount: 4 },
            { date: new Date('2022/03/19'), contributesCount: 7 },
            { date: new Date('2022/03/20'), contributesCount: 20 },
            { date: new Date('2022/03/21'), contributesCount: 36 },
          ]} />
          <AchievementsBanner
            title="Мои достижения"
            totalAchievementsCount={36}
            unlockedAchievementsCount={9}
            onClick={handleAchievementsBannerClick}
          />
        </Group>
      </PullToRefresh>
    </Panel>
  )
}

export default ProfilePanel
