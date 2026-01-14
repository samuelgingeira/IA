import { useNavigate } from 'react-router-dom';


export default function NewTaskPage() {
const navigate = useNavigate();


function handleSave() {
navigate('/dashboard');
}


return <button onClick={handleSave}>Guardar</button>;
}