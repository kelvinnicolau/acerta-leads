import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  Header,
  Title,
  ButtonContainer,
  SearchContainer,
  TitlesTable,
  ListItem,
  ButtonGroup,
  IconButton,
} from "../styles/HomeStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Lead } from "../interfaces/Home/IHome";
import ButtonNewLead from "../components/buttons/ButtonNewLead";
import LeadSearch from "../components/lead-search/LeadSearch";
import {
  fetchLeadsFromFirebase,
  deleteLeadFromFirebase,
} from "../services/firestoreService";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const navigate = useNavigate();

  // Função para buscar leads da API
  const fetchLeads = async () => {
    try {
      const leadsList = await fetchLeadsFromFirebase();
      setLeads(leadsList);
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    }
  };

  // useEffect para carregar os leads ao montar o componente
  useEffect(() => {
    fetchLeads();
  }, []);

  const handleSearch = (searchResults: Lead[]) => {
    setLeads(searchResults);
  };

  const handleEdit = (id: string) => {
    navigate(`/lead-form/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteLeadFromFirebase(id);
      setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== id));
      toast.success("Lead excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir lead", error);
      toast.error("Erro ao excluir lead");
    }
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
        <TitlesTable>
          <div>
            <p>Nome</p>
            <p>CPF</p>
            <p>E-mail</p>
            <p>Telefone</p>
          </div>
        </TitlesTable>
        {leads.length > 0 ? (
          leads.map((lead) => (
            <ListItem key={lead.id}>
              <div>
                <p>{lead.name}</p>
                <p>{lead.cpf}</p>
                <p>{lead.email}</p>
                <p>{lead.phone}</p>
              </div>
              <ButtonGroup>
                <IconButton onClick={() => handleEdit(lead.id)}>
                  <FiEdit />
                </IconButton>
                <IconButton onClick={() => handleDelete(lead.id)}>
                  <FiTrash />
                </IconButton>
              </ButtonGroup>
            </ListItem>
          ))
        ) : (
          <p>Nenhum resultado encontrado</p>
        )}
      </SearchContainer>
      <ToastContainer />
    </HomeContainer>
  );
};

export default Home;
