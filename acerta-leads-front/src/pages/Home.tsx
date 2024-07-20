import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { HomeContainer, Header, Title, ButtonContainer } from '../styles/HomeStyles';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Lead } from '../interfaces/Home/IHome';
import ButtonNewLead from '../components/buttons/ButtonNewLead';

const Home: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    api.get('/leads')
      .then(response => setLeads(response.data))
      .catch(error => toast.error('Erro ao buscar dados'));
  }, []);

  return (
    <HomeContainer>
      <Header>
        <Title>Consulta de Leads</Title>
        <ButtonContainer>
          <ButtonNewLead />
        </ButtonContainer>
      </Header>
      <ul>
        {leads.map(lead => (
          <li key={lead.id}>
            {lead.name} - {lead.email}
          </li>
        ))}
      </ul>
      <Link to="/about">Go to About</Link>
      <ToastContainer />
    </HomeContainer>
  );
};

export default Home;
