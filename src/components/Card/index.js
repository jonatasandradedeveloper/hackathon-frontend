import React from 'react';
import { Link } from "react-router-dom";
import { FiTrash2, FiEye } from "react-icons/fi";
import { Container, Content, Title, Sub, ContainerButton, ButtonDelete } from './styles';

function Card(props){
  return(
      <Container>
        <Content>
          <Title>{props.name}</Title>
          <Sub>{props.description}</Sub>
        
        <ContainerButton>
          <Link to={`/products/categoria/${props.id}`}>
            <FiEye
              size={30}
              color="blue"
            />
          </Link>
            <ButtonDelete className="btnTrash">
              <FiTrash2
                onClick={props.onClick}
                size={30}
                color="red"
              />
            </ButtonDelete>
        </ContainerButton>

        </Content>

      </Container>
  );
}

export default Card;