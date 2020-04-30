import React from 'react';

const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group" style={{ cursor: 'pointer' }}>
      {/* <li className="list-group-item active">All Genres</li> */}
      {items.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            genre[textProperty] === selectedItem[textProperty]
              ? 'list-group-item active'
              : 'list-group-item'
          }
          onClick={() => onItemSelect(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
