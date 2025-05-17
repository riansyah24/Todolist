import React from 'react';

const List = (props) => {
  return (
    <li className="flex justify-between items-center">
      <span>{props.list}</span>
      <button className="bg-red-600 text-white font-bold px-3 py-1 rounded" onClick={props.remove}>X</button>
    </li>
  );
};

export default List;