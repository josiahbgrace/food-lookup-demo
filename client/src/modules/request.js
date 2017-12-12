export const REQUEST_RESPONSE = 'request/REQUEST_RESPONSE'
export const START_REQUEST = 'request/START_REQUEST'

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RESPONSE:
      return {
        ...state,
        result: action.payload,
        pendingRequest: false
      }

    case START_REQUEST:
      return {
        ...state,
        pendingRequest: true
      }

    default:
      return state
  }
}

export const requestResponse = () => {
  return dispatch => {
    dispatch({
      type: START_REQUEST
    })

    return fetch("/api/request").then(response => {
        response.json().then(json =>
            dispatch({
                type: REQUEST_RESPONSE,
                payload: json
            })
        )
    })
  }
}
