import React, { useState } from "react";
import api from "../../services/api";
import { Lead } from "../../interfaces/Home/IHome";
import {
  SearchContainer,
  FieldsContainer,
  FieldContainer,
  Label,
  Input,
  ButtonContainer,
  ClearButton,
  Button,
  Form,
} from "../../styles/LeadSearchStyles";
import cpfMask from "../../utils/cpfMask";

interface LeadSearchProps {
    onSearch: (searchResults: Lead[]) => void;
  }

  const LeadSearch: React.FC<LeadSearchProps> = ({ onSearch }) => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");

  const handleSearch = async () => {
    try {
      const response = await api.get("/leads", {
        params: {
          cpf,
          name,
        },
      });
      onSearch(response.data); // Passar os resultados para o componente pai
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    }
  };

  const handleClear = () => {
    setCpf("");
    setName("");
    onSearch([]); // Limpar resultados no componente pai
  };

  return (
    <SearchContainer>
      <Form>
        <FieldsContainer>
          <FieldContainer>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              type="text"
              placeholder="Digite o CPF do cliente"
              value={cpfMask(cpf)}
              onChange={(e) => setCpf(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="name">Nome do Cliente</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite o nome do cliente"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FieldContainer>
        </FieldsContainer>
        <ButtonContainer>
          <ClearButton onClick={handleClear}>Limpar tudo</ClearButton>
          <Button onClick={handleSearch}>Filtrar</Button>
        </ButtonContainer>
      </Form>
    </SearchContainer>
  );
};

export default LeadSearch;
