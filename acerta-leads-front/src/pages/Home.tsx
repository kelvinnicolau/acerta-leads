import React, { useEffect, useState } from 'react';
import { HomeContainer, Header, Title, ButtonContainer, SearchContainer, StyledListItem } from '../styles/HomeStyles';
import { ToastContainer } from 'react-toastify';
import { Lead } from '../interfaces/Home/IHome';
import ButtonNewLead from '../components/buttons/ButtonNewLead';
import LeadSearch from '../components/lead-search/LeadSearch';

const Home: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  // Função para buscar leads da API
  const fetchLeads = async () => {
    try {
      // const response = await api.get('/leads');
      // setLeads(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados', error);
    }
  };

  // useEffect para carregar os leads ao montar o componente
  useEffect(() => {
    fetchLeads();
  }, []);

  const handleSearch = (searchResults: Lead[]) => {
    setLeads(searchResults);
  };

  return (
    <HomeContainer>
      <Header>
        <Title>Consulta de Leads</Title>
        <ButtonContainer>
          <ButtonNewLead />
        </ButtonContainer>
      </Header>
      <LeadSearch onSearch={handleSearch} />
      <SearchContainer>
      <StyledListItem>
        {leads.length > 0 ? (
          leads.map((lead) => (
            <li key={lead.id}>
              {lead.name} - {lead.email}
            </li>
          ))
        ) : (
          <li>Nenhum resultado encontrado</li>
        )}
      </StyledListItem>
      </SearchContainer>
      <ToastContainer />
    </HomeContainer>
  );
};

export default Home;
