import React, { FC, useEffect, useState } from "react";
import { Itodo } from "@/interfaces/data/jsonData";
import { displayComponent, cardDisplay, TitleBox } from "./css";

const DepartmentComponent: React.FC<any> = ({ usersList }) => {
  return (
    <div style={displayComponent}>
      <div style={TitleBox}>
        <span>Create data from API (OPTIONAL)</span>
      </div>
      <div>
        {Object.values(usersList).map((innerObject, index) => (
          <div style={cardDisplay} key={index}>
            {JSON.stringify(innerObject, null, 2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentComponent;
