import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import '../../../components/FormField/style.css'

function CadastroCategoria() {
  const valoresIniciais = {
    'nome': '',
    'descricao': '',
    'cor': '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

function setValue(key, value) {
  setValues({
    ...values,
    [key]: value,
  })
}


function handleChange(eventInfo) {
  setValue(
    eventInfo.target.getAttribute('name'),
    eventInfo.target.value
  )
}


  return(
  <PageDefault>
    <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField
          tag="input"
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          tag="textarea"
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          tag="input"
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button className='ButtonCadastrar'>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
    
		<Link to='/'>
			Ir para home
		</Link>
  </PageDefault>
)}

export default CadastroCategoria;
