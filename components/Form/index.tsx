"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
// React Query
import { useQueryFetchAPI } from "../../utils/hooks/fetchInfoFromAPI";
// interface
import { FormData } from "../../utils/interfaces/formDataInterface";
import { initialFormData } from "../../utils/interfaces/formDataInterface";
// local imports
import InputForm from "../../screens/InputForm";
import Error from "../../screens/Error";
import { usePostAPI } from "../../utils/hooks/postInfoToAPI";
import Loading from "../../screens/Loading";

const UserProfileForm: React.FC = () => {
  const { data, isLoading, isError, error } = useQueryFetchAPI();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [openTooster, setOpenTooster] = useState<boolean>(false);

  const mutation = usePostAPI({
    onSuccess: (data) => {
      console.log(data);
      setOpenTooster(true);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(formData);

      console.log("API request successful!");
    } catch (error) {
      console.error("API request error:", error);
    }
    console.log(formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      uploadedFile: file,
    });
  };

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <InputForm
      handleSubmit={handleSubmit}
      handleFileChange={handleFileChange}
      handleChange={handleChange}
      formData={data}
      openTooster={openTooster}
    />
  );
};

export default UserProfileForm;
