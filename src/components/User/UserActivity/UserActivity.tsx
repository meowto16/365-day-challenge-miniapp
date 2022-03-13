import React, { memo, useCallback, useState } from 'react'

import {
  Caption,
  HorizontalCell,
  HorizontalScroll, Tooltip, TooltipContainer
} from '@vkontakte/vkui'

import {
  USER_ACTIVITY_MONTHS,
  USER_ACTIVITY_DAYS, CELL_WIDTH
} from './UserActivity.constants'

import { FormattedDate, UserActivityItem } from './UserActivity.types'
import useContributesCalendar from './hooks/useContributesCalendar'

import * as S from './UserActivity.styled'

export interface UserActivityProps {
  contributes: UserActivityItem[]
}

const UserActivity: React.VFC<UserActivityProps> = ({ contributes }) => {
  const contributesCalendar = useContributesCalendar(contributes)
  const [activeItem, setActiveItem] = useState<FormattedDate | null>(null)

  const handleClickItem: React.MouseEventHandler<HTMLDivElement> = useCallback((event) => {
    event.stopPropagation()

    const target = event.currentTarget as HTMLDivElement
    const data = target.dataset.date as FormattedDate

    setActiveItem(data)
  }, [])

  const handleMouseOut = useCallback(() => setActiveItem(null), [])

  return (
    <S.ActivityContainer onMouseOut={handleMouseOut}>
      <S.ActivityDays $isSelectedItem={activeItem !== null}>
        {USER_ACTIVITY_DAYS.map(day => (
          <S.ActivityDaysItem key={day.id}>
            <Caption weight="regular" level="1">{day.value}</Caption>
          </S.ActivityDaysItem>
        ))}
      </S.ActivityDays>
      <HorizontalScroll scrollAnimationDuration={100}>
        <HorizontalCell disabled>
          <S.ActivityChart data-chart>
            <S.ActivityMonths>
              {USER_ACTIVITY_MONTHS.map(month => (
                <S.ActivityMonthsItem key={month.id}>
                  <Caption weight="regular" level="1">{month.value}</Caption>
                </S.ActivityMonthsItem>
              ))}
            </S.ActivityMonths>
            <S.ActivityLines>
              {contributesCalendar.map(day => (
                <TooltipContainer key={day.id}>
                  <Tooltip
                    offsetY={CELL_WIDTH / 2}
                    alignX="center"
                    alignY="top"
                    isShown={day.id === activeItem}
                    header={day.dateFormatted}
                    text={day.tooltipText}
                    mode="light">
                    <div data-date={day.id} onClick={handleClickItem}>
                      <S.ActivityLinesItem
                        $contributesCount={day.contributesCount}
                        $isActive={day.id === activeItem}
                      />
                    </div>
                  </Tooltip>
                </TooltipContainer>
              ))}
            </S.ActivityLines>
          </S.ActivityChart>
        </HorizontalCell>
      </HorizontalScroll>
    </S.ActivityContainer>
  )
}

export default memo(UserActivity)
