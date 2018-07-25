export default function({ members = [], fetchStatus }) {
  const { founders, team } = members.reduce(
    (catagories, member) => {
      const localMember = (({ role, linkedInUrl, ...rest }) => ({
        title: role,
        linkedin: linkedInUrl,
        ...rest
      }))(member)
      if (member.involvement === 'founder') {
        catagories.founders.push(localMember)
      } else {
        catagories.team.push(localMember)
      }
      return catagories
    },
    { founders: [], team: [] }
  )

  return { founders, team }
}
