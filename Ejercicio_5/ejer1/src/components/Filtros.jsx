import { ButtonGroup, Button } from 'react-bootstrap';

export default function Filtros({ filtro, setFiltro }) {
  const botones = ['todas', 'alta', 'media', 'baja'];

  return (
    <ButtonGroup className="mb-3 d-flex justify-content-center">
      {botones.map(b => (
        <Button
          key={b}
          variant={filtro === b ? 'primary' : 'outline-primary'}
          onClick={() => setFiltro(b)}
        >
          {b.charAt(0).toUpperCase() + b.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
}
