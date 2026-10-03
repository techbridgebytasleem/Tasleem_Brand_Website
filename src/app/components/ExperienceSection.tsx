'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Role {
  company: string;
  title: string;
  dates: string;
  duration: string;
  location: string;
  type: string;
  color: string;
  icon: string;
  responsibility_title?: string;
  responsibilities: string[];
  achievements?: string[];
}

const roles: Role[] = [
  {
    company: 'Tata Consultancy Services',
    title: 'AWS Solutions Architect – Cloud Consultant',
    dates: 'Jan 2022 – Present',
    duration: '4+ years',
    location: 'Bangalore, India · International: Malaysia',
    type: 'Full-time',
    color: '#FF9900',
    icon: 'CloudIcon',
    responsibility_title: 'SKY New Zealand (Primary)',
    responsibilities: [
      'Define enterprise AWS architecture standards, cloud adoption frameworks, and target-state cloud operating models',
      'Lead architecture design for application modernization, infrastructure migration, containerization, and platform engineering',
      'Design highly available, secure, and scalable architectures for broadcast, OTT, streaming, and media processing platforms',
      'Establish AWS landing zones, multi-account governance models, security guardrails, and identity management frameworks',
      'Architect and optimize EC2, ECS, EKS, Lambda, API Gateway, RDS, Aurora, DynamoDB, S3, CloudFront, WAF, Route53, CloudWatch, IAM, and AWS Organizations',
      'Provide architectural leadership for AWS Media Services (MediaLive, MediaPackage, MediaConnect, CloudFront)',
    ],
    achievements: [
      '99.99% uptime SLA across production environments',
      'Reduced deployment time from days to hours through automation',
      'Established reusable AWS landing zone templates for enterprise adoption',
    ],
  },
  {
    company: 'TCS – CelcomDigi NBC Project',
    title: 'AWS Solutions Architect',
    dates: 'Concurrent (Jan 2022 – Present)',
    duration: 'Multi-year engagement',
    location: 'Kuala Lumpur, Malaysia',
    type: 'International Assignment',
    color: '#FF9900',
    icon: 'GlobeAltIcon',
    responsibility_title: 'Telecom Infrastructure Transformation',
    responsibilities: [
      'Delivered AWS-based unified billing and CRM platform post-merger consolidation serving 10M+ subscribers',
      'Designed enterprise-grade AWS Landing Zone compliant with telecom MCMC security standards',
      'Spearheaded CI/CD automation and containerized deployments (EKS, Aurora, OpenSearch)',
      'Led FinOps initiatives optimizing Reserved Instances and Savings Plans',
      'Directed cross-functional architecture reviews and governance sessions',
    ],
    achievements: [
      'Achieved 99.99% availability for critical billing systems',
      '40% improvement in deployment frequency through CI/CD automation',
      '30% reduction in manual intervention and human errors',
      '~20% infrastructure cost savings through FinOps optimization',
      'Successfully consolidated 10M+ customer records post-merger',
    ],
  },
  {
    company: 'TCS – Astro Project',
    title: 'AWS Center of Excellence (COE) Lead',
    dates: 'Concurrent (Jan 2022 – Present)',
    duration: 'Multi-year engagement',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: '#FF9900',
    icon: 'SparklesIcon',
    responsibility_title: 'Media & Entertainment Platform',
    responsibilities: [
      'Architected AWS solutions for interactive TV, chatbot, and OTT products',
      'Introduced Terraform-based Infrastructure-as-Code automation across teams',
      'Mentored 10+ engineers through AWS certifications and architecture frameworks',
      'Championed security-by-design with IAM guardrails, encryption, and monitoring (Datadog, CloudWatch)',
      'Led architecture knowledge-sharing and best practices dissemination',
    ],
    achievements: [
      '35% improvement in content delivery performance',
      '25% reduction in critical incidents through proactive monitoring',
      'Reduced provisioning time from days to hours with IaC automation',
      'Enabled 10+ engineers to achieve AWS Solutions Architect certification',
    ],
  },
  {
    company: 'IBM',
    title: 'GCP Cloud Solution Architect',
    dates: 'Feb 2020 – Dec 2021',
    duration: '2 years',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: '#4285F4',
    icon: 'ServerIcon',
    responsibility_title: 'Ericsson Data Lake Migration',
    responsibilities: [
      'Led migration of legacy on-premise systems to cloud-native GCP Data Lake supporting enterprise analytics',
      'Defined comprehensive HLD/LLD documentation for multi-environment setups (DEV/UAT/PROD)',
      'Established data governance and security frameworks for telecom datasets',
      'Optimized BigQuery schemas and storage strategies for analytics workloads',
      'Conducted GCP capability-building sessions and technical training',
    ],
    achievements: [
      '50% reduction in query performance time through schema optimization',
      'Successful migration of petabyte-scale data with zero downtime',
      'Established reusable data governance frameworks and compliance templates',
      'Upskilled team on BigQuery, GCP IAM, and data security best practices',
    ],
  },
  {
    company: 'Dell EMC',
    title: 'Senior Lead Software Engineer & Project Lead',
    dates: 'Jul 2013 – Feb 2020',
    duration: '6 years 8 months',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: '#007DB8',
    icon: 'CircleStackIcon',
    responsibility_title: 'Goldman Sachs Enterprise Storage',
    responsibilities: [
      'Storage subject matter expert managing petabyte-scale EMC Symmetrix and NetApp storage infrastructure',
      'Supervised 12-engineer team overseeing performance tuning, risk management, and technical training',
      'Transitioned critical workloads to cloud-ready infrastructure and modern storage paradigms',
      'Automated provisioning and reporting processes using Python and shell scripting',
      'Member of Cloud as a Service (CASE) team building greenfield cloud adoption processes',
    ],
    achievements: [
      '>99.98% uptime and DR/BCP readiness across production systems',
      '15% reduction in operational costs through infrastructure optimization',
      '25% efficiency improvement in provisioning and reporting through automation',
      'Reduced incident response time by 35% through proactive monitoring',
    ],
  },
  {
    company: 'Mphasis Software Private Limited',
    title: 'Module Lead, QA & Operations',
    dates: 'Nov 2006 – Jun 2013',
    duration: '6 years 8 months',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: '#8B2FC9',
    icon: 'CpuChipIcon',
    responsibility_title: 'Charles Schwab & FedEx',
    responsibilities: [
      'Led 6-member QA team implementing risk-based testing strategies for enterprise applications',
      'Managed SAN storage provisioning on EMC arrays (DMX3, DMX4, VMAX) and infrastructure troubleshooting',
      'Re-engineered investment banking site from Java/J2EE to .NET 2.0 — largest fixed-bid assignment with 100+ third-party integrations',
      'Directed full lifecycle development with cross-functional teams (developers, analysts, testers)',
      'Established testing frameworks and quality assurance processes for financial applications',
    ],
    achievements: [
      '100% on-time delivery across all project milestones',
      '30% reduction in defect leakage through risk-based testing strategies',
      '95% test coverage for financial transaction processing systems',
      'Successfully managed largest fixed-bid project with 100+ integration points',
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.reveal-item');
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 lg:py-28 relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal-item hidden-initially">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Career Timeline</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Professional
            <br />
            <span className="text-shimmer">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
            20+ years of progressive IT leadership — from storage engineering to enterprise cloud architecture and AI-powered transformation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          <div className="space-y-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="reveal-item hidden-initially lg:pl-24 relative"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden lg:flex absolute left-5 top-6 w-6 h-6 rounded-full border-2 border-gold items-center justify-center -translate-x-1/2"
                  style={{ background: '#0A1628' }}
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                {/* Card */}
                <div className="card-surface rounded-2xl p-6 lg:p-8 hover:border-gold/40 transition-all duration-300 group cursor-default"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    {/* Company icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${role.color}20`, border: `1px solid ${role.color}40` }}
                    >
                      <Icon name={role.icon as Parameters<typeof Icon>[0]['name']} size={22} style={{ color: role.color }} />
                    </div>

                    {/* Title block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-foreground text-base leading-snug">{role.title}</h3>
                          <p className="text-gold font-semibold text-sm mt-0.5">{role.company}</p>
                        </div>
                        <span className="text-xs font-medium text-gold/70 bg-gold/10 px-2 py-1 rounded-full whitespace-nowrap">
                          {role.duration}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="CalendarDaysIcon" size={12} />
                          {role.dates}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="MapPinIcon" size={12} />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="BriefcaseIcon" size={12} />
                          {role.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-4">
                    {role.responsibility_title && (
                      <h4 className="text-sm font-semibold text-foreground mb-2">{role.responsibility_title}</h4>
                    )}
                    <ul className="space-y-2">
                      {role.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <Icon name="ChevronRightIcon" size={14} className="text-gold shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {role.achievements && role.achievements.length > 0 && (
                    <div className="border-t border-border pt-4 mt-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Icon name="StarIcon" size={14} className="text-gold" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <Icon name="CheckIcon" size={14} className="text-gold shrink-0 mt-0.5" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Education card */}
          <div className="reveal-item hidden-initially lg:pl-24 relative mt-8" style={{ transitionDelay: '0.5s' }}>
            <div className="hidden lg:flex absolute left-5 top-6 w-6 h-6 rounded-full border-2 border-gold/40 items-center justify-center -translate-x-1/2"
              style={{ background: '#0A1628' }}
            >
              <div className="w-2 h-2 rounded-full bg-gold/40" />
            </div>

            <div className="card-surface rounded-2xl p-6 lg:p-8 border-dashed">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon name="AcademicCapIcon" size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">Bachelor's Degree</h3>
                  <p className="text-gold font-semibold text-sm mt-0.5">VTU University · B.L.D.E. College of Engineering</p>
                  <p className="text-muted-foreground text-xs mt-1">Electrical, Electronic and Communications Engineering · Bijapur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
