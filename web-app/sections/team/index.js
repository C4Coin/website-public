import React from 'react'
import TeamData from 'modules/team-data'
import Page from 'components/page'
import TopFoundersDisplay from './sections/top-founders-display'
import GeneralFoundersDisplay from './sections/general-founders-display'
import TeamMemberDisplay from './sections/team-member-display'

import s from './index.scss'

function Team({ founders, team, ...rest }) {
  return (
    <Page>
      <div className={s['container']}>
        <h2 className={s['founders-title']}>Founders</h2>
        <TopFoundersDisplay founderOne={founders[0]} founderTwo={founders[1]} />
        <GeneralFoundersDisplay founders={founders.slice(2)} />
        <h2 className={s['team-title']}>Team</h2>
        <TeamMemberDisplay members={team} />
      </div>
    </Page>
  )
}

export default TeamData.inject(Team)
