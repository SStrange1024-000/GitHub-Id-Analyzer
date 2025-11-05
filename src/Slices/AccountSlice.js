import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchAccountData=createAsyncThunk('Account/FetchDaya',
    
    async(username)=>{
    const response= await fetch(`https://api.github.com/users/${username}`);
    const data= await response.json();
    return data
}
)

export const fetchReposData=createAsyncThunk('ReposData/FetchData',
    async(username)=>{
        const response=await fetch(`https://api.github.com/users/${username}/repos`)
        const data=await response.json();
        return data
    }
)

const accountSlice=createSlice({
    name:'accountSlice',
    initialState:{
        account:null,
        repos:[],
        status:'idle',
        error:null
    },
    reducers:{
        // laodAccount:(state,action)=>{
        //     state.repos=action.payload            
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAccountData.pending,(state)=>{
            state.status='loading'
        })
        .addCase(fetchAccountData.fulfilled, (state,action)=>{
            state.status='Success';
            state.account=action.payload;
            state.error=null;
        })
        .addCase(fetchAccountData.rejected, (state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        })
        .addCase(fetchReposData.fulfilled, (state,action)=>{
            state.status='success'
            state.repos=action.payload
        })
    }
})

// export const {laodAccount}=accountSlice.actions
export default accountSlice.reducer;