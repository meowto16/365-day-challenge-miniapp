import React from 'react'

import styled, { StyledComponent } from 'styled-components'
import { Caption, CaptionProps, Text, TextProps } from '@vkontakte/vkui'

export interface UserStatsStyled {
  StatsGrid: StyledComponent<'div', any>
  StatsItem: StyledComponent<'div', any>
  StatsValue: StyledComponent<React.FC<TextProps>, any>
  StatsCaption: StyledComponent<React.FC<CaptionProps>, any>
}

export const horizontal: UserStatsStyled = {
  StatsGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(89px, 120px));
    grid-gap: 5px;
    text-align: center;
  `,
  StatsItem: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 4px;
  `,
  StatsValue: styled(Text)`
    font-size: 20px;
    color: var(--text_link);
  `,
  StatsCaption: styled(Caption)`
    margin-top: 8px;
    font-size: 12px;
  `
}

export const minified: UserStatsStyled = {
  StatsGrid: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(89px, 240px));
    grid-gap: 10px;
    text-align: center;
  `,
  StatsItem: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 4px;
  `,
  StatsValue: styled(Text)`
    font-size: 20px;
    color: var(--text_link);
  `,
  StatsCaption: styled(Caption)`
    margin-top: 8px;
    font-size: 12px;
  `
}
