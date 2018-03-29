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

const { latentMenuWidth, activeMenuWidth } = sVariables
const latentWidth = pixelsToNumber(latentMenuWidth),
  activeWidth = pixelsToNumber(activeMenuWidth)

const activationPoint = 120

class Menu extends React.Component {
  constructor() {
    super()

    this.state = {
      active: false,
      mouseX: undefined,
      mouseY: undefined,
      height: undefined
    }

    this.setupMeasuring = this.setupMeasuring.bind(this)
  }
  exit() {
    this.setState({ active: false })
  }

  setMouseCoordinates({ nativeEvent }) {
    if (this.state.active) return

    const { offsetX: x, offsettY: y } = nativeEvent

    const isActive = x <= activationPoint

    this.setState({
      active: isActive,
      mouseX: !isActive ? x : undefined,
      mouseY: y
    })
  }

  setupMeasuring(container) {
    if (container === null) return

    this.measureNewSize = this.measureContainer.bind(this, container)
    this.measureNewSize()
    window.addEventListener('resize', this.measureNewSize)
  }

  measureContainer(container) {
    this.setState({
      height: container.offsetHeight
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.measureNewSize)
  }

  render() {
    const {
      coverUrl,
      navLinks,
      footerLinks,
      location: { pathname }
    } = this.props

    const { active, mouseX, mouseY, height } = this.state

    const widthDifference = activeWidth - latentWidth
    const borderWidth = widthDifference + 2

    let rippleWidth = 0
    if (mouseX) {
      const interactiveZoneWidth = borderWidth - activationPoint
      const distanceIn = borderWidth - mouseX
      const completion =
        1 - (interactiveZoneWidth - distanceIn) / interactiveZoneWidth
      rippleWidth = completion * activationPoint
    }

    const currentLinkIdx = navLinks.findIndex(
      ({ url }) => matchPath(pathname, { path: url }) != null
    )

    return (
      <Motion defaultStyle={{ open: 0 }} style={{ open: spring(1 * active) }}>
        {({ open }) => {
          const width = latentWidth + open * widthDifference
          return (
            <div
              className={s['container']}
              onMouseLeave={this.exit.bind(this)}
              onMouseMove={this.setMouseCoordinates.bind(this)}
              ref={this.setupMeasuring}
            >
              <div className={s['shader']} />
              <Border
                width={borderWidth}
                height={height}
                open={open}
                rippleY={mouseY}
                rippleWidth={rippleWidth}
              />
              <div
                className={s['display']}
                style={{
                  width: width
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
            </div>
          )
        }}
      </Motion>
    )
  }
}

Menu.propTypes = {
  coverUrl: PropTypes.string,
  navLinks: PropTypes.arrayOf(websitePropTypes.link),
  footerLinks: PropTypes.arrayOf(websitePropTypes.link)
}

export default withRouter(Menu)
