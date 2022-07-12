import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import eye from '../icons/eye.svg';

export const FirstStep = ({ onFormComplete }) => {
  //useForm hook
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = ({ email, password }) => onFormComplete(email, password);

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
        <StyledErrors>
          <p
            style={{
              color: isSubmitted
                ? errors.password?.type === 'minLength'
                  ? 'red'
                  : 'green'
                : 'black',
            }}
          >
            At least 8 characters
          </p>
          <p
            style={{
              color: isSubmitted
                ? errors.password?.type === 'pattern'
                  ? 'red'
                  : 'green'
                : 'black',
            }}
          >
            At least one letter
          </p>
          <p
            style={{
              color: isSubmitted
                ? errors.password?.type === 'pattern'
                  ? 'red'
                  : 'green'
                : 'black',
            }}
          >
            At least one digit
          </p>
        </StyledErrors>
        <StyledButtons>
          <StyledLink href="#">Log in instead</StyledLink>
          <StyledNextStep>Next Step</StyledNextStep>
        </StyledButtons>
      </StyledForm>
    </>
  );
};

const StyledHeader = styled.h1`
  margin-bottom: 50px;
  font-family: 'Eczar';
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 82px;
  letter-spacing: -0.01em;
  color: #343541;

  @media (max-width: 375px) {
    font-size: 40px;
    line-height: 42px;
  }
`;
const StyledSpan = styled.span`
  color: gray;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  background: #ffffff;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 375px) {
    padding: 64px;
    width: 600px;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
  }
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
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 10px;
  width: 100%;
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
  width: 100%;
`;
const StyledPassword = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  gap: 10px;
  width: 100%;
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
const StyledErrors = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
`;
const StyledButtons = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;
  gap: 40px;

  @media (min-width: 375px) {
    flex-direction: row;
  }
`;

const StyledLink = styled.a`
  height: 18px;
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;
  color: #ec1115;
  text-decoration: none;
  width: 100%;
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
  height: 56px;
  background: #ec1115;
  color: #ffffff;
  border: none;
  border-radius: 64px;
  width: 100%;
  &:hover {
    background: #a60c0e;
  }
  &:active {
    border: 5px solid #f47073;
  }

  @media (min-width: 375px) {
    flex-grow: 1;
  }
`;
