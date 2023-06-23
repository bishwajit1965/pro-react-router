import React from "react";
import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const navigate = useNavigate();

  const handleUserDetail = () => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="card rounded-md shadow-lg">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>
        <Link
          className="bg-indigo-500 text-white text-center block  p-1 m-0 rounded-b-md"
          to={`/user/${id}`}
        >
          User details
        </Link>
        <br />
        <Link
          className="bg-indigo-500 text-white text-center block m-0 rounded-b-md"
          to={`/user/${id}`}
        >
          <button className="bg-indigo-500 p-1 block rounded-b-md">
            User details
          </button>
        </Link>
        <br />
        <button
          onClick={handleUserDetail}
          className="bg-indigo-500 p-1 w-full rounded-b-md"
        >
          User details
        </button>
      </p>
    </div>
  );
};

export default User;
