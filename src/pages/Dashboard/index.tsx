import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/46817375?s=460&u=df412cf50b31b7873a5ee538020178ecef4ecac4&v=4"
            alt="Eu"
          />
          <div>
            <strong>Godoy/Linx</strong>
            <p>Easy peasy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/46817375?s=460&u=df412cf50b31b7873a5ee538020178ecef4ecac4&v=4"
            alt="Eu"
          />
          <div>
            <strong>Godoy/Linx</strong>
            <p>Easy peasy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/46817375?s=460&u=df412cf50b31b7873a5ee538020178ecef4ecac4&v=4"
            alt="Eu"
          />
          <div>
            <strong>Godoy/Linx</strong>
            <p>Easy peasy</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
