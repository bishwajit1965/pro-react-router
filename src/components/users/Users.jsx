import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">This from users page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-20 mt-16">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
