import React from 'react'
import STATUS from 'modules/cms/status'

const TimelineContext = React.createContext({
  events: [],
  validationStatus: STATUS.READY
})

export default TimelineContext
