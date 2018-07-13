import React from 'react'
import TeamContext from './team-context'
import TeamManager from './team-manager'
import injectionWrap from 'modules/injection-wrap'

const inject = injectionWrap.bind(null, TeamContext.Consumer)

const Team = {
  TeamManager,
  inject
}

export default Team
