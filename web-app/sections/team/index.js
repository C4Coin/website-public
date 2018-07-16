import React from 'react'
import PropTypes from 'prop-types'
import WebsitePropTypes from 'utils/website-prop-types'
import formatTeamData from './utils/format-team-data'
import teamData from 'modules/cms/modules/team'
import Page from 'components/page'
import TopFoundersDisplay from './sections/top-founders-display'
import GeneralFoundersDisplay from './sections/general-founders-display'
import TeamMemberDisplay from './sections/team-member-display'

import environmentQuote from 'assets/graphics/environment-quote.complex.svg'
import s from './index.scss'

const quote = `we're trying to reward people for protecting the environemnt`

Team.propTypes = {
  founders: PropTypes.arrayOf(WebsitePropTypes.member).isRequired,
  team: PropTypes.arrayOf(WebsitePropTypes.member).isRequired
}

function Team({ founders, team, ...rest }) {
  return (
    <Page>
      <div className={s['container']}>
        <h2 className={s['founders-title']}>Founders</h2>
        {founders.length > 2 && (
          <TopFoundersDisplay
            founderOne={founders[0]}
            founderTwo={founders[1]}
          />
        )}
        <div className={s['quote-container']}>
          <img
            src={environmentQuote}
            alt={quote}
            className={s['environment-quote']}
          />
        </div>

        <GeneralFoundersDisplay founders={founders.slice(2)} />
        <h2 className={s['team-title']}>Team</h2>
        <TeamMemberDisplay members={team} />
      </div>
    </Page>
  )
}

export default teamData.inject(Team, formatTeamData)
