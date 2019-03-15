const initialState = {
  users: [],
  games: [],
  thisUser: {
    name: "",
    pronouns: ""
  }
}


const initReducer = (state = initialState, action) => {
  switch (action.type){
    default:
      return state;
  }
}

export default initReducer
