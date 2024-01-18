import * as database from "@/lib/api/loadUsers";
import type { NextApiRequest, NextApiResponse } from "next";

const getLoadUsers = async (req: NextApiRequest) => {
  let userData = {
    status: 400,
    data: {},
    msg: "",
  };
  try {
    const allUsers: any = await database.loadUsers(req);
    if (allUsers) {
      userData = {
        status: 200,
        msg: "Sucess loadUsers",
        data: allUsers,
      };
    }
  } catch (error) {
    userData = {
      status: 400,
      data: {},
      msg: `Error load user ${error}`,
    };
  }
  return userData;
};

export { getLoadUsers };
