import { HomePage } from './_home-page'
import { cookies } from 'next/headers'
import type { Locale } from '@/lib/content'

export default async function Home() {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('locale')?.value
  const locale: Locale = cookieLocale === 'en' ? 'en' : 'es-419'

  return <HomePage locale={locale} />
}
