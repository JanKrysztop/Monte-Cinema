import styled from 'styled-components';
import { useForm } from 'react-hook-form';

export const SecondStep = ({ onFormComplete }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ firstName, lastName, birthDate }) =>
    onFormComplete(firstName, lastName, birthDate);

  return (
    <>
      <StyledHeader>
        Great! <br />
        <StyledSpan>Now your name</StyledSpan>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="firstName">first name</StyledLabel>
        <StyledInput
          type="text"
          name="firstName"
          id="firstName"
          {...register('firstName', { required: true })}
        />
        <StyledError>
          {errors.firstName?.type === 'required' && 'This field is required'}
        </StyledError>
        <StyledLabel htmlFor="lastName">last name</StyledLabel>
        <StyledInput
          type="text"
          name="lastName"
          id="lastName"
          {...register('lastName', { required: true })}
        />
        <StyledError>
          {errors.lastName?.type === 'required' && 'This field is required'}
        </StyledError>
        <StyledLabel htmlFor="birthDate">date of birth</StyledLabel>
        <StyledInput
          type="text"
          name="birthDate"
          id="birthDate"
          placeholder="DD/MM/YYYY"
          {...register('birthDate', {
            required: true,
            pattern:
              /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
          })}
        />
        <StyledError>
          {errors.birthDate?.type === 'required' && 'This field is required'}
          {errors.birthDate?.type === 'pattern' &&
            'Enter date in DD/MM/YYYY format'}
        </StyledError>
        <p>You should be minimum 18 years old</p>
        <StyledInputContainer>
          <StyledCheckbox
            type="checkbox"
            name="privacyPolicy"
            id="privacyPolicy"
            {...register('privacyPolicy', { required: true })}
          />
          <StyledPolicy>
            I accept <a href="#">Privacy Policy</a>
          </StyledPolicy>
        </StyledInputContainer>
        <StyledError>
          {errors.privacyPolicy?.type === 'required' &&
            'You have to accept Privacy Policy to continiue'}
        </StyledError>
        <StyledButtons>
          <StyledLink href="#">Log in instead</StyledLink>
          <StyledRegister>Next Step</StyledRegister>
        </StyledButtons>
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
  margin-bottom: 150px;
  padding: 64px;
  gap: 20px;
  width: 500px;
  height: 610px;
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

const StyledInput = styled.input`
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
`;
const StyledError = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 170%;
  color: #ec1115;
`;

const StyledInputContainer = styled.div`
  display: flex;
  font-size: 18px;
`;
const StyledCheckbox = styled.input`
  transform: scale(1.5);
  margin-right: 10px;
`;
const StyledPolicy = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
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

const StyledRegister = styled.button`
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
