const addTodo=()=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new date().getTime().toString(),
            data:data
        }
    }
}
const deleteTodo=()=>{
    return{
        type:"DELETE_TODO"
    }
}