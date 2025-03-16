import { useState } from "react";
import Addtodofrom from "./Addtodoform";
import TodoList from "./TodoList";

function TodoContainer() {
    const [activityArr, setActivityArr] = useState([

        {
            id: 1,
            activity: "Go For a Walk"
        },
        {
            id: 2,
            activity: "Have Breakfast"
        },
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodofrom activityArr={activityArr} setActivityArr={setActivityArr} />
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
                
                
            </div>
        </div>

    )
}
export default TodoContainer