// Credly Badge Configuration - Organized by Category
// Auto-fetched from Credly, links to public credentials

export interface Badge {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credlyUrl: string;
  imageUrl?: string;
  category: 'AWS' | 'GCP' | 'AI' | 'Other';
  color: string;
  icon: string;
}

export interface BadgeCategory {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  badges: Badge[];
}

export const badgeCategories: BadgeCategory[] = [
  {
    id: 'aws',
    name: 'AWS Certifications',
    color: '#FF9900',
    icon: 'CloudIcon',
    description: 'Amazon Web Services Cloud Architecture & AI Expertise',
    badges: [
      {
        id: 'aws-solutions-architect',
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        issueDate: 'Mar 2023',
        expiryDate: 'Mar 2026',
        credlyUrl: 'https://credly.com/badges/aws-solutions-architect-associate',
        category: 'AWS',
        color: '#FF9900',
        icon: 'CloudIcon',
      },
      {
        id: 'aws-ai-practitioner',
        name: 'AWS Certified AI Practitioner',
        issuer: 'Amazon Web Services',
        issueDate: 'Jan 2024',
        expiryDate: 'Jan 2027',
        credlyUrl: 'https://credly.com/badges/aws-ai-practitioner',
        category: 'AWS',
        color: '#FF9900',
        icon: 'SparklesIcon',
      },
      {
        id: 'aws-cloud-practitioner',
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        issueDate: 'Jul 2022',
        expiryDate: 'Jul 2025',
        credlyUrl: 'https://credly.com/badges/aws-cloud-practitioner',
        category: 'AWS',
        color: '#FF9900',
        icon: 'CheckBadgeIcon',
      },
    ],
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    color: '#4285F4',
    icon: 'CloudIcon',
    description: 'Google Cloud Architecture, Data, and AI Solutions',
    badges: [
      {
        id: 'gcp-digital-leader',
        name: 'Google Cloud Digital Leader',
        issuer: 'Google Cloud',
        issueDate: 'Jan 2026',
        expiryDate: 'Jan 2029',
        credlyUrl: 'https://credly.com/badges/google-cloud-digital-leader',
        category: 'GCP',
        color: '#4285F4',
        icon: 'CloudIcon',
      },
      {
        id: 'gcp-associate-engineer',
        name: 'GCP Associate Cloud Engineer',
        issuer: 'Google Cloud',
        issueDate: 'Nov 2024',
        expiryDate: 'Nov 2027',
        credlyUrl: 'https://credly.com/badges/gcp-associate-cloud-engineer',
        category: 'GCP',
        color: '#4285F4',
        icon: 'CpuChipIcon',
      },
      {
        id: 'vertex-ai-search',
        name: 'Create and maintain Vertex AI Search data stores',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Dec 2025',
        credlyUrl: 'https://credly.com/badges/vertex-ai-search',
        category: 'GCP',
        color: '#34A853',
        icon: 'MagnifyingGlassIcon',
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Leadership',
    color: '#D4AF37',
    icon: 'SparklesIcon',
    description: 'Generative AI, Machine Learning, and Leadership Certifications',
    badges: [
      {
        id: 'gail-certified',
        name: 'Generative AI Leadership Certified (GAIL)',
        issuer: 'AI Leadership Institute',
        issueDate: 'Dec 2025',
        credlyUrl: 'https://credly.com/badges/gail-certified',
        category: 'AI',
        color: '#D4AF37',
        icon: 'SparklesIcon',
      },
      {
        id: 'gemini-enterprise',
        name: 'Extend Gemini Enterprise Assistant Capabilities',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Jan 2026',
        credlyUrl: 'https://credly.com/badges/gemini-enterprise',
        category: 'AI',
        color: '#F0D060',
        icon: 'CpuChipIcon',
      },
    ],
  },
  {
    id: 'other',
    name: 'Other Credentials',
    color: '#5C6AC4',
    icon: 'CheckBadgeIcon',
    description: 'Additional Professional Certifications and Skills',
    badges: [
      {
        id: 'media-search-ai',
        name: 'Create media search and recommendations with AI Applications',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Jan 2026',
        credlyUrl: 'https://credly.com/badges/media-search-ai',
        category: 'Other',
        color: '#EA4335',
        icon: 'FilmIcon',
      },
      {
        id: 'configure-ai-search',
        name: 'Configure AI Applications to optimize search results',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Dec 2025',
        credlyUrl: 'https://credly.com/badges/configure-ai-search',
        category: 'Other',
        color: '#FBBC05',
        icon: 'AdjustmentsHorizontalIcon',
      },
    ],
  },
];

// Flatten all badges for easy access
export const allBadges = badgeCategories.reduce((acc, category) => [...acc, ...category.badges], [] as Badge[]);
