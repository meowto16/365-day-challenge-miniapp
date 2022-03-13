import React, { memo } from 'react'
import { Avatar, RichCell } from '@vkontakte/vkui'

export interface UserInfoProps {
  avatar: string;
  profession: string;
  workAt: string;
  name: string;
}

const UserInfo: React.VFC<UserInfoProps> = ({ avatar, profession, workAt, name }) => {
  return (
    <RichCell
      disabled
      multiline
      before={<Avatar size={72} src={avatar} />}
      text={profession}
      caption={workAt}
    >
      {name}
    </RichCell>
  )
}

export default memo(UserInfo)
