// Awards and Recognition Data Structure
// Organized by category with minimal card display data

export interface Award {
  id: string;
  name: string;              // Card display: "Star of the Month Award"
  issuer: string;            // "TCS" | "AWS"
  category: 'TCS' | 'AWS' | 'Team';
  date: string;              // Modal display: "December 2023"
  description: string;       // Modal display: Full details
  certificateImage: string;  // Path to certificate image
  color: string;             // Card accent color
}

export interface AwardCategory {
  id: string;
  name: string;
  color: string;
  awards: Award[];
}

export const awardCategories: AwardCategory[] = [
  {
    id: 'tcs-gems',
    name: 'TCS Internal Awards',
    color: '#EE1C6B',
    awards: [
      {
        id: 'tcs-star-month-dec-2023',
        name: 'Star of the Month Award',
        issuer: 'TCS',
        category: 'TCS',
        date: 'December 2023',
        description: 'Awarded for outstanding contribution to the organization. An inspiring role model to colleagues.',
        certificateImage: '/awards/tcs-star-month-dec-2023.png',
        color: '#EE1C6B',
      },
      {
        id: 'tcs-feedback-enthusiast',
        name: 'Feedback Enthusiast Certificate',
        issuer: 'TCS',
        category: 'TCS',
        date: 'July 2023',
        description: 'Recognized as an inspiring role model for dedication and commitment to continuous feedback.',
        certificateImage: '/awards/tcs-feedback-enthusiast.png',
        color: '#EE1C6B',
      },
      {
        id: 'tcs-smiles-award-dec-2022',
        name: 'Smiles Award',
        issuer: 'TCS',
        category: 'TCS',
        date: 'December 2022',
        description: 'Appreciation for outstanding contribution and inspiring role model to colleagues.',
        certificateImage: '/awards/tcs-smiles-award-dec-2022.png',
        color: '#EE1C6B',
      },
      {
        id: 'tcs-smiles-award-oct-2022',
        name: 'Smiles Award',
        issuer: 'TCS',
        category: 'TCS',
        date: 'October 2022',
        description: 'Recognition for inspiring role model dedication and commitment.',
        certificateImage: '/awards/tcs-smiles-award-oct-2022.png',
        color: '#EE1C6B',
      },
      {
        id: 'tcs-excellence-performance',
        name: 'Excellence in Performance',
        issuer: 'TCS',
        category: 'TCS',
        date: '2022',
        description: 'Commended for outstanding contribution across AWS accounts, WABA availability, cost optimization, and infrastructure improvements.',
        certificateImage: '/awards/tcs-excellence-performance.png',
        color: '#EE1C6B',
      },
    ],
  },
  {
    id: 'aws-partner',
    name: 'AWS Partner Training Certificates',
    color: '#FF9900',
    awards: [
      {
        id: 'aws-migration-essentials',
        name: 'Migration Essentials',
        issuer: 'AWS',
        category: 'AWS',
        date: 'March 2023',
        description: 'Successfully completed AWS Partner: Migration Essentials (Technical) training.',
        certificateImage: '/awards/aws-migration-essentials.png',
        color: '#FF9900',
      },
      {
        id: 'aws-well-architected',
        name: 'Well-Architected Best Practices',
        issuer: 'AWS',
        category: 'AWS',
        date: 'February 2024',
        description: 'Successfully completed AWS Partner: Well-Architected Best Practices (Technical) training.',
        certificateImage: '/awards/aws-well-architected.png',
        color: '#FF9900',
      },
      {
        id: 'aws-containers',
        name: 'Containers on AWS',
        issuer: 'AWS',
        category: 'AWS',
        date: 'December 2022',
        description: 'Successfully completed AWS Partner: Containers on AWS (Technical) training.',
        certificateImage: '/awards/aws-containers.png',
        color: '#FF9900',
      },
      {
        id: 'aws-data-analytics',
        name: 'Data Analytics on AWS',
        issuer: 'AWS',
        category: 'AWS',
        date: 'December 2022',
        description: 'Successfully completed AWS Partner: Data Analytics on AWS (Technical) training.',
        certificateImage: '/awards/aws-data-analytics.png',
        color: '#FF9900',
      },
      {
        id: 'aws-migration-business',
        name: 'Migration Business Case Development',
        issuer: 'AWS',
        category: 'AWS',
        date: 'December 2022',
        description: 'Successfully completed AWS Partner: Migration Business Case Development (Business) training.',
        certificateImage: '/awards/aws-migration-business.png',
        color: '#FF9900',
      },
      {
        id: 'aws-security-governance',
        name: 'Security Governance at Scale',
        issuer: 'AWS',
        category: 'AWS',
        date: 'December 2022',
        description: 'Successfully completed AWS Partner: Security Governance at Scale (Technical) training.',
        certificateImage: '/awards/aws-security-governance.png',
        color: '#FF9900',
      },
    ],
  },
  {
    id: 'team-recognition',
    name: 'Team Recognition',
    color: '#D4AF37',
    awards: [
      {
        id: 'aws-champions',
        name: 'AWS Champions - Best Technical Enablement',
        issuer: 'AWS',
        category: 'Team',
        date: '2024',
        description: 'Recognized as part of AWS Champions for outstanding technical enablement and community leadership.',
        certificateImage: '/awards/aws-champions.png',
        color: '#D4AF37',
      },
    ],
  },
];

// Flatten all awards for easy access
export const allAwards = awardCategories.reduce(
  (acc, category) => [...acc, ...category.awards],
  [] as Award[]
);
