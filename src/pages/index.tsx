import React, { FC, useEffect } from "react";
import listData from "@/public/json/todoList.json";
import ToDoComponent from "@/components/todoComponent";
import DepartmentComponent from "@/components/departmentComponent";
import { GetServerSideProps } from "next";
import { getLoadUsers } from "@/lib/user";
import type { NextApiRequest } from "next";

interface IHomeProps {
  usersData?: IUserData;
}
interface IUserData {
  status: number;
  data: any;
  msg: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context as any as { req: NextApiRequest };

  const usersData = await getLoadUsers(req);
  return {
    props: {
      usersData: usersData || {},
    },
  };
};

const Home: React.FC<IHomeProps> = (props) => {
  console.log("usersIHomePropsData----> ", props);
  return (
    <div>
      <ToDoComponent listData={listData} />
      <DepartmentComponent usersList={props.usersData?.data} />
    </div>
  );
};

export default Home;
