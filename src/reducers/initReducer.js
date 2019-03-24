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
    },
    loggedIn: false,
    newGame: {},
    currentGame: {
      messages: []
  },
  drawing: {
    id: 0,
    draw: false,
    plots: [],
    color: "#1b1b1b",
    lineWidth: 5
  }
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    case "AUTH_USER":
      return {
        ...state,
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
          console.log("UP_MSG", action.payload);
          return {
            ...state,
            currentGame: {
              messages: [ ...state.currentGame.messages, action.payload]
            }
          }
        case "CABLE_DRAW":
          return {
            ...state,
            drawing: action.payload
          }
        case "GET_DRAW":
          return {
            ...state,
            drawing: {
              ...state.drawing,
              id: action.payload
            }
          }
        case "START_DRAW":
          return {
            ...state,
            drawing: {
              ...state.drawing,
              draw: true
            }
          }
          case "END_DRAW":
          return {
            ...state,
            drawing: {
              ...state.drawing,
              draw: false,
              plots: [{x: NaN, y: NaN}]
            }
          }
          case "COLOR":
          return {
            ...state,
            drawing: {
              ...state.drawing,
              color: action.payload
            }
          }
          case "PLOTS":
          return {
            ...state,
            drawing: {
              ...state.drawing,
              plots: action.payload
            }
          }
    default:
      return state;
  }
}

export default initReducer
