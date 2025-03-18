function Todoitem(props) {
    const { activityArr, setActivityArr,  } = props;
    

    function handleDelete(deleteid) {
        const temparr = activityArr.filter(item => item.id !== deleteid);
        setActivityArr(temparr);
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.activity}</p>
            <button className="text-red-600" onClick={() => handleDelete(props.id)}>
                Delete
            </button>
        </div>
    );
} 

export default Todoitem