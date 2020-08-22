import React from 'react';

import { Container, HeaderTitle, HeaderName, UserAvatar } from './styles';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { acs } = useAuth();
  return (
    <Container>
      <HeaderTitle>
        Seja bem-vindo(a), {'\n'}
        <HeaderName>{acs.name}</HeaderName>
      </HeaderTitle>
      <UserAvatar source={{ uri: acs.avatar }} />
    </Container>
  );
};

export default Header;
