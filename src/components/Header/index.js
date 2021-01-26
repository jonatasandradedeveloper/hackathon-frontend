import React from 'react';
import { Container, Column, List, Link } from './styles';

function Header() {
  return(
      <Container>
       <Column>
         <List>
          <Link href="/">Home</Link>
          <Link href="/categories">Categorias</Link>
         </List>
       </Column> 
      </Container>
  );
}

export default Header;