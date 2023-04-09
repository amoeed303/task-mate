export const AddTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updateTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name, //value from input field
              time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updateTask);
      setTask([]);//task to empty 
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`,
      };
      setTasklist([...taskList, newTask]);
      setTask([]);
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add Your Tasks!"
          maxLength="35"
          //if updated button is clicked then there will be value in task we access this and display in input field
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}//to continue updating after acccessing values
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
