import React from 'react'
import { Placeholder, Text } from '@vkontakte/vkui'

import { Icon56FileBrokenOutline } from '@vkontakte/icons'

import * as S from './AppErrorBoundary.styled'

export interface AppErrorBoundaryProps {}
export interface AppErrorBoundaryState {
  hasError: boolean;
  error: Error | null
}

class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  constructor(props: AppErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.ErrorContainer>
          <Placeholder icon={<Icon56FileBrokenOutline />}>
            <Text weight="regular">Произошла непоправимая ошибка. Перезапустите приложение позже</Text>
          </Placeholder>
        </S.ErrorContainer>
      )
    }

    return this.props.children
  }
}

export default AppErrorBoundary
