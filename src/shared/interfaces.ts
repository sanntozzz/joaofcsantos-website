import { Icon } from '@phosphor-icons/react'

export interface ISEOProps {
  title?: string
  description?: string
  locale?: string
  url?: string
  type?: string
  image?: string
}

export interface INavLink {
  href: string
  text: string
}

export interface ISocialLink {
  icon: Icon
  href: string
  text: string
}

export interface ILanguagesList {
  langId: string
  label: string
  locale: string
}

export interface IExperienceItem {
  job: string
  location: string
  date: string
  text: string
}

export interface IEducationItem {
  course: string
  location: string
  date: string
}

export interface ISkillsItem {
  label: string
  text: string
  list: string[]
}

export interface IHeaderProps {
  title: string
  subtitle: string
}
