//Importar o React
import React, {useState} from 'react';
import {Container } from 'reactstrap';

//Criar a classe com o nome Headers
function Article(props){
  
        return(
            <div>

          
        <Container fluid>
          <h1 className="display-3">Titulo do artigo</h1>
          <p className="lead">Conteúdo do artigo. This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
     


        </div>
        );
    }


//Exportar o componente
export default Article;