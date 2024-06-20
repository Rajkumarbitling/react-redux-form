export const addUserAction = (state, action) => {
    state.value.push(action.payload)
}

export const updateUserAction = (state, action) => {
    const filtered = state.value.filter(item => item.uid !== action.payload.uid)
    state.value = [...filtered, action.payload]
}

export const deleteUserAction = (state, action) => {
    const filtered = state.value.filter(item => item.uid !== action.payload)
    state.value = [...filtered]
}