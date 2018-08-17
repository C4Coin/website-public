import TimelineContext from './timeline-context'
import TimelineManager from './timeline-manager'
import injectionWrap from 'modules/injection-wrap'

const inject = injectionWrap.bind(null, TimelineContext.Consumer)

const Team = {
  TimelineManager,
  inject
}

export default Team
