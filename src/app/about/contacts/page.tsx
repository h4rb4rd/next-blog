import { Metadata } from 'next'

import { Page } from '@/components/Page'

export const metadata: Metadata = {
	title: 'Contacts | Next blog',
}

export default function Contacts() {
	return (
		<Page>
			<h1>Contacts</h1>
		</Page>
	)
}
