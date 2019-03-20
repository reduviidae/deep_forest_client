const initialState = {
  users: [],
  games: [],
  user: {
    id:0,
    name: "",
    pronouns: ""
  },
  loggedIn: false,
  conversations: [],
  activeConversation: null
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    case "AUTH_USER":
    console.log("initReducer case AUTH_USER hit")
      return {
        user: action.payload,
        loggedIn: true
      }
      break;
    case "SHOW_USER":
    console.log(action.payload)
      return {
        user: action.payload,
        loggedIn: true
      }
    break;
    case "GET_CONVOS":
    console.log(action.payload)
      return {

      }
    default:
      return state;
  }
}

export default initReducer
