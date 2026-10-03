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
        credlyUrl: 'https://www.credly.com/badges/4a05b1d0-bf8c-4f48-8980-6a89e5914f1b/public_url',
        category: 'AWS',
        color: '#FF9900',
        icon: 'CloudIcon',
      },
      {
        id: 'aws-cloudops-engineer',
        name: 'AWS Certified CloudOps Engineer – Associate',
        issuer: 'Amazon Web Services',
        issueDate: 'Aug 2026',
        expiryDate: 'Aug 2029',
        credlyUrl: 'https://www.credly.com/badges/fcc9f1f0-8e94-4d3b-965a-b86b7efc34de/public_url',
        category: 'AWS',
        color: '#FF9900',
        icon: 'CloudIcon',
      },
      {
        id: 'aws-GenAI-Essentials',
        name: 'AWS Partner: Generative AI Essentials',
        issuer: 'Amazon Web Services',
        issueDate: 'Oct 2026',
        credlyUrl: 'https://www.credly.com/badges/e0cbb259-36a3-4f7d-a706-8ce88a5a0fe0/public_url',
        category: 'AWS',
        color: '#FF9900',
        icon: 'CloudIcon',
      },
    ],
  },
  {
    id: 'gcp',
    name: 'Google Cloud Certifications',
    color: '#4285F4',
    icon: 'CloudIcon',
    description: 'Google Cloud Architecture, Data, and AI Solutions',
    badges: [
      {
        id: 'Gen-AI-leader',
        name: 'Generative AI Leader Certification',
        issuer: 'Google Cloud',
        issueDate: 'Dec 2025',
        expiryDate: 'Dec 2028',
        credlyUrl: 'https://www.credly.com/badges/fa7e5625-f126-4668-b95a-5f089d714fb4/public_url',
        category: 'GCP',
        color: '#4285F4',
        icon: 'CloudIcon',
      },
      {
        id: 'GCP-Digital-leader',
        name: 'Cloud Digital Leader Certification',
        issuer: 'Google Cloud',
        issueDate: 'Jan 2026',
        expiryDate: 'Jan 2029',
        credlyUrl: 'https://www.credly.com/badges/1872383e-656b-4e7b-a735-9518d301613c/public_url',
        category: 'GCP',
        color: '#4285F4',
        icon: 'CloudIcon',
      },
    ],
  },
  {
    id: 'Azure',
    name: 'Microsoft Azure Certifications',
    color: '#0078D4',
    icon: 'CloudIcon',
    description: 'Azure Cloud Architecture, Data, and AI Solutions',
    badges: [
      {
        id: 'Azure Fundamentals',
        name: 'Microsoft Certified: Azure Fundamentals',
        issuer: 'Azure',
        issueDate: 'Mar 2021',
        credlyUrl: 'https://www.credly.com/badges/60c09e04-17e2-4042-85a1-0b410063ad3a/public_url',
        category: 'Azure',
        color: '#0078D4',
        icon: 'CloudIcon',
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Leadership Certifications',
    color: '#D4AF37',
    icon: 'SparklesIcon',
    description: 'Generative AI, Machine Learning, and Leadership Certifications',
    badges: [
      {
        id: 'Gemini',
        name: 'Build with Gemini',
        issuer: 'Google Cloud',
        issueDate: 'Sep 2026',
        credlyUrl: 'https://www.credly.com/badges/69cda056-bb49-41fb-b184-92436fd19753/public_url',
        category: 'AI',
        color: '#D4AF37',
        icon: 'SparklesIcon',
      },
      {
        id: 'gemini-enterprise',
        name: 'Extend Gemini Enterprise Assistant Capabilities',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Jan 2026',
        credlyUrl: 'https://www.credly.com/badges/4dd5360b-7691-4cb3-930c-6d6c374e17b4/public_url',
        category: 'AI',
        color: '#D4AF37',
        icon: 'SparklesIcon',
      },
      {
        id: 'media-search-ai',
        name: 'Create media search and recommendations with AI Applications',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Jan 2026',
        credlyUrl: 'https://www.credly.com/badges/84c2fa50-3bba-41ca-bec2-4238ec446768/public_url',
        category: 'Other',
        color: '#D4AF37',
        icon: 'SparklesIcon',
      },
      {
        id: 'Build-search-recommendations-applications-ai',
        name: 'Build search and recommendations applications with AI Applications',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Dec 2025',
        credlyUrl: 'https://www.credly.com/badges/5217da6d-7dc5-4379-a4e6-176f7530ade0/public_url',
        category: 'Other',
        color: '#D4AF37',
        icon: 'SparklesIcon',
      },
      {
        id: 'Vertex AI',
        name: 'Create and maintain Vertex AI Search data stores',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Dec 2025',
        credlyUrl: 'https://www.credly.com/badges/b11cf7b7-b040-4705-9408-e820dfb29026/public_url',
        category: 'Other',
        color: '#D4AF37',
        icon: 'SparklesIcon',
      },
      {
        id: 'configure-ai-search',
        name: 'Configure AI Applications to optimize search results',
        issuer: 'Google Cloud Skills Boost',
        issueDate: 'Dec 2025',
        credlyUrl: 'https://www.credly.com/badges/3c9251c1-5fa2-40ec-acf7-c67faffe381b/public_url',
        category: 'Other',
        color: '#D4AF37',
        icon: 'SparklesIcon',
      },
    ],
  },
];

// Flatten all badges for easy access
export const allBadges = badgeCategories.reduce((acc, category) => [...acc, ...category.badges], [] as Badge[]);
