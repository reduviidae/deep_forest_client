const initialState = {
  users: [],
  games: [],
  user: {
    jwt: "",
    id:0,
    name: "",
    pronouns: "",
    conversations: [],
    user_games: [],
    messages: [],
    activeConversation: null
  },
  loggedIn: false,
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    case "AUTH_USER":
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
      break;
    case "SHOW_USER":
    console.log(action.payload)
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
    break;
    case "LOAD_MSGS":
    console.log(action.payload)
      return {
        ...state,
        games: action.payload
      }
    default:
      return state;
  }
}

export default initReducer
