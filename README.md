# Issues

- Files /src/components/Login.js and /src/components/Signup.js are largely identical. Code needs to be abstracted.

- Current authentication is for development only. In order for ActionCable to access the token, it is being stored as a cookie by the client. 
