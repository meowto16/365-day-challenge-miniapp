import React, { memo } from 'react'
import { Banner, Button } from '@vkontakte/vkui'

import * as S from './AchievementsBanner.styled'

export interface AchievementsBannerProps {
  title?: string
  unlockedAchievementsCount: number
  totalAchievementsCount: number
  onClick: () => void
}

const AchievementsBanner: React.VFC<AchievementsBannerProps> = ({
  title = 'Достижения',
  totalAchievementsCount,
  unlockedAchievementsCount,
  onClick,
}) => {
  return (
    <Banner
      mode="image"
      header={title}
      subheader={`Разблокировано ${unlockedAchievementsCount} из ${totalAchievementsCount}`}
      background={<S.BannerBackground />}
      actions={<Button mode="overlay_primary" onClick={onClick}>Подробнее</Button>}
    />
  )
}

export default memo(AchievementsBanner)
