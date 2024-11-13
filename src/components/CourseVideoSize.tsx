import React from 'react';
import { Video } from '../types/course'; 
interface Props {
  videos: Video[]; 
}

const CourseVideoSize: React.FC<Props> = ({ videos }) => {
  const totalSize = videos.reduce((sum, video) => sum + video.size, 0);
  return <div>Total Video Size: {totalSize} MB</div>;
};

export default CourseVideoSize;
