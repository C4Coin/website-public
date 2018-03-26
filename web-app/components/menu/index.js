import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import websitePropTypes from 'utils/website-prop-types'
import mergeStyleVariables from 'utils/merge-style-variables'
import Logo from './components/logo'
import Nav from './components/nav'
import Social from './components/social'
import Mailing from './components/mailing'
import Footer from './components/footer'
import Border from './components/border'

import s from './index.scss'
import sVariables from '!!sass-variable-loader!./_variables.scss'
import appStyleVariables from '!!sass-variable-loader!style/_variables.scss'

const { pixelsToNumber } = mergeStyleVariables
const { silver } = appStyleVariables

class Menu extends React.Component {
  constructor() {
    super()

    this.state = {
      active: false
    }
  }

  exit() {
    this.setState({ active: false })
  }

  setMouseCoordinates({ nativeEvent }) {
    if (this.state.active) return

    const { offsetX: x, offsetY: y } = nativeEvent

    this.setState({
      active: x <= 120,
      mouseX: x,
      ouseY: y
    })
  }

  render() {
    const { coverUrl, navLinks, footerLinks } = this.props
    const active = true
    const { mouseX, mouseY } = this.state
    const { latentMenuWidth, activeMenuWidth } = sVariables
    const borderWidth =
      pixelsToNumber(activeMenuWidth) - pixelsToNumber(latentMenuWidth)

    const width = active ? activeMenuWidth : latentMenuWidth
    return (
      <div
        className={s['container']}
        onMouseLeave={this.exit.bind(this)}
        onMouseMove={this.setMouseCoordinates.bind(this)}
      >
        <div className={s['shader']} />
        <Border width={borderWidth} active={active} />
        <div className={s['display']} style={{ width: width }}>
          <Link to={coverUrl}>
            <Logo className={s['logo']} />
          </Link>
          <Nav links={navLinks} active={active} />
          <Social active={active} />
          <Mailing />
          <Footer links={footerLinks} />
        </div>
      </div>
    )
  }
}

Menu.propTypes = {
  coverUrl: PropTypes.string,
  navLinks: PropTypes.arrayOf(websitePropTypes.link),
  footerLinks: PropTypes.arrayOf(websitePropTypes.link)
}

export default Menu
