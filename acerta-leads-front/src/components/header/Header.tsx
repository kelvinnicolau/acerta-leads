import React from 'react';
import { HeaderContainer, Logo } from '../../styles/HeaderStyles';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
