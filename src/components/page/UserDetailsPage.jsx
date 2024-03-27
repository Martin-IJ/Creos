import React from "react";
import tab from "../../assets/images/Layer_x0020_1.png";
import { useParams } from "react-router-dom";
import { users } from "../db";

const UserDetailsPage = () => {
  const { id } = useParams();

  const userId = parseInt(id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto font-secondary text-xl px-5 md:px-0">
      <div className="flex justify-center mb-10">
        <img src={tab} alt="" />
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 text-justify">
          <h1 className="text-3xl md:text-5xl font-semibold">{user.name}</h1>
          <p className="capitalize text-primary font-semibold pt-5 pb-10">
            {user.role}
          </p>
          <p className="tracking-widest leading-loose">{user.about}</p>
        </div>

        <div className="w-full h-[500px] lg:h-auto lg:w-1/2 lg:flex justify-end lg:pl-10 mb-10 lg:mb-0 ">
          <div
            className="w-full h-full lg:h-auto bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${user.image})` }}
          />
        </div>
      </div>
      <p className="tracking-widest leading-loose text-justify lg:mt-10">
        {user.description}
      </p>
    </div>
  );
};

export default UserDetailsPage;
