"use client"

import { useGetContactsQuery } from "@/redux/api/contactapi";

const ContactPage = () => {
  const { data, isLoading } = useGetContactsQuery({});
  console.log(data);
  return (
    <div>
      <h1>Hello Emon</h1>
    </div>
  );
};

export default ContactPage;
