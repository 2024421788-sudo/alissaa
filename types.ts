export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  image: string;
  stats?: { label: string; value: string }[];
  impact?: string;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'Accounting Core' | 'Technical' | 'Soft Skills';
  level?: string; // e.g. "Expert", "Advanced", "Proficient"
  percentage?: number; // for visualization
  tags?: string[];
  iconName: string; // name of lucide-react icon
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  timeline: string;
  gpa: string;
  maxGpa: string;
  details: string;
  disciplines: string[];
  image: string;
  recognition?: string;
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: string; // e.g., "Award", "Certification", "Competition"
  badgeText: string;
  iconName: string;
  description: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface JourneyEvent {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
}
