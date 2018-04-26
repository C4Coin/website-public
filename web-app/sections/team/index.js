import React from 'react'
import TeamData from 'modules/team-data'
import Page from 'components/page'
import TopFoundersDisplay from './sections/top-founders-display'
import GeneralFoundersDisplay from './sections/general-founders-display'

import s from './index.scss'

function Team({ founders, team, ...rest }) {
  return (
    <Page>
      <div className={s['container']}>
        <h2>Founders</h2>
        <TopFoundersDisplay founderOne={founders[0]} founderTwo={founders[1]} />
        <GeneralFoundersDisplay founders={founders.slice(2)} />
      </div>
    </Page>
  )
}

export default TeamData.inject(Team)
