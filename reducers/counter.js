export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCR':
      return state + 1
    case 'DECR':
      return state - 1
    default:
      return state
  }
}
