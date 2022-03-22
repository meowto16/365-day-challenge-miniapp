import {
  Avatar,
  SimpleCell,
  SplitCol,
  SplitLayout
} from '@vkontakte/vkui'
import React from 'react'

import * as S from './UserCard.styled'
import { Icon28MoreHorizontal } from '@vkontakte/icons'

export interface UserCardProps {
  avatar?: string

}

const UserCard: React.FC<UserCardProps> = ({ children }) => {
  return (
    <S.Card>
      <S.InfoWrapper>
        <SplitLayout>
          <SplitCol>
            <SimpleCell
              disabled
              before={
                <Avatar size={72} src={'/images/mocked-avatar.jpeg'} badge="online" />
              }
              description="Frontend-разработчик"
            >Киршин Максим</SimpleCell>
          </SplitCol>
        </SplitLayout>
      </S.InfoWrapper>
      <S.ChooserWrapper>
        <S.IconButton Component={Icon28MoreHorizontal} />
      </S.ChooserWrapper>
      {children && (
        <S.ChildrenWrapper>
          <SplitLayout>
            <SplitCol>
              <SplitLayout>
                {children}
              </SplitLayout>
            </SplitCol>
          </SplitLayout>
        </S.ChildrenWrapper>
      )}
    </S.Card>
  )
}

export default UserCard
