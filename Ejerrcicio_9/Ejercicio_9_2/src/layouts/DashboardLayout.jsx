import { NavLink, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <aside>
        <h3>Dashboard</h3>
        <nav>
          <NavLink to="/dashboard" end>Ver tareas</NavLink><br />
          <NavLink to="/dashboard/new">Añadir tarea</NavLink>
        </nav>
      </aside>

      <section>
        <Outlet />
      </section>
    </div>
  );
}
