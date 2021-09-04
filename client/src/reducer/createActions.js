// three actions; up, down and reset
// returns a promise in dispatch object

const createActions = (dispatch) => {
    return {
        up: () => dispatch({ type: 'up' }),
        down: () => dispatch({ type: 'down' }),
        reset: () => dispatch({ type: 'reset' })
    };
}

export default createActions;