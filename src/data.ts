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
    description: 'Small-group conversations on where AI is actually headed — from "is this doomsday or tomorrow\'s reality" to the questions nobody\'s resolved yet. Informal by design.'
  },
  {
    title: 'RAIx Series',
    description: 'Responsible AI crossed with the fields it\'s reshaping. We started with education — more domains get added as the community picks them.'
  },
  {
    title: 'Paper Trail',
    description: 'A technical reading group working through AI safety papers and course material, session by session — for people who want to go deeper than a panel discussion.'
  }
];

export const carouselSlidesData: CarouselSlide[] = [
  {
    imageSrc: '$/images/crossroad-chatters-fireside.jpg',
    title: 'Fireside Focus Group',
    description: 'Fireside style focus groups.'
  },
  {
    imageSrc: '$/images/paper-trail-anthropic.jpg',
    title: 'Paper Trail Anthropic',
    description: 'Working through research papers and blogs.'
  },
  {
    imageSrc: '$/images/paper-trail-deepseek.jpg',
    title: 'Paper Trail DeepSeek',
    description: 'Working through research papers and blogs.'
  },
  {
    imageSrc: '$/images/crossroad-chatters-02.jpg',
    title: 'Crossroad Chatters',
    description: 'Casual discussions on emerging Responsible AI topics and trends.'
  }
];

export const teamMembersData: TeamMember[] = [
  {
    name: 'Name Surname',
    role: 'Founder & Organizer',
    initials: 'NS',
    bio: 'One line on what they lead at Spectra.'
  },
  {
    name: 'Name Surname',
    role: 'Programs Lead',
    initials: 'NS',
    bio: 'One line on what they lead at Spectra.'
  },
  {
    name: 'Name Surname',
    role: 'Community Lead',
    initials: 'NS',
    bio: 'One line on what they lead at Spectra.'
  }
];

export const siteLinks = {
  luma: 'https://luma.com/spectra-ai-sg',
  lumaEmbed: 'https://luma.com/embed/calendar/cal-YBfMq4YAgqPzHfL/events',
  telegram: 'https://t.me/spectra_ai_sg', // Replace with your real Telegram group link
  linkedin: 'https://www.linkedin.com/company/spectra-ai', // Replace with your real LinkedIn page link
  airtableEmbed: 'https://airtable.com/embed/appXXXXXXXXXXXXXX/shrXXXXXXXXXXXXXX?backgroundColor=blue&viewControls=on' // Replace with your real Airtable embed link
} as const;

export type SiteLinkKey = keyof typeof siteLinks;