import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export const FirstStep = ({ onFormComplete }) => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => onFormComplete(email, password);

  const formValues = watch();
  return (
    <>
      <StyledHeader>Ahoy you! Care to register?</StyledHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="email">email</StyledLabel>
        <StyledEmail
          type="email"
          name="email"
          id="email"
          {...register('email')}
        />
        <StyledLabel for="password">password</StyledLabel>
        <StyledPassword
          type="password"
          name="password"
          {...register('password')}
        />
        <div style={{ display: 'flex' }}>
          <StyledLink href="#">Log in instead</StyledLink>
          <StyledButton>Next Step</StyledButton>
        </div>
        {/* {formValues.email} {formValues.password} */}
      </StyledForm>
    </>
  );
};

const StyledHeader = styled.h1`
  width: 603px;
  height: 164px;
  font-family: 'Eczar';
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 102%;
  letter-spacing: -0.01em;
  color: #343541;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 64px;
  gap: 40px;
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
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #f47073;
`;

const StyledEmail = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 10px;
  width: 472px;
  background: #f7f7f7;
  border-radius: 8px;
`;

const StyledPassword = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 24px 24px;
  gap: 10px;
  width: 472px;
  height: 56px;
  background: #f7f7f7;
  border-radius: 8px;
`;

const StyledLink = styled.a`
  width: 155px;
  height: 18px;

  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;
  color: #ec1115;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 10px;
  width: 228px;
  height: 56px;
  background: #ec1115;
  border-radius: 64px;
`;
