const initialData={
    list:[]
}

const todoReducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const {id,data}=action.payload;
            return{
                ...state,
                data:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
    }
}

export default todoReducer