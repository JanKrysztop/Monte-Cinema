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
          Developed with <span>♥</span> by Monterail
        </StyledParagraph>
      </StyledHeader>
      <StyledMain>{getCurrentStep(formData.stepId)}</StyledMain>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  min-width: 1440px;
  height: 1050px;
  background: #ffffff;
`;
const StyledHeader = styled.header`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 48px;
  gap: 311px;
  width: 95%;
  height: 98px;
  background: #ffffff;
`;
const StyledImg = styled.img`
  height: 60px;
`;
const StyledParagraph = styled.p`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: right;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #343541;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-self: center;
`;
