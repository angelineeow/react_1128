const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    const addTodo = (newTodo) => {
        //post
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: {"Content-Type": "application/json"},
        }).then((res) => res.json());
    };

    const removeTodo = (id) => {
        return fetch(URL + `/${id}`, {
            method: "DELETE"
        }).then((res) => res.json());
    };

    const getTodos = () => {
        return fetch(URL).then((res) => res.json());
    };

    return {
        addTodo,
        removeTodo,
        getTodos,
    };
})();

const Model = (() => {
    //todolist
    class State {
        #todos; //[{id: ,title: }, {}]
        #onChange;
        constructor(){
            this.#todos = [];
        }

        get todos(){
            return this.#todos;
        }

        set todos(newTodo){
            console.log("setter");
            this.#todos = newTodo;
            //const obj = {name:"adam"}; 
            //obj.age //undefined 
            //obj.age(); //error when try to invoke something
            this.#onChange?.(); //Just in case the
        }

        subscribe(callback){
            this.#onChange = callback;
        }
    }

    let { getTodos, removeTodo, addTodo } = APIs;

    return {
        State,
        getTodos,
        removeTodo,
        addTodo
    };
})();

//BEM, blovk element modifier methodology
const View = (() => {
    const formEl = document.querySelector(".form");
    const todoListEl = document.querySelector(".todo-list");
    const updateTodoList = (todos) => {
        let template = "";
        todos.forEach((todo) => {
            const todoTemplate = `<li><span>${todo.title}</span><button class="btn--delete" id="${todo.id}">remove</button></li>`;
            template += todoTemplate;
        });
        if(todos.length === 0){
            template = "no task to display"
        }
        todoListEl.innerHTML = template;
    };

    return {
        formEl,
        todoListEl,
        updateTodoList
    };

})();

/* 
    prevent the refresh
    get the value from input
    save the new task to the database(could fail)
    save new task object to state, update the page
*/

const ViewModel = ((View, Model) => {
    console.log("model", Model);
    const state = new Model.State();

    const getTodos = () => {
        Model.getTodos().then((res) => {
            state.todos = res;
        });
    };

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();

            const title = event.target[0].value;
            if(title.trim() === ""){
                alert("please input title!");
                return;
            }
            console.log("title", title);
            const newTodo = { title };
            Model.addTodo(newTodo)
                .then((res) => {
                    state.todos = [res, ...state.todos];
                    event.target[0].value = "";
                })
                .catch((err) => {
                    alert(`add new task failed: ${err}`);
                });
        });
    };

    const removeTodo = () => {
        //event bubbling: event listener from parent element can receive event emitted from its child
        View.todoListEl.addEventListener("click", (event) => {
            //console.log(event.target/* emit the event */, event.currentTarget/* receive the event */);
            const id = event.target.id;
            if(event.target.className === "btn--delete"){
                Model.removeTodo(id).then(res => {
                    state.todos = state.todos.filter(todo => +todo.id !== +id)
                }).catch(err => alert(`delete todo failed: ${err}`))
            }
        })
    };

    const bootstrap = () => {
        addTodo();
        getTodos();
        removeTodo();
        state.subscribe(() => {
            View.updateTodoList(state.todos);
        });
    };

    return {
        bootstrap
    };
})(View, Model);

ViewModel.bootstrap();