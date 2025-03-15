import styled from 'styled-components';

// 🏢 Admin Dashboard Container
export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
`;

// 📌 Main Content Area
export const Content = styled.div`
  flex: 1;
  padding: 30px;
  margin-left: 250px; /* Space for sidebar */
  transition: margin-left 0.3s ease-in-out;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  height: calc(100vh - 60px);
  overflow-y: auto;
  color: #222; /* Darker text */
`;

// 🎯 Top & Bottom Content Sections
export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  align-items: flex-start;
`;

export const BottomContent = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: stretch;
`;

// 🔷 Section Container
export const Section = styled.section`
  margin-bottom: 25px;
  padding: 20px;
  border: 2px solid #5c67f2; /* New blue border */
  border-radius: 12px;
  background: #f4f4f9;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #4b54e5;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(91, 92, 231, 0.2);
  }
`;

// 🔖 Section Title
export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #3a3d98; /* Deep blue */
  border-bottom: 3px solid #7b83eb;
  padding-bottom: 12px;
`;

// 🃏 Card Container
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

// 🏷️ Individual Card
export const Card = styled.div`
  color: #fff;
  background: linear-gradient(135deg, #7b83eb, #4b54e5);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s;
  cursor: pointer;
  max-width: 300px;
  border-left: 8px solid #1e2bb1;

  &:hover {
    transform: translateY(-8px) rotate(1deg);
    box-shadow: 0 12px 25px rgba(30, 43, 177, 0.3);
  }
`;

// 🔤 Card Title
export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #f9f9f9;
`;

// 📝 Card Content
export const CardContent = styled.p`
  font-size: 16px;
  color: #fff;
  opacity: 0.9;
`;

// 🏫 Student & Teacher Dashboards
export const StudentDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100vh;
  overflow-y: auto;
  color: #fff;
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 100vh;
  overflow-y: auto;
  justify-content: flex-start;
  color: #fff;
  background: linear-gradient(135deg, #36d1dc, #5b86e5);
`;

// 🎭 Events Container
export const Events = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  align-items: flex-start;
`;

// 📅 Individual Event
export const Event = styled.div`
  padding: 20px;
  border: 2px solid #6c63ff;
  border-radius: 12px;
  background: #f4f4f9;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #4943b5;
    transform: scale(1.02);
  }

  p {
    color: #222;
  }
`;

// 🔵 Logo
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

// 📌 Header
export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background: #222;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  justify-content: space-between;
  color: white;
`;

// 🏷️ Header Title
export const HeaderTitle = styled.h1`
  font-size: 28px;
  margin-left: 10px;
`;

// 📜 Announcement List
export const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

// 📢 Announcement Item
export const AnnouncementItem = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 2px solid #4943b5;
  border-radius: 12px;
  background: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #6c63ff;
    transform: translateX(5px);
  }
`;

// 📌 Announcement Content
export const AnnouncementContent = styled.p`
  font-size: 16px;
  margin: 0;
  color: #222;
  line-height: 1.6;
`;

