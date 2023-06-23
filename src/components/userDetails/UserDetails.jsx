import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone } = user;
  console.log(user);
  return (
    <div className="text-center">
      <h2>User Details</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default UserDetails;
