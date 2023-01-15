import "./body.css";

const BodyProp = ({
  todo,
  setTodo,
  Clear,
  isCompleted,
  setIsCompleted,
  setCondition,
}) => {
  console.log(todo);
  let lenght = todo.length;

  const Completed = () => {
    const Comp = todo.filter((items) => {
      return items.condition == true;
    });
    setTodo(Comp);
  };
  const Active = () => {
    const Active = todo.filter((items) => {
      return items.condition == false;
    });
    setTodo(Active);
  };
  const All = () => {
    const All = todo.map((items) => {
      return items;
    });
    setTodo(All);
  };
  const onClick = (id) => {
    setCondition((prev) => !prev);
  };
  return (
    <div className="container body__container">
      {todo.map((items) => {
        return (
          <div className="body__two" key={items.id}>
            <input
              onClick={() => {
                items.condition = items.condition
                  ? (items.condition = false)
                  : (items.condition = true);
                onClick(items.condition);
              }}
              type="radio"
              name=""
              id={items.id}
            />
            <div>
              <small className={`${items.condition ? "checked" : ""}`}>
                {items.list}
              </small>
            </div>
          </div>
        );
      })}
      <div className="body__three">
        <h5>{lenght} items Left</h5>
        <div className="body__four">
          <h5 onClick={() => All()}>All</h5>
          <h5 onClick={() => Active()}>Active</h5>
          <h5
            onClick={() => {
              Completed();
            }}
          >
            Completed
          </h5>
        </div>
        <h5 onClick={() => Clear(todo[0].id)}>Clear All</h5>
      </div>
    </div>
  );
};

export default BodyProp;
