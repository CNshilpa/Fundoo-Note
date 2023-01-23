const drawerState = {
    label: 'Keep'
}
export const DrawerReducer = (state = drawerState, action) => {
    switch (action.type) {
        case 'Notes':
            return {
                ...state,
                label: 'Notes'
            };
            case 'Reminders':
                return {
                    ...state,
                    label: 'Reminders'
                };
                case 'Edit':
            return {
                ...state,
                label: 'Edit'
            };
            case 'Archive':
            return {
                ...state,
                label: 'Archive'
            };
            case 'Trash':
            return {
                ...state,
                label: 'Trash'
            };
            default:
                return state
    }
}