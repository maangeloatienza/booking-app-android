const initialState = [
  {
    id: 1,
    username : 'user',
    password: 'password'
  },
  {
    id: 2,
    username : 'user2',
    password: 'password'
  },
]



export const login = (options) => {
  const checkLoginDetails = (options,creds) => {
    return options.username === creds.username && options.password === creds.password
  }

  let loginDetails = initialState.filter(state => checkLoginDetails(options,state))

  
  if(loginDetails.length){
    return {
      success : true,
      message : 'user login success',
      data: loginDetails[0]
    }
  }

  return {
    success: false,
    data : {
      message : 'user login failed'
    }
  }
}