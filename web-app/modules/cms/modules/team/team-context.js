import React from 'react'
import STATUS from 'modules/cms/status'

const TeamContext = React.createContext({
  members: [],
  validationStatus: STATUS.READY
})

export default TeamContext
