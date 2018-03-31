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
const { bpTabletSmall } = appStyleVariables
const latentWidth = pixelsToNumber(latentMenuWidth),
  activeWidth = pixelsToNumber(activeMenuWidth)

const activationPoint = 70
const defaultRipple = { rippleWidth: 0, rippleY: 0 }

class Menu extends React.Component {
  constructor() {
    super()

    this.state = {
      active: false,
      height: undefined,
      width: undefined,
      ...defaultRipple
    }

    this.setupMeasuring = this.setupMeasuring.bind(this)
    this.menuPullActivity = this.menuPullActivity.bind(this)
    this.exitMenu = this.exitMenu.bind(this)
  }

  exitMenu() {
    this.setState({ active: false })
  }

  menuPullActivity({ nativeEvent }) {
    if (this.state.active) return
    const { offsetX: x, offsetY: y } = nativeEvent

    if (x <= activationPoint) {
      this.setState({
        active: true,
        rippleWidth: 0,
        rippleY: y
      })
    } else {
      // The interactiveZoneWidth can be set to any arbitrary number
      // Greater than the activationPoint and less than width of the svg
      // (active-menu-width - latent-Menu-Width + 2)
      const interactiveZoneWidth = activationPoint * 2
      const distanceIn = Math.max(interactiveZoneWidth - x, 0)
      const pullZoneWidth = interactiveZoneWidth - activationPoint
      const completion = 1 - (pullZoneWidth - distanceIn) / pullZoneWidth
      const rippleWidth = completion * activationPoint

      this.setState({
        rippleWidth,
        rippleY: y
      })
    }
  }

  setupMeasuring(container) {
    if (container === null) return

    this.measureNewSize = this.measureContainer.bind(this, container)
    this.measureNewSize()
    window.addEventListener('resize', this.measureNewSize)
  }

  measureContainer(container) {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.measureNewSize)
  }

  isMobile() {
    return this.state.width < bpTabletSmall
  }

  render() {
    const {
      coverUrl,
      navLinks,
      footerLinks,
      location: { pathname }
    } = this.props

    const { active, rippleWidth, rippleY, height, width } = this.state

    // Calculate the size of the menu and interactive border zone
    const widthDifference = activeWidth - latentWidth
    const interactiveBorderWidth = widthDifference + 2

    const ripple = {
      rippleWidth: spring(rippleWidth),
      rippleY: spring(rippleY)
    }

    // Get the Index of the currently active link
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
              onMouseLeave={this.exitMenu}
              onMouseMove={this.menuPullActivity}
              ref={this.setupMeasuring}
            >
              <div className={s['shader']} />
              <Motion defaultStyle={defaultRipple} style={ripple}>
                {rippleInterpolation => (
                  <Border
                    width={interactiveBorderWidth}
                    height={height}
                    open={open}
                    {...rippleInterpolation}
                  />
                )}
              </Motion>
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
