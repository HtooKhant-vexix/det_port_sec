import React from "react";

const List = ({ name, link, id, active }) => {
  return (
    <div
      key={id}
      className={` hover:border-b-[3px] cursor-pointer duration-100 text-darkGreen text-xl font-medium hover:border-darkGreen px-4 py-2 ${active}`}
    >
      {name}
    </div>
  );
};

export default List;
