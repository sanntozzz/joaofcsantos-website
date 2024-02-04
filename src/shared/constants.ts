import {
  IEducationItem,
  IExperienceItem,
  ILanguagesList,
  INavLink,
  ISkillsItem,
  ISocialLink,
} from '@/shared/interfaces'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export const navLinks: INavLink[] = [
  { href: '#aboutme', text: 'Menu.AboutMe' },
  { href: '#experience', text: 'Menu.Experience' },
  { href: '#education', text: 'Menu.Education' },
  { href: '#skills', text: 'Menu.Skills' },
]

export const experienceItems: IExperienceItem[] = [
  {
    job: 'Frontend',
    location: 'Accenture Portugal',
    date: 'Accenture.Date',
    text: 'Accenture.Text',
  },
  {
    job: 'Internship',
    location: 'Direção-Geral dos Estabelecimentos Escolares',
    date: 'DGESTE2.Date',
    text: 'DGESTE2.Text',
  },
  {
    job: 'Internship',
    location: 'Direção-Geral dos Estabelecimentos Escolares',
    date: 'DGESTE1.Date',
    text: 'DGESTE1.Text',
  },
]

export const educationItems: IEducationItem[] = [
  {
    course: 'Bachelor',
    location: 'Instituto Superior de Tecnologias Avançadas',
    date: '2020 - 2022',
  },
  {
    course: 'CTESP',
    location: 'Instituto Superior de Tecnologias Avançadas',
    date: '2018 - 2020',
  },
  {
    course: 'HighSchool',
    location: 'Escola Secundária da Amadora',
    date: '2015 - 2018',
  },
]

export const skillsItems: ISkillsItem[] = [
  {
    label: 'Designer.Label',
    text: 'Designer.Text',
    list: ['Figma', 'FigJam', 'Adobe Creative Suite'],
  },
  {
    label: 'Developer.Label',
    text: 'Developer.Text',
    list: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'NextJS',
      'AngularJS',
      'Tailwind CSS',
      'PostgreSQL',
    ],
  },
  {
    label: 'Tools.Label',
    text: 'Tools.Text',
    list: ['Postman', 'VSCode', 'Git/Github', 'Jira', 'Windows', 'Linux'],
  },
]

export const languagesList: ILanguagesList[] = [
  {
    langId: 'en-US',
    label: 'EN',
    locale: 'en',
  },
  {
    langId: 'pt',
    label: 'PT',
    locale: 'pt',
  },
]

export const socialLinks: ISocialLink[] = [
  {
    icon: InstagramLogo,
    href: 'https://www.instagram.com/sanntozzz/',
    text: 'Instagram',
  },
  {
    icon: LinkedinLogo,
    href: 'https://www.linkedin.com/in/sanntozzz/',
    text: 'LinkedIn',
  },
  {
    icon: GithubLogo,
    href: 'https://github.com/sanntozzz',
    text: 'Github',
  },
]
