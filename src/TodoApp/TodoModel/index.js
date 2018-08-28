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
    // 增加todo
    addTodo = (todo) => {
        // todo.id = Date.now();
        // todo.completed = false
        // todo = Object.assign({},{id: Date.now(),completed: false,todo})
        todo = {id: Date.now()+Math.random(),completed: false,...todo}
        let todos = this.todos;
        todos.push(todo)
        localStorage.setItem(this.STOTE_KEY,JSON.stringify(todos));
        this.emit();
    }
}

export default TodoModel;