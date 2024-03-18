import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const MyCalendar = () => {
    const localizer = momentLocalizer(moment);
    const [view, setView] = useState('month'); 
    const [showEventForm, setShowEventForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSelectSlot = (slotInfo) => {
        setSelectedDate(slotInfo.start);
        setShowEventForm(true);
    }

    const onViewChange = view => {
        setView(view); 
    };




    return (
        <div>
            <div>
                
                <button onClick={() => onViewChange('month')}>Mes</button>
                <button onClick={() => onViewChange('week')}>Semana</button>
                <button onClick={() => onViewChange('day')}>Día</button>
            </div>
            <Calendar
                localizer={localizer}
                events={[]} 
                startAccessor="start"
                endAccessor="end"
                views={['month', 'week', 'day']} 
                view={view} 
                onView={onViewChange}
                style={{ width: "90vw", height: "77vh", fontSize: "1.2rem" }} // Estilos del calendario
                onSelectSlot={handleSelectSlot}
            />

            {showEventForm && (
                <div className='event-form'>
                    <h2>Create Event for {moment(selectedDate).format("MMMM Do YYYY")}</h2>
                    {}
                    <button onClick={() => setShowEventForm(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default MyCalendar;