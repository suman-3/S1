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
  position: string;
  org: string;
}

export interface tracks_type {
  org: string;
  track: string;
  description: string;
  prize: string;
  img: string;
}

export interface prizepool_type {
  img: string;
  position: string;
  description: string;
  price: string;
}

export interface timeline_type {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}
