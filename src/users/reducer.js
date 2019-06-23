import { ADD_USER, UPDATE_USER, DELETE_USER } from "./actionTypes";

const initialState = [{
        id: 1,
        name: 'Ivan',
        email: 'ivan@gmail.com',
        password: '123',
        rights: {
            read: true,
            comment: true,
            write: false
        }
    }, {
        id: 2,
        name: 'Petro',
        email: 'petya@gmail.com',
        password: 123,
        rights: {
            read: true,
            comment: true,
            write: true
        }
    }
];

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_USER: {
            const { id, data } = action.payload;
            const newUser = { id, ...data };
            return [...state, newUser];
        }
        
        case UPDATE_USER: {
            const { id, data } = action.payload;
            const updatedUsers = state.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        ...data
                    };
                } else {
                    return user;
                }
            });

            return updatedUsers;
        }

        case DELETE_USER: {
            const { id } = action.payload;
            const filteredUsers = state.filter(user => user.id !== id);
            return filteredUsers;
        }

        default:
            return state;
    }
}
