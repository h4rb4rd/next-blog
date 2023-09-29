import { Metadata } from 'next'
import { getServerSession } from 'next-auth/next'

import { authConfig } from '@/configs/auth'
import { Page } from '@/components/Page'

export const metadata: Metadata = {
	title: 'Profile | Next blog',
}

export default async function About() {
	const session = await getServerSession(authConfig)

	return (
		<Page>
			<h1>Profile of {session?.user?.name}</h1>
		</Page>
	)
}
