import React, { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  //handleChange function
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleReminderChange = (e) => {
    setReminder(e.target.checked);
  };
  //handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!text){
        alert('Please enter a task')
        return
    }

    onAdd({text, day, reminder})

    setText("")
    setDay("")
    setReminder(false)
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={handleDayChange}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={handleReminderChange}
        />
      </div>
      <input
        className="btn btn-block"
        type="submit"
        value="Add Task"
      />
    </form>
  );
};

export default AddTask;
