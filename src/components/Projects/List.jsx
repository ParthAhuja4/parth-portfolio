import { useState } from "react";

function List({ list, filterItems }) {
  const [active, setActive] = useState(0);
  return (
    <div className="portfolio_list">
      {list.map((category, index) => {
        return (
          <button
            className={`${active === index ? "active-work" : ""} portfolio_list-item text-cs`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default List;
