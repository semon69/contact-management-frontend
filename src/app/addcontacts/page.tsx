"use client";

import { useAddContactMutation } from "@/redux/api/contactapi";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface IFormInput {
  name: string;
  email?: string;
  phone: string;
  address: string;
  profilePicture: string; // Changed to string for URL
}

const AddContacts = () => {
  const [addContact] = useAddContactMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const contactData = JSON.stringify(data);
      const res = await addContact(contactData);

      if (res.data.success) {
        toast.success(res.data.message);
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
  return (
    <div className=" max-w-6xl mx-auto shadow-xl p-5 rounded-md my-2 lg:my-5">
      <h1 className="text-xl font-semibold text-center my-5">Add Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-2 space-y-1">
          <div>
            <label className="font-semibold mb-2">Name:</label>
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label className="font-semibold mb-2">Email (optional):</label>
            <br />
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("email")}
            />
          </div>
          <div>
            <label className="font-semibold mb-2">Phone:</label>
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label className="font-semibold mb-2">Address:</label>
            <br />
            <input
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("address", { required: true })}
            ></input>
            {errors.address && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="my-4">
          <label className="font-semibold mb-2">Profile Picture URL:</label>
          <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("profilePicture", { required: true })}
          />
          {errors.profilePicture && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <button type="submit" className="btn btn-outline btn-primary mt-2">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContacts;
