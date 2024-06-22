"use client"

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email?: string;
  phone: string;
  address: string;
  profilePicture: string; // Changed to string for URL
}

const AddContacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      //   const response = await axios.post('/api/add-contact', data);
      console.log("Contact added:", data);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Email (optional):</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" {...register("phone", { required: true })} />
          {errors.phone && <span>This field is required</span>}
        </div>
        <div>
          <label>Address:</label>
          <textarea {...register("address", { required: true })}></textarea>
          {errors.address && <span>This field is required</span>}
        </div>
        <div>
          <label>Profile Picture URL:</label>
          <input
            type="text"
            {...register("profilePicture", { required: true })}
          />
          {errors.profilePicture && <span>This field is required</span>}
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContacts;
