import styled from 'styled-components';
import { FirstStep } from './components/FirstStep';
import { SecondStep } from './components/SecondStep';
import { SuccesScreen } from './components/SuccesScreen';
import logo from './icons/logo.svg';
import { useState } from 'react';

export const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: null,
    stepId: 'authData',
  });

  const saveFirstStepData = (email, password) => {
    setFormData((other) => {
      return { ...other, email, password, stepId: 'personalData' };
    });
  };

  const saveSecondStepData = (firstName, lastName, birthDate) => {
    setFormData((other) => {
      return {
        ...other,
        firstName,
        lastName,
        birthDate,
        stepId: 'successScreen',
      };
    });
  };

  const getCurrentStep = (stepId) => {
    switch (stepId) {
      case 'authData':
        return <FirstStep onFormComplete={saveFirstStepData} />;
      case 'personalData':
        return <SecondStep onFormComplete={saveSecondStepData} />;
      case 'successScreen':
        return <SuccesScreen formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledImg src={logo} />
        <StyledParagraph>
          Developed with <StyledSpan>♥</StyledSpan> by Monterail
        </StyledParagraph>
      </StyledHeader>
      <StyledMain>{getCurrentStep(formData.stepId)}</StyledMain>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 0px;
  position: relative;
  height: 1050px;
  background: #ffffff;
`;
const StyledHeader = styled.header`
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 48px;

  height: 80px;
  background: #ffffff;
  @media (max-width: 375px) {
    justify-content: center;
  }
`;
const StyledImg = styled.img`
  height: 40px;
`;
const StyledParagraph = styled.p`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  text-align: right;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #343541;

  @media (max-width: 375px) {
    display: none;
  }
`;
const StyledSpan = styled.span`
  font-size: 20px;
  color: red;
`;
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
