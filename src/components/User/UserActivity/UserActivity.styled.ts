import styled from 'styled-components'
import { Div } from '@vkontakte/vkui'
import {
  CELL_GAP,
  CELL_WIDTH,
  DAYS_BAR_WIDTH
} from './UserActivity.constants'

export const ActivityContainer = styled(Div)`
  display: block;
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
`

export const ActivityChart = styled.div`
  display: block;
  margin-left: 20px;
`

interface ActivityDaysProps {
  $isSelectedItem: boolean;
}
export const ActivityDays = styled.div<ActivityDaysProps>`
  text-align: left;
  width: 18px;
  position: absolute;
  background: white;
  z-index: 10;
  left: ${DAYS_BAR_WIDTH}px;
  opacity: ${props => Number(!props.$isSelectedItem)};
  transition: 0.15s ease-in opacity;
  transition-delay: ${props => !props.$isSelectedItem ? '0.15s' : ''};

  :before {
    display: block;
    width: 18px;
    height: 24px;
    content: '';
    background: white;
  }
`

export const ActivityDaysItem = styled.div`
  display: flex;
  align-items: center;
  height: ${CELL_WIDTH + CELL_GAP}px;
  color: var(--text_subhead);
  text-transform: lowercase;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ActivityMonths = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 64px);
  grid-gap: 35px;
  margin-bottom: 6px;
`

export const ActivityMonthsItem = styled.div`
  display: inline-block;
  text-align: left;
  color: var(--text_subhead);
  font-size: 13px;
  text-transform: lowercase;
`

export const ActivityLines = styled.div`
  display: grid;
  grid-template-columns: repeat(53, ${CELL_WIDTH}px);
  grid-template-rows: repeat(7, ${CELL_WIDTH}px);
  grid-gap: ${CELL_GAP}px;
  position: relative;

  .Tooltip__content {
    box-shadow: none;
    border: 1px solid #eee;
  }

  .Tooltip__corner::before {
    background-image: url(/images/triangle-bordered.svg);
  }

  .Tooltip__corner::after {
    content: "";
    display: block;
    width: 20px;
    height: 8px;
    transform: translateY(-15px);
    background: white;

  }

  [data-popper-placement="top"] .Tooltip__corner::after {
    transform: translateY(15px);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  [data-popper-placement="bottom"] .Tooltip__corner::after {
    transform: translateY(-1px);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`

interface ActivityLinesItemProps {
  $contributesCount: number;
  $isActive: boolean;
}

export const ActivityLinesItem = styled.div<ActivityLinesItemProps>`
  cursor: pointer;
  width: ${CELL_WIDTH}px;
  height: ${CELL_WIDTH}px;
  border-radius: ${Math.round(CELL_WIDTH / 5)}px;
  box-shadow: ${props => !props.$contributesCount && !props.$isActive ? 'inset 0 0 2px 1px rgb(218, 226, 234)': ''};
  transition: 0.15s ease-in background;
  background: ${props => {
    if (props.$isActive) return 'var(--accent)'

    return !props.$contributesCount ? 'var(--background-content)' : '#65c063'
  }};
  opacity: ${({ $contributesCount }) => {
    if ($contributesCount === 0) return '1'
    if ($contributesCount >= 24) return '0.96'
    if ($contributesCount >= 18) return '0.84'
    if ($contributesCount >= 12) return '0.76'
    if ($contributesCount >= 6) return '0.64'
    if ($contributesCount >= 3) return '0.48'
    if ($contributesCount >= 1) return '0.32'
  }};
`

