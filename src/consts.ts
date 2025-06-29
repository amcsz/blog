import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "amcsz's blog",
  description:
    'my personal blog site containing my thoughts on various things, built using astro-erudite.',
  href: 'https://amcsz.me/',
  author: 'amcsz',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/projects',
    label: 'projects',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/amcsz',
    label: 'GitHub',
  },
  {
    href: 'mailto:2028schow@tjhsst.edu',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
