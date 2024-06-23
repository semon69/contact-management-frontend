"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Image from "next/image";
import { TContact } from "@/types";
import {
  useDeleteContactMutation,
  useGetAContactQuery,
  useUpdateContactMutation,
  useUpdateFavouriteStatusMutation,
} from "@/redux/api/contactapi";
import { FaRegStar, FaStar } from "react-icons/fa";

interface IFormInput {
  name: string;
  email?: string;
  phone: string;
  address: string;
  profilePicture: string;
}

const ContactCard = ({ contact }: { contact: TContact }) => {
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const [updateFavouriteStatus] = useUpdateFavouriteStatusMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ defaultValues: contact });

  useEffect(() => {
    if (contact) {
      reset(contact);
    }
  }, [contact, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await updateContact({
        id: contact._id,
        payload: data,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
      } else {
        toast.error("Failed to update");
      }
      reset();
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const openModal = () => {
    if (contact) {
      reset(contact);
      const dialog = document.getElementById(
        `update_modal_${contact._id}`
      ) as HTMLDialogElement | null;
      if (dialog) {
        dialog.showModal();
      }
    }
  };
  const closeModal = () => {
    const dialog = document.getElementById(
      `update_modal_${contact._id}`
    ) as HTMLDialogElement | null;
    if (dialog) {
      dialog.close();
    }
  };

  const handleDelete = async (id: string) => {
    const res = await deleteContact(id);
    console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      reset();
    } else {
      toast.error("Failed to delete");
    }
  };

  const handleFavoriteTrue = async (id: string) => {
    const isFavourite = true;
    const res = await updateFavouriteStatus({ id, payload: { isFavourite } });
    // console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      reset();
    } else {
      toast.error("Failed to add in favourite");
    }
  };
  const handleFavoriteFalse = async (id: string) => {
    const isFavourite = false;
    const res = await updateFavouriteStatus({ id, payload: { isFavourite } });
    // console.log(res);
    if (res.data.success) {
      toast.success(res.data.message);
      reset();
    } else {
      toast.error("Failed to remove from favourite");
    }
  };

  return (
    <div>
      <div className="card h-[430px] glass shadow-md">
        <figure>
          <Image
            src={contact?.profilePicture}
            alt="contact!"
            width={400}
            height={400}
          />
        </figure>
        <div className="p-3 space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">{contact?.name}</h2>
            <div>
              {contact?.isFavourite ? (
                <FaStar
                  onClick={() => handleFavoriteFalse(contact?._id)}
                  className="size-7 text-yellow-500 cursor-pointer"
                />
              ) : (
                <FaRegStar
                  onClick={() => handleFavoriteTrue(contact?._id)}
                  className="size-7 cursor-pointer"
                />
              )}
            </div>
          </div>
          <h1>{contact?.email}</h1>
          <h2>{contact?.phone}</h2>
          <h1>{contact?.address}</h1>
          <div className="card-actions flex justify-between items-center">
            <button className="btn btn-primary" onClick={openModal}>
              Update
            </button>
            <dialog
              id={`update_modal_${contact._id}`}
              className="modal modal-bottom sm:modal-middle w-full"
            >
              <div className="modal-box">
                <div className="modal-action">
                  <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-2">
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
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="font-semibold mb-2">
                          Email (optional):
                        </label>
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
                          <span className="text-red-500">
                            This field is required
                          </span>
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
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="font-semibold mb-2">
                        Profile Picture URL:
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        {...register("profilePicture", { required: true })}
                      />
                      {errors.profilePicture && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        type="submit"
                        className="btn btn-outline btn-primary mt-2"
                        onClick={closeModal}
                      >
                        Update Contact
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex justify-end items-end">
                  <button className="btn " onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </dialog>
            <button
              onClick={() => handleDelete(contact._id)}
              className="btn btn-error text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
