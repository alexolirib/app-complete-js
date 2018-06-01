const INICIAL_STATE = { description: '', list: [] }

export default (state = INICIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            //bom retornar todo o estado novamente,
            //colocar o que foi alterado 
            return { ...state, description: action.payload }

        case 'TASK_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TASK_ADD':
            return { ...state, description: '' }
        default:
            return state
    }
}
