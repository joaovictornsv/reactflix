import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepositories from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { values, handleChange } = useForm({
    titulo: 'Vídeo Padrão',
    ulr: 'https://youtube.com',
    catergoria: 'Front End',
  });
  return (

    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        videosRepositories.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Nome do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
