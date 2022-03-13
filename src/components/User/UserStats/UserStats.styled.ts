import styled from 'styled-components'
import { Caption, Text } from '@vkontakte/vkui'

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(89px, 120px));
  grid-gap: 5px;
  text-align: center;
`

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  padding: 8px;
  border-radius: 4px;
`

export const StatsValue = styled(Text)`
  font-size: 20px;
  color: var(--text_link);
`

export const StatsCaption = styled(Caption)`
  margin-top: 8px;
  font-size: 12px;
`
