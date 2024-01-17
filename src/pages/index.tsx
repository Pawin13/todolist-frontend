import React, { FC, useEffect } from "react";
import listData from "@/public/json/todoList.json";
import ToDoComponent from "@/components/todoComponent";

const Home: React.FC<any> = (props) => {
  return (
    <div>
      <ToDoComponent listData={listData} />
    </div>
  );
};

export default Home;
