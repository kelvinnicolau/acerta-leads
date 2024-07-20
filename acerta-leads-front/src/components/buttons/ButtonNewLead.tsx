import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '../../styles/ButtonLeadsStyles';

const ButtonNewLead: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new-lead");
  };

  return <Button onClick={handleClick}>Novo Lead</Button>;
};

export default ButtonNewLead;