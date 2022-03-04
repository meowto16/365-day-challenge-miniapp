import React from 'react'
import { render } from 'react-dom'
import bridge from '@vkontakte/vk-bridge'
import App from './App'

bridge.send('VKWebAppInit')

render(<App />, document.getElementById('root'))
process.env.NODE_ENV === 'development' && import('./eruda')