'use client'

import { Page } from '@/components/Page'

export default function Error({ error }: { error: Error }) {
	return (
		<Page>
			<h1>Oops! {error.message}</h1>
		</Page>
	)
}
