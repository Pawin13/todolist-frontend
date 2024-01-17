import React, { FC, useEffect, useState } from "react";
import { Itodo } from "@/interfaces/data/jsonData";
import {
  displayComponent,
  cardDisplay,
  BoxLayout,
  TitleBox,
  boxComponent,
} from "./css";

const ToDoComponent: React.FC<any> = ({ listData }) => {
  const [isListData, setListTodo] = useState<Itodo[]>(listData);
  const [isFruit, setListFruit] = useState<Itodo[]>([]);
  const [isVegetable, setListVegetable] = useState<Itodo[]>([]);

  useEffect(() => {}, [listData]);

  const handleTodolist = (item: Itodo) => {
    if (item.type === "Fruit") {
      const fruitList = [...isFruit, item];
      setListFruit(fruitList);
    } else {
      const vegetableList = [...isVegetable, item];
      setListVegetable(vegetableList);
    }

    handleRemoveTodolist(item, isListData);
  };

  const handleRemoveTodolist = (item: Itodo, dataList: Itodo[]) => {
    const index = dataList.findIndex((i) => {
      return i.name === item.name;
    });
    index > -1 && dataList.splice(index, 1);
  };

  const handleAddTodolist = (item: Itodo, popList: Itodo[]) => {
    const index = popList.findIndex((i) => {
      return i.name === item.name;
    });
    const fruitList = [...isListData, item];
    setListTodo(fruitList);
    index > -1 && popList.splice(index, 1);
  };

  return (
    <div style={displayComponent}>
      <div className="list-todo-box">
        {isListData?.map((item: Itodo, i: number) => {
          return (
            <div
              style={cardDisplay}
              onClick={() => handleTodolist(item)}
              key={i}
            >
              <div className="list-name">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="box-fruit" style={boxComponent}>
        <div style={TitleBox}>
          <span>Fruit</span>
        </div>
        <div style={BoxLayout}>
          {isFruit?.map((item: Itodo, i: number) => {
            return (
              <div
                style={cardDisplay}
                onClick={() => handleAddTodolist(item, isFruit)}
                key={i}
              >
                <div className="list-name">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="box-vegetable" style={boxComponent}>
        <div style={TitleBox}>
          <span>Vegetable</span>
        </div>
        <div style={BoxLayout}>
          {isVegetable?.map((item: Itodo, i: number) => {
            return (
              <div
                style={cardDisplay}
                onClick={() => handleAddTodolist(item, isVegetable)}
                key={i}
              >
                <div className="list-name">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoComponent;
