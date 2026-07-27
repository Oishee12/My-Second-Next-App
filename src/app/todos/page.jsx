
const TodosPage = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
  return (
    <div>
        <h2 className="text-6xl">To-dos: {todos.length}</h2>
    </div>
  )
}

export default TodosPage