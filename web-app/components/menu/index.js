import React from 'react'
import { Link, withRouter, matchPath } from 'react-router-dom'
import { Motion } from 'react-motion'
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
      mouseY: y
    })
  }

  render() {
    const {
      coverUrl,
      navLinks,
      footerLinks,
      location: { pathname }
    } = this.props

    const { active, mouseX, mouseY } = this.state
    const { latentMenuWidth, activeMenuWidth } = sVariables
    const borderWidth =
      pixelsToNumber(activeMenuWidth) - pixelsToNumber(latentMenuWidth)

    const currentLinkIdx = navLinks.findIndex(
      ({ url }) => matchPath(pathname, { path: url }) != null
    )

    return (
      <div
        className={s['container']}
        onMouseLeave={this.exit.bind(this)}
        onMouseMove={this.setMouseCoordinates.bind(this)}
      >
        <div className={s['shader']} />
        <Border width={borderWidth} active={active} />
        <Motion defaultStyle={{ d: 0 }} style={{ d: 1 * active }}>
          {({ d }) => {
            const widthDifference = activeMenuWidth - latentMenuWidth
            const width = latentMenuWidth + d * widthDifference
            return (
              <div className={s['display']} style={{ width: width }}>
                <Link to={coverUrl}>
                  <Logo className={`${s['logo']} ${active && s['active']}`} />
                </Link>
                <Nav
                  links={navLinks}
                  currentPageIdx={currentLinkIdx}
                  active={active}
                />
                <Social active={active} />
                <Mailing />
                <Footer links={footerLinks} active={active} />
              </div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

Menu.propTypes = {
  coverUrl: PropTypes.string,
  navLinks: PropTypes.arrayOf(websitePropTypes.link),
  footerLinks: PropTypes.arrayOf(websitePropTypes.link)
}

export default withRouter(Menu)
