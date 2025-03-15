import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  AnnouncementContainer, 
  Content, 
  Title, 
  AnnouncementForm, 
  FormGroup, 
  Label, 
  TextArea, 
  Button, 
  AnnouncementList, 
  AnnouncementItem, 
  AnnouncementContent, 
  DeleteButton,
  Select
} from '../../styles/AnnouncementStyles';

const CheckAnnouncementSection = () => {
  const [announcement, setAnnouncement] = useState('');
  const [selectedClass, setSelectedClass] = useState('Select Class');
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch announcements from the server
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements);
      setError(null); // Reset any previous errors
    } catch (error) {
      console.error('Error fetching announcements:', error);
      setError('Failed to fetch announcements');
      toast.error('Failed to fetch announcements'); // Display error toast
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Function to handle sending new announcements
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedClass === 'Select Class') {
      toast.warn('Please select a valid class.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/api/v1/announcements', {
        announcement: announcement,
        class: selectedClass,
      });
      console.log('Announcement sent:', response.data);
      setAnnouncement('');
      fetchAnnouncements(); // Refresh the announcements list
      setError(null); // Reset any previous errors
      toast.success('Announcement sent successfully!'); // Display success toast
    } catch (error) {
      console.error('Error sending announcement:', error);
      setError('Error sending announcement');
      toast.error('Error sending announcement'); // Display error toast
    }
  };

  // Function to delete an announcement by its ID
  const deleteAnnouncement = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/announcements/${id}`);
      console.log(`Announcement with ID: ${id} deleted`);
      fetchAnnouncements(); // Refresh the announcements list after deletion
      setError(null); // Reset any previous errors
      toast.success('Announcement deleted successfully!'); // Display success toast
    } catch (error) {
      console.error('Error deleting announcement:', error);
      setError('Error deleting announcement');
      toast.error('Error deleting announcement'); // Display error toast
    }
  };

  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        {/* Display error message if any */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <AnnouncementForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="class">Class:</Label>
            <Select
              id="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              aria-placeholder='Select Class'
              required
            >
              <option value="Select Class">Select Class</option>
              <option value="MSC CS">II MSC CS</option>
            <option value="MSC CS">I MSC CS</option>
            <option value="MCA">II MCA</option>
            <option value="MCA">I MCA</option>
            <option value="BSC CS">III  BSC CS</option>
            <option value="BSC CS">II  BSC CS</option>
            <option value="BSC CS">I  BSC CS</option>
            <option value="BCA">III BCA</option>
            <option value="BCA">II BCA</option>
            <option value="BCA">I BCA</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="announcement">Announcement:</Label>
            <TextArea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              cols={50}
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>

        <h2>Announcements</h2>
        <AnnouncementList>
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
              <AnnouncementItem key={announcement._id}>
                <AnnouncementContent>
                  <strong>Class:</strong> {announcement.class}<br />
                  {announcement.announcement}
                </AnnouncementContent>
                <DeleteButton onClick={() => deleteAnnouncement(announcement._id)}>Delete</DeleteButton>
              </AnnouncementItem>
            ))
          ) : (
            <p>No announcements available.</p>
          )}
        </AnnouncementList>
      </Content>
      <ToastContainer /> {/* ToastContainer for displaying notifications */}
    </AnnouncementContainer>
  );
};

export default CheckAnnouncementSection;
