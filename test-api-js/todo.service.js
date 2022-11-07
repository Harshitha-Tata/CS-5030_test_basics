class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.space.todo[3] = todo;
        return this.space.todo;
    }

    delete_todo(id){
        this.space.todo[id] = {};
        return this.space.todo;
    }

    update_todo(id, todo){
        this.space.todo[id] = todo;
        return this.space.todo;
    }
}


module.exports= todoservice;
