import React from "react";
import TaskBar from "./TaskBar";
import { useState /* useEffect, useCallback */ } from "react";
import Card from "../ui/Card";
import classes from "./Tasks.module.css";
import notebookImage from "../img/notebook.png"
import darkNotebookImage from "../img/darknotebook.png"

const TASKS = [
  {
    name: "General Info",
    tasks: [
      {
        description: "Add name and surname",
        value: 10,
        checked: true,
      },
      {
        description: "Add email",
        value: 15,
        checked: false,
      },
      {
        description: "Add linkedin profile",
        value: 8,
        checked: false,
      },
      {
        description: "Provide websites page url",
        value: 5,
        checked: true,
      },
    ],
  },
  {
    name: "Accomiplishments",
    tasks: [
      {
        description: "Wrote a small poem about the birthday",
        value: 23,
        checked: false,
      },
      {
        description: "Jump three times with one leg",
        value: 32,
        checked: true,
      },
      {
        description: "Avoid the annoying neighbor",
        value: 2,
        checked: false,
      },
      {
        description: "Say hello to a random person",
        value: 21,
        checked: false,
      },
      {
        description: "Fill the description in at least 3 places",
        value: 12,
        checked: true,
      },
    ],
  },
  {
    name: "Personal retrospective",
    tasks: [
      {
        description: "Remember a dream",
        value: 15,
        checked: true,
      },
      {
        description: "Have a crush",
        value: 7,
        checked: true,
      },
    ],
  },
  {
    name: "Things before leaving",
    tasks: [
      {
        description: "Say what you feel to all the people you know",
        value: 42,
        checked: false,
      },
      {
        description: "Get a pet",
        value: 23,
        checked: false,
      },
      {
        description: "Buy a fashion shirt",
        value: 12,
        checked: false,
      },
    ],
  },
];

const Tasks = () => {
  const [groupVisibility, setGroupVisibility] = useState(0);
  const [dummyState, setDummyState] = useState(true);

  const groupVisibilityHandler = (group) => {
    setGroupVisibility(group === groupVisibility ? 0 : group);
  };

  const taskCompletionHandler = (task) => {
    console.log(task, task.description, task.checked, task.value);
    task.checked = !task.checked;
    setDummyState(!dummyState);
  };

  /*   useEffect(() => {

  }, [taskCompletionHandler])
 */

  const isTicked = (isChecked) => {
    return isChecked === true ? (
      <input type="checkbox" checked="checked" />
      
    ) : (
      <input type="checkbox" />
    );
  };

  return (
    <div className={classes.main}>
      <TaskBar tasks={TASKS} />
      <div>
        <ul>
          {TASKS.map((task, i) => (
            <Card>
              <li
                className={classes.mouseclick}
                onClick={() => {
                  groupVisibilityHandler(i + 1);
                }}
              >
                <img className={classes.logo} src={groupVisibility === i+1 ? darkNotebookImage : notebookImage} /><p>{task.name}</p>
              </li>
              {groupVisibility === i + 1 ? (
                <ul>
                  {task.tasks.map((t) => (
                    <>
                      <li
                        className={classes.mouseclick}
                        onClick={() => {
                          taskCompletionHandler(t);
                        }}
                      >
                        {t.description}{" "}
                        {isTicked(t.checked)}
                      </li>
                    </>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;