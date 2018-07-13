import React from 'react'
import PropTypes from 'prop-types'
import TeamContext from './team-context'
import sanity from 'utils/sanity'
import STATUS from '../../status'

class TeamManager extends React.Component {
  constructor() {
    super()

    this.state = {
      members: [],
      fetchStatus: STATUS.READY
    }
  }

  componentDidMount() {
    this.setState({
      fetchStatus: STATUS.INITIALIZING
    })
    const query = `*[_type == "member"]|order(weight desc){
      name,
      role,
      involvement,
      "image": image.asset->url,
      linkedInUrl,
      weight
    }`
    sanity
      .fetch(query)
      .then(data => {
        this.setState({
          fetchStatus: STATUS.SUCCESS,
          members: data
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
    const { members, fetchStatus } = this.state
    return (
      <TeamContext.Provider value={{ members, fetchStatus }} {...this.props} />
    )
  }
}

export default TeamManager
