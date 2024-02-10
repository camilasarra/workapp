import React, { useState } from 'react';
import { Calendar, momentLocalizer, dayjsLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from "dayjs";

const MyCalendar = () => {
    const localizer = momentLocalizer(moment);
    const [view, setView] = useState('month'); // Estado para controlar la vista actual
  
    const onViewChange = view => {
      setView(view); // Cambiar la vista actual
    };
  
    return (
      <div>
        <div>
          {/* Botones para cambiar entre las vistas */}
          <button onClick={() => onViewChange('month')}>Mes</button>
          <button onClick={() => onViewChange('week')}>Semana</button>
          <button onClick={() => onViewChange('day')}>Día</button>
        </div>
        <Calendar
          localizer={localizer}
          events={[]} // Aquí irían tus eventos
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']} // Vistas disponibles
          view={view} // Vista actual
          onView={onViewChange} 
          style={{ width: "90vw", height: "77vh", fontSize: "1.2rem" }}// Manejador para cambiar la vista
        />
      </div>
    );
  };
  
  export default MyCalendar;