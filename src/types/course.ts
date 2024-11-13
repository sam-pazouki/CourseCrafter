export interface CourseFormData {
  startDate: string;
  endDate: string;
  videoSize: number;
  title: string;
  description: string;
}

export interface Course {
  category: string;
  name: any;
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  videoSize: number;
  videos: Video[];
}

export interface Video {
  id: string;
  title: string;
  size: number;
}
