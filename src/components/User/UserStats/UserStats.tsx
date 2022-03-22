import React, { memo, useMemo } from 'react'
import {
  HorizontalCell,
  HorizontalScroll, InitialsAvatarProps
} from '@vkontakte/vkui'

import * as StyledVariants from './UserStats.styled'
import CountUp from 'react-countup'

type UserStatsItem = {
  id: string
  value: number
  desc: React.ReactElement
  gradientColor: InitialsAvatarProps['gradientColor']
}

export interface UserStatsProps {
  currentStreak: number
  averageContributes: number
  totalContributes: number
  daysMissed: number
  variant?: 'horizontal' | 'minified'
}

const UserStats: React.VFC<UserStatsProps> = ({
  currentStreak,
  averageContributes,
  totalContributes,
  daysMissed,
  variant = 'horizontal'
}) => {
  const S = useMemo(() => {
    return StyledVariants[variant]
  }, [variant])

  const stats: UserStatsItem[] = useMemo(() => {
    return [
      { id: 'current-streak', value: currentStreak, desc: <>Текущий стрик</>, gradientColor: 'green' },
      { id: 'average-contributes', value: averageContributes, desc: <>Среднее за день</>, gradientColor: 'violet' },
      { id: 'total-contributes', value: totalContributes, desc: <>Всего коммитов</>, gradientColor: 'blue' },
      { id: 'days-missed', value: daysMissed, desc: <>Дней пропущено</>, gradientColor: 'red' },
    ]
  }, [currentStreak, averageContributes, totalContributes, daysMissed])

  return (
    <HorizontalScroll showArrows={false}>
      <HorizontalCell disabled style={{ maxWidth: 'unset' }}>
        <S.StatsGrid>
          {stats.map(stat => (
            <S.StatsItem key={stat.id}>
              <S.StatsValue weight="semibold">
                <CountUp
                  decimals={`${stat.value}`.split('.')[1]?.length || 0}
                  end={stat.value}
                  duration={1}
                />
              </S.StatsValue>
              <S.StatsCaption weight="regular" level="2">
                {stat.desc}
              </S.StatsCaption>
            </S.StatsItem>
          ))}
        </S.StatsGrid>
      </HorizontalCell>
    </HorizontalScroll>
  )
}

export default memo(UserStats)
