import React from 'react'
import { connect } from 'react-redux'
function CompB(props) {
  const {count} = props
  return (
    <p>{count}</p>
  )
}

const mapStateToProps = state=> {
  return state
}
export default connect(mapStateToProps)(CompB)