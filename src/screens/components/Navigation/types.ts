import { FC } from 'react'
import PanelEnum from '../../enum/Panel.enum'

export type NavigationItem = {
    Icon: FC<{ width?: number; height?: number; }>
    text: string
    panel: PanelEnum
}