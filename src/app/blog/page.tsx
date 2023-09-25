import { Metadata } from 'next'

import type { Post } from '@/types'
import { Page } from '@/components/Page'

import styles from './styles.module.css'
import { AppLink } from '@/components/AppLink'
import { Routes } from '@/routes'

export const metadata: Metadata = {
	title: 'Blog | Next blog',
}

const postsURL = 'https://jsonplaceholder.typicode.com/posts'

async function getPosts() {
	const response = await fetch(postsURL, {
		next: {
			revalidate: 60,
		},
	})

	return response.json()
}

export default async function Blog() {
	const posts: Post[] = await getPosts()

	return (
		<Page>
			<h1 className={styles.title}>Blog page</h1>
			<ul className={styles.posts}>
				{posts.map(post => (
					<li key={post.id}>
						<AppLink href={`${Routes.BLOG}/${post.id}`}>
							{post.id} {post.title}
						</AppLink>
					</li>
				))}
			</ul>
		</Page>
	)
}
