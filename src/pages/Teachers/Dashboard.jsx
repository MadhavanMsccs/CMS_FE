import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { 
  TeacherDashboardContainer, 
  Content, 
  Section, 
  SectionTitle, 
  CardContainer, 
  Card, 
  CardContent 
} from '../../styles/DashboardStyles';
import axios from 'axios';

const TeacherDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [metrics, setMetrics] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
  });
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(true);
  const [errorMetrics, setErrorMetrics] = useState('');
  const [errorEvents, setErrorEvents] = useState('');
  const [errorAnnouncements, setErrorAnnouncements] = useState('');

  useEffect(() => {
    fetchMetrics();
    fetchEvents();
    fetchAnnouncements();
  }, []);

  const fetchMetrics = async () => {
    setLoadingMetrics(true);
    try {
      const response = await axios.get('http://localhost:4000/api/v1/dashboard/metrics');
      setMetrics(response.data);
    } catch (error) {
      setErrorMetrics('Error fetching metrics: ' + error.message);
    } finally {
      setLoadingMetrics(false);
    }
  };

  const fetchEvents = async () => {
    setLoadingEvents(true);
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setErrorEvents('Error loading events. Please try again later.');
    } finally {
      setLoadingEvents(false);
    }
  };

  const fetchAnnouncements = async () => {
    setLoadingAnnouncements(true);
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setErrorAnnouncements('Error loading announcements. Please try again later.');
    } finally {
      setLoadingAnnouncements(false);
    }
  };

  return (
    <TeacherDashboardContainer>
      <Sidebar />
      <Content isOpen={isOpen}>
        {/* Overview Section */}
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            {loadingMetrics ? (
              <p>Loading metrics...</p>
            ) : errorMetrics ? (
              <p>{errorMetrics}</p>
            ) : (
              <>
                <Card>
                  <CardContent>Total Students: {metrics.totalStudents}</CardContent>
                </Card>
                <Card>
                  <CardContent>Total Classes: {metrics.totalClasses}</CardContent>
                </Card>
                <Card>
                  <CardContent>Total Teachers: {metrics.totalTeachers}</CardContent>
                </Card>
              </>
            )}
          </CardContainer>
        </Section>

        {/* Upcoming Events Section */}
        <Section>
          <SectionTitle>Upcoming Events</SectionTitle>
          {loadingEvents ? (
            <p>Loading events...</p>
          ) : errorEvents ? (
            <p>{errorEvents}</p>
          ) : events.length === 0 ? (
            <p>No upcoming events</p>
          ) : (
            <CardContainer>
              {events.map((event) => (
                <Card key={event._id || event.name}> {/* Use a unique ID for the key */}
                  <CardContent>
                    <p><strong>Event:</strong> {event.event || event.name}</p>
                    {event.date && <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>}
                    {event.location && <p><strong>Location:</strong> {event.location}</p>}
                    {event.description && <p><strong>Description:</strong> {event.description}</p>}
                  </CardContent>
                </Card>
              ))}
            </CardContainer>
          )}
        </Section>

        {/* Announcements Section */}
        <Section>
          <SectionTitle>Announcements</SectionTitle>
          {loadingAnnouncements ? (
            <p>Loading announcements...</p>
          ) : errorAnnouncements ? (
            <p>{errorAnnouncements}</p>
          ) : announcements.length === 0 ? (
            <p>No announcements available</p>
          ) : (
            <CardContainer>
              {announcements.map((announcement) => (
                <Card key={announcement._id}> {/* Use the unique ID for the key */}
                  <CardContent>
                    <p><strong>Announcement:</strong> {announcement.announcement}</p>
                    <p><strong>Date:</strong> {new Date(announcement.createdAt).toLocaleDateString()}</p>
                  </CardContent>
                </Card>
              ))}
            </CardContainer>
          )}
        </Section>
      </Content>
    </TeacherDashboardContainer>
  );
};

export default TeacherDashboard;
