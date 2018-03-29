import React from 'react'
import { Link, withRouter, matchPath } from 'react-router-dom'
import { Motion, spring } from 'react-motion'
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
    console.log(mouseX)
    const { latentMenuWidth, activeMenuWidth } = sVariables
    const latentWidth = pixelsToNumber(latentMenuWidth),
      activeWidth = pixelsToNumber(activeMenuWidth)
    const borderWidth = activeWidth - latentWidth
    const widthDifference = activeWidth - latentWidth

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
        {/* <Border width={borderWidth} active={active} /> */}
        <Motion defaultStyle={{ open: 0 }} style={{ open: spring(1 * active) }}>
          {({ open }) => {
            const width = latentWidth + open * widthDifference
            return (
              <div
                className={s['display']}
                style={{
                  width: width,
                  boxShadow: `0 0 ${mouseX / 2}px 0 rgba(0,0,0,.8)`
                }}
              >
                <div className={s['logo-container']}>
                  <Link to={coverUrl}>
                    <Logo className={s['logo']} open={open} />
                  </Link>
                </div>
                <Nav
                  links={navLinks}
                  currentPageIdx={currentLinkIdx}
                  open={open}
                />
                <Social open={open} />
                <Mailing open={open} />
                <Footer links={footerLinks} open={open} />
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
