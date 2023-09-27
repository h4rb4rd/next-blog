import { Metadata } from 'next'

import { Page } from '@/components/Page'
import { Posts } from '@/components/Posts'
import { PostsSearch } from '@/components/PostsSearch'

import styles from './styles.module.css'

export const metadata: Metadata = {
	title: 'Blog | Next blog',
}

export default function Blog() {
	return (
		<Page>
			<h1 className={styles.title}>Blog page</h1>
			<PostsSearch />
			<Posts />
		</Page>
	)
}
