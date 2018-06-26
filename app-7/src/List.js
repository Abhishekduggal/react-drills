import React from "react";
import Todo from './Todo';

function List(props) {

    let list = props.tasks.map((elem, i) => {
        return (
            <Todo key={i} task={elem} />
        )
    })
    return (
        <div>
            {list}
        </div>);
}

export default List; 