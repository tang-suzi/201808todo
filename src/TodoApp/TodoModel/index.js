class TodoModel {
    constructor(){
        // 向localStorage里面写入的时候需要这个key
        this.STOTE_KEY = 'todos';
        this.todos = localStorage.getItem(this.STOTE_KEY)?JSON.parse(localStorage.getItem(this.STOTE_KEY)):[]; // 存放着说有的todos
        // 这里可以注册监听器 当模型数据发生变化 之后会调用这些监听函数
        this.listeners = [];
    }
    subscribt(listener){
        this.listeners.push(listener);
    }
    emit(){
        this.listeners.forEach(listener => listener())
    }
    saveAndNotify(todos){
        localStorage.setItem(this.STOTE_KEY,JSON.stringify(todos));
        this.todos = todos;
        this.emit();
    }
    // 增加todo
    addTodo = (todo) => {
        // todo.id = Date.now();
        // todo.completed = false
        // todo = Object.assign({},{id: Date.now(),completed: false,todo})
        todo = {id: Date.now()+Math.random(),completed: false,...todo}
        let todos = this.todos;
        todos.push(todo)
        this.saveAndNotify(todos)
    }
    toggle = (id) => {
        let todos = this.todos;
        todos = todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo
        })
        this.saveAndNotify(todos)
    }
    remove=(id)=>{
        let todos = this.todos;
        let index = todos.findIndex(todo=>todo.id === id);
        todos.splice(index,1)
        this.saveAndNotify(todos)
    }
    toggleAll= (e) => {
        let checked = e.target.checked;
        let todos = this.todos;
        todos = todos.map(todo=>{
            todo.completed = checked;
            return todo
        })
        this.saveAndNotify(todos)
    }
    clearCompleted = ()=>{
        let todos = this.todos;
        todos = todos.filter(todo=>!todo.completed);
        this.saveAndNotify(todos)
    }
}

export default TodoModel;