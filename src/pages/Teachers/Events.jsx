import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  EventCalendarContainer,
  Content,
  Events,
  Event,
  AddEventForm,
  EventInput,
  DateInput,
  AddEventButton,
  ErrorText,
  DeleteButton,  
} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Error fetching events');
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    if (!newEvent.trim() || !eventDate.trim()) {
      setError('Event description and date cannot be empty');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/v1/events', { event: newEvent, date: eventDate });
      setEvents([...events, response.data.event]);
      setNewEvent('');
      setEventDate('');
      setError(null);
    } catch (error) {
      console.error('Error adding event:', error);
      setError(error.response?.data?.error || 'Error adding event');
    }
  };

  // Function to delete an event
  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/events/${id}`);
      setEvents(events.filter((event) => event._id !== id));  // Remove event from state
    } catch (error) {
      console.error('Error deleting event:', error);
      setError('Error deleting event');
    }
  };

  return (
    <EventCalendarContainer>
      <Sidebar />
      <Content>
        <h1>Teachers Events</h1>
        <div>Current Time: {new Date().toLocaleString()}</div>

        {/* Form to Add New Events */}
        <AddEventForm onSubmit={addEvent}>
          <h2>Add New Event</h2>
          <EventInput
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event"
          />
          <DateInput
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <AddEventButton type="submit">Add Event</AddEventButton>
        </AddEventForm>

        {/* Error Display Section */}
        {error && <ErrorText>{error}</ErrorText>}

        {/* List of Events */}
        <Events>
          <h2>Events</h2>
          {events.length ? (
            events.map((event) => (
              <Event key={event._id}>
                {event.event} - {new Date(event.date).toLocaleDateString()}
                {/* Delete button for each event */}
                <DeleteButton onClick={() => deleteEvent(event._id)}>Delete</DeleteButton>
              </Event>
            ))
          ) : (
            <p>No events available. Add a new event to get started.</p>
          )}
        </Events>
      </Content>
    </EventCalendarContainer>
  );
};

export default EventCalendar;
