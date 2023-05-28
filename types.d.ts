type Staff = {
  imageUrl: string;
  name: string;
  description: string;
  jobTitle: string;
  twitterUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
};

type Game = {
  name: string;
  downloadNumber: string;
  image: string;
  video: string;
  appStoreUrl: string;
  googlePlayUrl: string;
  onClick?: (g: any) => void;
  selected?: boolean;
};

type Links = { label: string; path: string; targetSegment: string? };
