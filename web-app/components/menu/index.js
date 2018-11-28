import React from 'react'
import { Link, withRouter, matchPath } from 'react-router-dom'
import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import camelcase from 'camelcase-keys'

import websitePropTypes from 'utils/website-prop-types'
import PointerTracker from 'modules/pointer-tracker'
import Icon from './components/icon'
import Logo from './components/logo'
import Nav from './components/nav'
import Social from './components/social'
import Mailing from './components/mailing'
import Footer from './components/footer'
import Border from './components/border'

import s from './style/index.scss'
import sVariables from './style/style.variables.scss'
import appStyleVariables from 'style/style.variables.scss'

const { $latentMenuWidth, $activeMenuWidth, $bpTall } = camelcase(
  sVariables.global
)
const { $bpTabletSmall } = camelcase(appStyleVariables.global)
const latentWidth = parseInt($latentMenuWidth)
const activeWidth = parseInt($activeMenuWidth)
const bpTall = parseInt($bpTall)
const mobileBreakpoint = parseInt($bpTabletSmall)

const activationPoint = 70
const defaultRipple = { rippleWidth: 0, rippleY: 0 }

const propTypes = {
  coverUrl: PropTypes.string,
  navLinks: PropTypes.arrayOf(websitePropTypes.link).isRequired,
  mailingLinks: PropTypes.arrayOf(websitePropTypes.link).isRequired,
  footerLinks: PropTypes.arrayOf(websitePropTypes.link).isRequired,
  location: ReactRouterPropTypes.location
}

class Menu extends React.Component {
  constructor() {
    super()

    this.state = {
      active: false,
      glued: false,
      refreshed: true,
      height: undefined,
      width: undefined,
      ...defaultRipple
    }

    this.setupMeasuring = this.setupMeasuring.bind(this)
    this.menuPullActivity = this.menuPullActivity.bind(this)
    this.exitMenu = this.exitMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.openMenu = this.openMenu.bind(this)
    this.toggleGlued = this.toggleGlued.bind(this)

    window.menu = this
  }

  exitMenu() {
    if (this.state.glued) return
    this.setState({
      active: false,
      refreshed: true
    })
  }

  closeMenu() {
    if (this.state.glued) return
    this.setState({ active: false })
  }

  openMenu() {
    if (this.state.glued) return
    this.setState({ active: true })
  }

  toggleGlued() {
    this.setState({ glued: !this.state.glued })
  }

  menuPullActivity({ offsetX: x, offsetY: y }) {
    const { active, refreshed } = this.state
    if (active || !refreshed) return

    if (x <= activationPoint) {
      this.setState({
        active: true,
        refreshed: false,
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
    return this.state.width < mobileBreakpoint
  }

  render() {
    const {
      coverUrl,
      navLinks,
      mailingLinks,
      footerLinks,
      location: { pathname }
    } = this.props

    const { active, rippleWidth, rippleY, height } = this.state

    // Calculate the size of the menu and interactive border zone
    const widthDifference = activeWidth - latentWidth
    const interactiveBorderWidth = widthDifference + 2

    const ripple = {
      rippleWidth: spring(rippleWidth),
      rippleY: spring(rippleY)
    }

    // Get the Index of the currently active link
    const currentLinkIdx = navLinks.findIndex(
      ({ url }) => matchPath(pathname, { path: url }) !== null
    )

    return (
      <Motion defaultStyle={{ open: 0 }} style={{ open: spring(1 * active) }}>
        {({ open }) => {
          const width = this.isMobile()
            ? `${open * 100}vw`
            : latentWidth + open * widthDifference - 2
          return (
            <div className={s['container']} ref={this.setupMeasuring}>
              {this.isMobile && (
                <div className={s['menu-icon-container']}>
                  <Icon className={s['menu-icon']} onClick={this.openMenu} />
                </div>
              )}
              <div className={s['shader']} />
              <Motion defaultStyle={defaultRipple} style={ripple}>
                {rippleInterpolation =>
                  !this.isMobile() && (
                    <Border
                      width={interactiveBorderWidth}
                      height={height}
                      open={open}
                      onPointerMove={this.menuPullActivity}
                      {...rippleInterpolation}
                    />
                  )
                }
              </Motion>
              <div
                className={s['window']}
                style={{ width: width }}
                onMouseEnter={this.openMenu}
              >
                <PointerTracker.PointerBlock
                  onLeave={this.exitMenu}
                  className={s['display']}
                >
                  <div className={s['logo-container']}>
                    <Link to={coverUrl} onClick={this.closeMenu}>
                      <Logo
                        className={s['logo']}
                        open={open * height <= bpTall ? 0 : 1}
                      />
                    </Link>
                  </div>
                  <Nav
                    links={navLinks}
                    currentPageIdx={currentLinkIdx}
                    open={open}
                    linkOnClick={this.closeMenu}
                  />
                  <Social open={open} />
                  <Mailing
                    open={open}
                    links={mailingLinks}
                    linkOnClick={this.closeMenu}
                  />
                  <Footer
                    links={footerLinks}
                    linkOnClick={this.closeMenu}
                    open={open}
                  />
                </PointerTracker.PointerBlock>
              </div>
            </div>
          )
        }}
      </Motion>
    )
  }
}

Menu.propTypes = propTypes

export default withRouter(Menu)
