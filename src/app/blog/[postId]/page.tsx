import { Metadata } from 'next'

import type { Post } from '@/types'
import { Page } from '@/components/Page'

const postURL = 'https://jsonplaceholder.typicode.com/posts'

async function getPost(postId: string) {
	const response = await fetch(`${postURL}/${postId}`)

	return response.json()
}

interface PostProps {
	params: {
		postId: string
	}
}

export async function generateMetadata({
	params: { postId },
}: PostProps): Promise<Metadata> {
	const post: Post = await getPost(postId)

	return {
		title: `${post.title} | Next blog`,
	}
}

export default async function Post({ params: { postId } }: PostProps) {
	const post: Post = await getPost(postId)

	return (
		<Page>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</Page>
	)
}
