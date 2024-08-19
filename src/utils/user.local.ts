const TOKEN_LOCAL_KEY = 'USER_TOKEN'

export const setTokenLocal = (token: string) => {
  localStorage.setItem(TOKEN_LOCAL_KEY, token)
}

export const getTokenLocal = () => {
  return localStorage.getItem(TOKEN_LOCAL_KEY)
}

export const removeTokenLocal = () => {
  localStorage.removeItem(TOKEN_LOCAL_KEY)
}
