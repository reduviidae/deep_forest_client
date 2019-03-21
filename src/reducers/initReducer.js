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
  }
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    case "AUTH_USER":
      return {
        userState: action.payload,
        loggedIn: true
      }
    case "SHOW_USER":
    console.log("SHOW_USER",action.payload)
      return {
        ...state,
        userState: action.payload,
        loggedIn: true
      }
    case "LOAD_GAMES":
    console.log("LOAD_GAMES", action.payload)
      return {
        ...state,
        games: action.payload
      }
      case "ADD_GAME":
      console.log("ADD_GAME",action.payload)
        return {
          ...state,
          newGame: action.payload
        }
        case "CUR_GAME":
        console.log("CUR_GAME",action.payload)
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
    default:
      return state;
  }
}

export default initReducer
