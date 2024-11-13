import React from 'react'; 
import { Box, Heading, Text } from '@chakra-ui/react'; 
import { Course } from '../types/course'; 

interface CourseReportPageProps {
  courses: Course[]; 
}
const CourseReportPage: React.FC<CourseReportPageProps> = ({ courses }) => {
  const calculateTotalSize = (videos: { size: number }[]): number =>
    videos.reduce((total: number, video: { size: number }) => total + video.size, 0);
  return (
    <Box p={5}> 
      <Heading mb={5}>Course Report</Heading> 
      
      {courses.map(course => (
        <Box key={course.id} p={4} shadow="md" borderWidth="1px" borderRadius="lg" mb={4}> 
          <Heading fontSize="lg">{course.title}</Heading> 
          <Text>Total Video Size: {calculateTotalSize(course.videos)} MB</Text> 
        </Box>
      ))}
    </Box>
  );
};

export default CourseReportPage;
