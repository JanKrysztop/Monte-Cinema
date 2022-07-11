import React from 'react';
import { useForm } from 'react-hook-form';

export const SecondStep = ({ onFormComplete }) => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = ({
    firstName = 'Jan',
    lastName = 'K',
    birthDate = '2022-06-07',
  }) => onFormComplete(firstName, lastName, birthDate);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Second step
      <button>Submit</button>
    </form>
  );
};
