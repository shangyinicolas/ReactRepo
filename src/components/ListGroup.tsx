import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

//props inmuutable
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //onclick
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // hook
  // status setstatus = initialstatus
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const message = items.length === 0 ? <p>Items Not Found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>Items Not Found</p> : null;
  //   };

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>Items Not Found</p> : null} */}
      {items.length === 0 && <p>Items Not Found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}{" "}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
