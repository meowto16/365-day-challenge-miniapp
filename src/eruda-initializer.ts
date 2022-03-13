// @ts-nocheck
import * as eruda from 'eruda'
import * as erudaCode from 'eruda-code'
import * as erudaDom from 'eruda-dom'

eruda.init()
eruda.position({ x: 80, y: 80 })
eruda.add(erudaCode)
eruda.add(erudaDom)

export default eruda
