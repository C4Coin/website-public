import React from 'react'

import s from './index.scss'
const foreground = require('assets/graphics/discord/foreground.complex.svg')
const background = require('assets/graphics/discord/background.complex.svg')
const middleground = require('assets/graphics/discord/middleground.complex.svg')
const bot = require('assets/graphics/discord/bot.complex.svg')

export default function Discord(props) {
  return (
    <div {...props}>
      <img src={background} className={s['background']} />
      <img src={middleground} className={s['middleground']} />
      <img src={foreground} alt="" className={s['foreground']} />
      <img src={bot} className={s['bot']} />
    </div>
  )
}
