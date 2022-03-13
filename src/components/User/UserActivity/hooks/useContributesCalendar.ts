import { useMemo } from 'react'

import startOfWeek from 'date-fns/startOfWeek'
import addDays from 'date-fns/addDays'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import format from 'date-fns/format'

import {
  ContributesCalendarItem,
  ContributesMap,
  FormattedDate,
  UserActivityItem
} from '../UserActivity.types'
import { getContributesPlural } from '../../../../utils/plurals/contributes'

const COLUMNS = 53
const ROWS = 7
const CALENDAR_LENGTH = COLUMNS * ROWS

const DATE_FORMAT = 'dd-MM-yyyy'
const MONDAY = 1

/**
 * Возвращает отсортированные контрибьюты для календаря
 * Дополняет пустыми ячейками, если контрибьютов меньше 365
 * @param contributes
 */
const useContributesCalendar = (contributes: UserActivityItem[]): ContributesCalendarItem[] => {
  return useMemo<ContributesCalendarItem[]>(() => {
    const start = startOfWeek(contributes?.[0]?.date || new Date().setHours(2, 0, 0, 0), { weekStartsOn: MONDAY })
    const end = addDays(start, CALENDAR_LENGTH - 1)

    const yearWeekIntervals = eachWeekOfInterval({
      start: new Date(start.setHours(2, 0, 0, 0)),
      end: new Date(end.setHours(2, 0, 0, 0))
    }, { weekStartsOn: MONDAY })

    const contributesMap = contributes.reduce<ContributesMap>((acc, contribute) => {
      acc[format(contribute.date, DATE_FORMAT)] = contribute.contributesCount
      return acc
    }, {})

    const weekDays = yearWeekIntervals.map(weekStart => {
      return eachDayOfInterval({ start: weekStart, end: addDays(weekStart, 6) })
    })

    const calendar: ContributesCalendarItem[] = Array.from({ length: CALENDAR_LENGTH }, (_, idx) => {
      const week = idx % COLUMNS
      const day = Math.floor(idx / COLUMNS)

      const date = weekDays[week][day]
      const dateFormatted: FormattedDate = format(date, DATE_FORMAT)
      const contributesCount = contributesMap[dateFormatted] || 0

      return {
        id: dateFormatted,
        date,
        contributesCount,
        dateFormatted,
        tooltipText: getContributesPlural(contributesCount)
      }
    })

    return calendar
  }, [contributes])
}

export default useContributesCalendar
