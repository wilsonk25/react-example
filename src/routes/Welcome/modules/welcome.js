// ------------------------------------
// Constants
// ------------------------------------
export const WELCOME_VISITS_COUNT = 'WELCOME_VISITS_COUNT'
export const WELCOME_ADD_ITEM = 'WELCOME_ADD_ITEM'
export const WELCOME_EDIT_ITEM = 'WELCOME_EDIT_ITEM'
export const WELCOME_REORDER_ITEM = 'WELCOME_REORDER_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
export function welcomeVisitIncrement (value = 1) {
  return {
    type: WELCOME_VISITS_COUNT,
    payload: value
  }
}

export function welcomeAddItem (value) {
  return {
    type: WELCOME_ADD_ITEM,
    payload: value
  }
}

export function welcomeEditItem (value) {
  return {
    type: WELCOME_EDIT_ITEM,
    payload: value
  }
}

export function welcomeReorderItems (value) {
  return {
    type: WELCOME_REORDER_ITEM,
    payload: value
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [WELCOME_VISITS_COUNT]: (state, action) => { 
    return Object.assign({}, state, {
      visitsCount: state.visitsCount + action.payload
    })
  },
  [WELCOME_ADD_ITEM]: (state, action) => { 
    const mockedId = Math.floor(Date.now() / 1000)
    const newItem = {
      label: action.payload,
      id: mockedId
    }
    return Object.assign({}, state, {
      welcomeItems: [...state.welcomeItems, newItem]
    })
  },
  [WELCOME_EDIT_ITEM]: (state, action) => { 
    const newLabel = action.payload.val
    const index = action.payload.editedItemIndex
    let immutableWelcomeItems = [...state.welcomeItems]
    immutableWelcomeItems[index].label = newLabel
    return Object.assign({}, state, {
      welcomeItems: immutableWelcomeItems
    })
  },
  [WELCOME_REORDER_ITEM]: (state, action) => { 
    const reorder = action.payload
    const reorderItem = state.welcomeItems[reorder.start]
    let newWelcomeItems = []
    state.welcomeItems.map((item, i) => {
      if(i === reorder.start) {
        return
      }

      // we need that if statement because
      // the behaviour is determined if someone is dragging
      // an item from higher to lower place on the list or vice versa
      if(reorder.end < reorder.start) {
        if(i === reorder.end) {
          newWelcomeItems.push(reorderItem)
        }
        newWelcomeItems.push(item)
      } else {
        newWelcomeItems.push(item)
        if(i === reorder.end) {
          newWelcomeItems.push(reorderItem)
        }
      }
    })

    return Object.assign({}, state, {
      welcomeItems: newWelcomeItems
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitsCount: 0,
  welcomeItems: [
    {key: 0, label: 'Tyrion'},
    {key: 1, label: 'Tywin'},
    {key: 2, label: 'Jon Snow'},
    {key: 3, label: 'Stark'}
  ]
}
export default function welcomeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}