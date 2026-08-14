import { NavItem, Program, CarouselSlide, TeamMember } from './types';

export const navItems: NavItem[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Affiliates', href: '#affiliates' },
  { label: 'Team', href: '#team' },
  { label: 'Join', href: '#community' },
];

export const programsData: Program[] = [
  {
    title: 'Crossroad Chatters',
    description: 'Small group conversations on where AI is actually headed, from "is this doomsday or tomorrow\'s reality" to the questions nobody has resolved yet. Informal by design.'
  },
  {
    title: 'RAIx Series',
    description: 'Responsible AI crossed with the fields it is reshaping. We started with education, and more domains are added as the community chooses them.'
  },
  {
    title: 'Paper Trail',
    description: 'A technical reading group working through AI safety papers and course material, session by session, designed for people who want to go deeper than a panel discussion.'
  }
];

export const carouselSlidesData: CarouselSlide[] = [
  {
    imageSrc: 'images/events/crossroad-chatters-fireside.jpg',
    title: 'Fireside Focus Group',
    description: 'Fireside style focus groups.'
  },
  {
    imageSrc: 'images/events/paper-trail-anthropic.jpg',
    title: 'Paper Trail Anthropic',
    description: 'Working through research papers and blogs.'
  },
  {
    imageSrc: 'images/events/paper-trail-deepseek.jpg',
    title: 'Paper Trail DeepSeek',
    description: 'Working through research papers and blogs.'
  },
  {
    imageSrc: 'images/events/crossroad-chatters-02.jpg',
    title: 'Crossroad Chatters',
    description: 'Casual discussions on emerging Responsible AI topics and trends.'
  }
];

export const teamMembersData: TeamMember[] = [
  {
    name: 'Jared Cheang',
    role: 'Founder & Technical Lead',
    bio: 'AI Safety Researcher exploring Human-AI Alignment and Control.',
    imageSrc: 'images/team/jared.jpg',
    linkedin: 'https://www.linkedin.com/in/jared-cheang/',
  },
  {
    name: 'Selene Daswani',
    role: 'Events & Operations',
    bio: 'Decades of industry experience in AI and technology.',
    imageSrc: 'images/team/selene.jpg',
    linkedin: 'https://www.linkedin.com/in/selenedaswani/',
  },
  {
    name: 'Nigel Hee',
    role: 'Events & Operations',
    bio: 'AI Policymaking and Governance Specialist.',
    imageSrc: 'images/team/nigel.jpg',
    linkedin: 'https://www.linkedin.com/in/nigelhee/'
  },
  {
    name: 'Iris Ng',
    role: 'Events & Operations',
    bio: 'Responsible AI advocate and community builder.',
    imageSrc: 'images/team/iris.jpg',
    linkedin: 'https://www.linkedin.com/in/irisngct/'
  },
  {
    name: 'Chanel Huang',
    role: 'Liason & Community Engagement',
    bio: 'AI For Public Good advocate.',
    imageSrc: 'images/team/chanel.jpg',
    linkedin: 'https://www.linkedin.com/in/chanelxn/'
  },
  {
    name: 'Audrey Tim',
    role: 'Liason & Community Engagement',
    bio: 'AI For Public Good advocate.',
    imageSrc: '/images/team/audrey.jpg',
    linkedin: 'https://www.linkedin.com/in/audreytmh/'
  },
  {
    name: 'Valerie Pang',
    role: 'AI Safety Liaison',
    bio: 'Program Manager of Singapore AI Safety Hub.',
    imageSrc: 'images/team/valerie.jpg',
    linkedin: 'https://www.linkedin.com/in/valeriepang/'
  },
];

export const siteLinks = {
  luma: 'https://luma.com/spectra-ai-sg',
  lumaEmbed: 'https://luma.com/embed/calendar/cal-YBfMq4YAgqPzHfL/events',
  telegram: 'https://t.me/+udfnvmT6o2s1ZGRl', 
  linkedin: 'https://www.linkedin.com/company/spectra-ai-org/', 
} as const;

export type SiteLinkKey = keyof typeof siteLinks;

export interface GetInvolvedOption {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export const getInvolvedData: GetInvolvedOption[] = [
  {
    icon: '💡',
    title: 'AI Researchers & Builders',
    description: 'Collaborate on open AI safety research, evaluation benchmarks, and responsible ML tooling.',
    linkText: 'Join research group',
    href: '#join-research'
  },
  {
    icon: '🤝',
    title: 'Community Volunteers',
    description: 'Help host meetups, organize workshops, and run community hackathons. All roles welcome.',
    linkText: 'Join as volunteer',
    href: '#volunteer'
  },
  {
    icon: '🏛️',
    title: 'Industry & Partners',
    description: 'Embed responsible AI principles into your organization, sponsor events, or co-host sessions.',
    linkText: 'Partner with us',
    href: '#partner'
  },
  {
    icon: '🎓',
    title: 'Academic & Students',
    description: 'Bring responsible AI discussions, paper reading groups, and technical demos to your campus.',
    linkText: 'Explore campus initiatives',
    href: '#students'
  }
];