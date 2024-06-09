'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>findmyclubs</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-2 inline-flex gap-5'>
          <Link href={`/about`}>
            {t('About')}
          </Link>
          <a href=''>{t('Support')}</a>
          <a href=''>{t('Other')}</a>
        </nav>
        <ThemeSwitch />
        {/* <LangSwitcher /> */}
        <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='ml-1 size-8'>
            <GithubIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
