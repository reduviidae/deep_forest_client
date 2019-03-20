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
    loggedIn: false
  }
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    case "AUTH_USER":
      return {
        userState: action.payload,
        loggedIn: true
      }
      break;
    case "SHOW_USER":
    console.log(action.payload)
      return {
        ...state,
        userState: action.payload,
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
