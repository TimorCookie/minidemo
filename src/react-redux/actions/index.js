export const addAction = num=>({
  type: 'ADD_NUM',
  payload: {
    num
  }
})

export const reduceAction = num=>({
  type: 'REDUCE_NUM',
  payload: {
    num
  }
})