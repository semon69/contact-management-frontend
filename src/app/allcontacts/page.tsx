"use client";

import ContactCard from "@/components/ContactCard";
import LoadingCard from "@/components/LoadingCard";
import { useGetContactsQuery } from "@/redux/api/contactapi";

const ContactPage = () => {
  const { data, isLoading } = useGetContactsQuery({});
  return (
    <div className="mx-3 lg:mx-16 my-2 lg:my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        ) : (
          data?.data?.map((contact: any) => (
            <ContactCard key={contact?._id} contact={contact} />
            // <h1 key={contact?._id}>Okay</h1>
          ))
        )}
      </div>
      <div>{data?.data?.length < 1 ? <h1>Empty Contact...</h1> : ""}</div>
    </div>
  );
};

export default ContactPage;
