import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {
  StudentDashboardContainer,
  Content,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  Events,
  Event,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from '../../styles/DashboardStyles';

const StudentDashboard = () => {
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [assignments, setAssignments] = useState([]);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Function to fetch announcements from the backend
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  // Function to fetch assignments from the backend
  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
      setAssignments(response.data.assignments || []);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchAssignments();
  }, []);

  return (
    <StudentDashboardContainer>
      <Sidebar />
      <Content>
        {/* Overview Section */}
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Assignments</CardTitle>
              <CardContent>{assignments.length}</CardContent>
            </Card>
            <Card>
              <CardTitle>Events</CardTitle>
              <CardContent>{events.length}</CardContent>
            </Card>
            <Card>
              <CardTitle>Announcements</CardTitle>
              <CardContent>{announcements.length}</CardContent>
            </Card>
          </CardContainer>
        </Section>

        {/* Announcements Section */}
        <Section>
          <SectionTitle>Announcements</SectionTitle>
          <AnnouncementList>
            {announcements.length ? (
              announcements.map((announcement) => (
                <AnnouncementItem key={announcement._id}>
                  <AnnouncementContent>{announcement.announcement}</AnnouncementContent>
                </AnnouncementItem>
              ))
            ) : (
              <p>No announcements available.</p>
            )}
          </AnnouncementList>
        </Section>

        {/* Assignments Section */}
        <Section>
          <SectionTitle>Assignments</SectionTitle>
          <Events>
            {assignments.length ? (
              assignments.map((assignment) => (
                <Event key={assignment._id}>
                  <strong>{assignment.title}</strong>
                  <p>Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                </Event>
              ))
            ) : (
              <p>No assignments available.</p>
            )}
          </Events>
        </Section>

        {/* Events Section */}
        <Section>
          <SectionTitle>Events</SectionTitle>
          <Events>
            {events.length ? (
              events.map((event) => (
                <Event key={event._id || event.name}>
                  <p><strong>Event:</strong> {event.event || event.name}</p>
                  <strong>{event.title}</strong>
                  <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                 
                </Event>
              ))
            ) : (
              <p>No events available.</p>
            )}
          </Events>
        </Section>
      </Content>
    </StudentDashboardContainer>
  );
};

export default StudentDashboard;




