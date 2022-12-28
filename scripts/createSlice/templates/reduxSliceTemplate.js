const firstCharUpperCase = require('../firstCharUpperCase');
const firstCharLowerCase = require('../firstCharLowerCase');

module.exports = (sliceName) => {
    const typeName = `${firstCharUpperCase(sliceName)}Schema`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${sliceName}Schema';

const initialState: ${typeName} = {
    
};

export const ${firstCharLowerCase(sliceName)}Slice = createSlice({
    name: '${firstCharLowerCase(sliceName)}',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ${firstCharLowerCase(sliceName)}Actions } = ${firstCharLowerCase(sliceName)}Slice;
export const { reducer: ${firstCharLowerCase(sliceName)}Reducer } = ${firstCharLowerCase(sliceName)}Slice;`;
};
