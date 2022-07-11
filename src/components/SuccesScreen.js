import styled from 'styled-components';

export const SuccesScreen = ({ formData }) => {
  return (
    <StyledWrapper>
      <StyledHeader>Good job {formData.firstName}!</StyledHeader>
      <StyledMessage>
        <p>
          We have sent an email to <span>{formData.email}</span>.
        </p>
        <p>
          Make sure to click the link from the message to activate your account.
        </p>
      </StyledMessage>
      <StyledGoTo>Go to homepage</StyledGoTo>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledHeader = styled.h1`
  /* width: 603px; */
  margin-bottom: 50px;
  font-family: 'Eczar';
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 82px;
  letter-spacing: -0.01em;
  color: #343541;
`;
const StyledMessage = styled.div`
  margin-bottom: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #292a33;
`;

const StyledGoTo = styled.button`
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
