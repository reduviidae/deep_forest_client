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
      
      break;
    default:
      return state;
  }
}

export default initReducer
