const state = {
    userId: null,
    token: window.localStorage.getItem('xToken'),
    name: ''
}


const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERID: (state, userId) => {
        state.userId = userId
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions =  {}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}