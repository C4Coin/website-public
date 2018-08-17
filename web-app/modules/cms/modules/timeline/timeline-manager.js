import React from 'react'
import TimelineContext from './timeline-context'
import sanity from 'utils/sanity'
import STATUS from '../../status'

class TimelineManager extends React.Component {
  constructor() {
    super()

    this.state = {
      phases: [],
      fetchStatus: STATUS.READY
    }

    this.dataReducer = this.dataReducer.bind(this)
  }

  insertPhase(phases, { title, number, milestones = [] }) {
    const position = phases.findIndex(e => e.number > number)
    if (position < 0) {
      return [...phases.slice(), { title, number, milestones }]
    }
    return [
      ...phases.slice(0, position),
      { title, number, milestones },
      ...phases.slice(position)
    ]
  }

  insertEvent(phase, event) {
    const { milestones, ...restOfPhase } = phase
    const position = milestones.findIndex(e => e.date < event.date)
    if (position < 0) {
      return { ...restOfPhase, milestones: [event, ...milestones.slice()] }
    }
    return {
      ...restOfPhase,
      milestones: [
        ...milestones.slice(0, position),
        event,
        ...milestones.slice(position)
      ]
    }
  }

  dataReducer(phases, item) {
    if (item.type === 'timelinePhase') {
      const { title, number } = item
      const phaseIndex = phases.findIndex(e => e.title === title)
      // Only add the phase if it doesnt already exist
      if (phaseIndex < 0) return this.insertPhase(phases, { title, number })
      return phases
    }

    // If the item is an event rather than a phase
    const { title, date, isDatePublished, phase } = item

    // If no phase is provided, fail gracefully by not including the event
    if (!phase) return phases

    const event = { title, date: new Date(date), isDatePublished }
    const phaseIndex = phases.findIndex(e => e.title === phase.title)
    // Add the phase if it doesn't exist already
    if (phaseIndex < 0) {
      const phaseData = {
        title: phase.title,
        number: phase.number,
        milestones: [event]
      }
      return this.insertPhase(phases, phaseData)
    }
    // Otherwise insert the event into the phases milestones
    const updatedPhase = this.insertEvent(phases[phaseIndex], event)
    return [
      ...phases.slice(0, phaseIndex),
      updatedPhase,
      ...phases.slice(phaseIndex + 1)
    ]
  }

  componentDidMount() {
    this.setState({
      fetchStatus: STATUS.INITIALIZING
    })
    const query = `*[_type in ["timelineEvent", "timelinePhase"] ]
      |order(date desc){
        "type": _type,
        title,
        number,
        date,
        isDatePublished,
        phase->{
          title,
          number
        }
      }`
    sanity
      .fetch(query)
      .then(data => {
        const orderedData = data.reduce(this.dataReducer, [])
        this.setState({
          fetchStatus: STATUS.SUCCESS,
          phases: orderedData
        })
      })
      .catch(error => {
        this.setState({
          fetchStatus: STATUS.FAILED
        })
        console.error(error)
      })
  }

  render() {
    const { phases, fetchStatus } = this.state
    return (
      <TimelineContext.Provider
        value={{ phases, fetchStatus }}
        {...this.props}
      />
    )
  }
}

export default TimelineManager
