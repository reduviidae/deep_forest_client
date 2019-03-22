const initialState = {
  userState: {
    jwt: "",
    user: {
      id:0,
      name: "",
      pronouns: "",
      user_games: [],
      messages: [],
      games: []
    },
    loggedIn: false,
    newGame: {},
    currentGame: {},
  },
  drawing:{},
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    case "AUTH_USER":
      return {
        userState: action.payload,
        loggedIn: true
      }
    case "SHOW_USER":
      return {
        ...state,
        userState: action.payload,
        loggedIn: true
      }
    case "LOAD_GAMES":
      return {
        ...state,
        games: action.payload
      }
      case "ADD_GAME":
        return {
          ...state,
          newGame: action.payload
        }
        case "CUR_GAME":
          return {
            ...state,
            currentGame: action.payload
          }
        case "UP_MSG":
        console.log("UP_MSG",action.payload)
          return {
            ...state,
            userState: { ...state.userState,
              user: {
                ...state.userState.user,
                messages: [...state.userState.user.messages, action.payload]
              }
            }
          }
        case "DRAW":
        console.log("DRAW", action.payload)
          return {
            ...state,
            drawing: action.payload
          }
    default:
      return state;
  }
}

export default initReducer
