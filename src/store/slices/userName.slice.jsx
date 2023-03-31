import { createSlice } from '@reduxjs/toolkit';


// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'useName',
    initialState: null,
    reducers: {
       getUsername: (state, action) => {
        const user = action.payload
        return user
       }     
    }
})

/* dentro de las llaves se van a estar exportanbdo las variables de las 
funciones que van a estar dentro del reduccers */
export const { getUsername  } = userNameSlice.actions;

export default userNameSlice.reducer;

