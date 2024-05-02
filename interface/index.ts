export interface faq_type {
  key: number;
  question: string;
  answer: string;
}

export interface navContents_type {
  key: number;
  label: string;
  path: string;
}

export interface organizer_type {
  id: number;
  name: string;
  img_name: string;
  category: string;
  role: string;
  linkedin: string;
  twitter: string;
}

export interface tracks_type {
  img: string;
  title: string;
  icon: React.ElementType;
}