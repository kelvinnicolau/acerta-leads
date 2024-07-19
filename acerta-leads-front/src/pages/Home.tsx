import React, { useEffect, useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

interface Lead {
  id: number;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    api.get('/leads')
      .then(response => setLeads(response.data))
      .catch(error => toast.error('Erro ao buscar dados'));
  }, []);

  return (
    <HomeContainer>
      <h1>Home Page</h1>
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
