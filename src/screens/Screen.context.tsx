import { createContext, FC, useContext, useState } from 'react'
import PanelEnum from './enum/Panel.enum'

type ScreenContextValue = {
    activeScreen: PanelEnum
    goToScreen: (screen: PanelEnum) => void
}

const ScreenContext = createContext<ScreenContextValue>({
  activeScreen: PanelEnum.PROFILE,
  goToScreen: () => {}
})

const ScreenContextProvider: FC = ({ children }) => {
  const [activeScreen, goToScreen] = useState<PanelEnum>(PanelEnum.CHALLENGERS)

  return (
    <ScreenContext.Provider value={{ activeScreen, goToScreen }}>
      {children}
    </ScreenContext.Provider>
  )
}

const useScreenContext = () => useContext(ScreenContext)

export default ScreenContextProvider

export { useScreenContext }
