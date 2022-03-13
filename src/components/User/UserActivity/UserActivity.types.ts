export type FormattedDate = string
export type FormattedContributes = string

export type UserActivityItem = {
  date: Date;
  contributesCount: number;
}

export type ContributesCalendarItem = UserActivityItem & {
  id: string
  dateFormatted: FormattedDate
  tooltipText: FormattedContributes
}

export type ContributesMap = Record<FormattedDate, UserActivityItem['contributesCount']>
