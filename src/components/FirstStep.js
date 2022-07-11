import styled from 'styled-components';
import { appendErrors, useForm } from 'react-hook-form';
import { useState } from 'react';
import eye from '../icons/eye.svg';

export const FirstStep = ({ onFormComplete }) => {
  //useForm hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => onFormComplete(email, password);
  const formValues = watch();

  //Toggling password visibilty
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <StyledHeader>
        Ahoy you! <br />
        <StyledSpan>Care to register?</StyledSpan>
      </StyledHeader>
      {/* <StyledHeader>Care to register?</StyledHeader> */}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="email">email</StyledLabel>
        <StyledEmail
          type="email"
          name="email"
          id="email"
          {...register('email', { required: true })}
        />
        <StyledLabel htmlFor="password">password</StyledLabel>
        <StyledInputContainer>
          <StyledPassword
            type={passwordShown ? 'text' : 'password'}
            name="password"
            id="password"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i,
            })}
          />
          <StyledImg src={eye} onClick={togglePasswordVisiblity} />
        </StyledInputContainer>
        {errors.password?.type === 'minLength' && 'At least 8 characters'}
        {errors.password?.type === 'pattern' && 'At least one letter'}
        {errors.password?.type === '' && 'At least one digit'}
        <p>At least 8 characters</p>
        <p>At least one letter</p>
        <p>At least one digit</p>
        <StyledButtons>
          <StyledLink href="#">Log in instead</StyledLink>
          <StyledNextStep>Next Step</StyledNextStep>
        </StyledButtons>
        {/* {formValues.email} {formValues.password} */}
      </StyledForm>
    </>
  );
};

const StyledHeader = styled.h1`
  width: 603px;
  margin-bottom: 50px;
  font-family: 'Eczar';
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 82px;
  letter-spacing: -0.01em;
  color: #343541;
`;
const StyledSpan = styled.span`
  color: gray;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 64px;
  gap: 20px;
  width: 600px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
  border-radius: 24px;
`;

const StyledLabel = styled.label`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  text-transform: uppercase;
  color: #f47073;
`;

const StyledEmail = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 10px;
  width: 472px;
  background: #f7f7f7;
  border-radius: 8px;
  font-size: 20px;
  &:hover {
    background: #e5e5e5;
  }
  &:focus {
    outline: none;
    background: rgba(47, 128, 237, 0.1);
    border: 2px solid #2f80ed;
  }
  &:invalid {
    border: 2px solid #ec1115;
  }
`;

const StyledInputContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
`;
const StyledPassword = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  gap: 10px;
  width: 472px;
  background: #f7f7f7;
  border-radius: 8px;
  font-size: 20px;
  &:hover {
    background: #e5e5e5;
  }
  &:focus {
    outline: none;
    background: rgba(47, 128, 237, 0.1);
    border: 2px solid #2f80ed;
  }
  &:invalid {
    border: 2px solid #ec1115;
  }
`;
const StyledImg = styled.img`
  height: 60px;
  position: absolute;
  right: 10px;
  top: 0px;
`;
const StyledButtons = styled.div`
  height: 500px;
  display: flex;
  align-self: center;
  align-items: center;
`;

const StyledLink = styled.a`
  /* width: 155px; */
  height: 18px;
  margin-right: 60px;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;
  color: #ec1115;
  text-decoration: none;
`;

const StyledNextStep = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  gap: 10px;
  width: 228px;
  height: 56px;
  background: #ec1115;
  color: #ffffff;
  border: none;
  border-radius: 64px;
  &:hover {
    background: #a60c0e;
  }
  &:active {
    border: 5px solid #f47073;
  }
`;
