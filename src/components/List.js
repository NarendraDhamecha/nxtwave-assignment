import "../css/List.css";
import ListItem from "./ListItem";

const List = ({
  listNo = "",
  listItems = [],
  isSelected,
  handleSelectList,
  isCreateNewList,
  idx,
}) => {
  return (
    <div className="list-container">
      <div className="list-header">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(event) => handleSelectList(event, listNo)}
        />
        <span>List {idx + 1}</span>
      </div>
      <div className="list-items">
        {listItems?.map((listItem) => (
          <ListItem
            key={listItem?.id}
            name={listItem?.name}
            description={listItem?.description}
            isCreateNewList={isCreateNewList}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
