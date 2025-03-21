import { useState } from "react"
import Todoitem from "./Todoitem"
function TodoList(props){
    const activityArr =props.activityArr
    const setActivityArr =props.setActivityArr




return (
    <div className='bg-[#BDB4EA] border rounded-md p-1 flex-grow'>
        <h1 className='text-2xl font-medium'>Today's Activity</h1>
        {activityArr.length===0?<p>You haven't added anything yet</p>:"Nothing"}

        {
            activityArr.map(function (item, index) {
                return <Todoitem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr}  />
            }
            )
        }

    </div>

)}


  
export default TodoList