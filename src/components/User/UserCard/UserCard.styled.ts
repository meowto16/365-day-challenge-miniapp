import styled from 'styled-components'

import { IconButton as IconButtonUi } from '@vkontakte/vkui'

export const Card = styled.div`
  position: relative;
  padding: 16px 0;
  border: 1px solid #eee;
  border-radius: 5px;
`

export const InfoWrapper = styled.div`
  padding-right: 40px;
`

export const ChooserWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  height: 40px;
`

export const ChildrenWrapper = styled.div`
  margin-top: 16px;
`

export const IconButton = styled(IconButtonUi)`
  color: var(--dynamic_blue);
`
