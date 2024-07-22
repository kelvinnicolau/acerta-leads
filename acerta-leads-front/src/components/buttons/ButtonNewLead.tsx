import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Button } from '../../styles/ButtonLeadsStyles';

const ButtonNewLead: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/lead-form");
  };

  return (
    <Button onClick={handleClick}>
      Novo Lead
      <FiPlus style={{ marginLeft: '7px' }} />
    </Button>
  );
};

export default ButtonNewLead;
