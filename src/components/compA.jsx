import React from 'react'
import { connect } from 'react-redux'
import { addAction, reduceAction } from '../react-redux/actions'
function CompA(props) {
  const addOne = ()=> {
    props.sendAdd(1)
  }
  const addTen = ()=> {
    props.sendAdd(10)
  }
  const reduceTwo = () =>{
    props.sendReduce(2)
  }
  return (
    <>
      <button onClick={addOne}>+1</button>
      <button onClick={addTen}>+10</button>
      <button onClick={reduceTwo}>-2</button>
    </>
  )
}
const mapDispatchToProps = dispatch=> {
  return {
    sendAdd: (num)=> {
      dispatch(addAction(num))
    },
    sendReduce: (num)=> {
      dispatch(reduceAction(num))
    }
  }

}
export default connect(null, mapDispatchToProps)(CompA)