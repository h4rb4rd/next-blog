import { Metadata } from 'next'

import { Page } from '@/components/Page'

export const metadata: Metadata = {
	title: 'About | Next blog',
}

export default function About() {
	return (
		<Page>
			<h1>About page</h1>
		</Page>
	)
}
