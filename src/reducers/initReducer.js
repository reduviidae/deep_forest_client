const initialState = {
  users: [],
  games: [],
  user: {
    id:0,
    name: "",
    pronouns: ""
  },
  loggedIn: false
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    case "AUTH_USER":
      return {
        user: action.payload,
        loggedIn: true
      }
      break;
    default:
      return state;
  }
}

export default initReducer
