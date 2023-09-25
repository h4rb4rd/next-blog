import { POSTS_URL } from '@/const'

export const getAllPosts = async () => {
	const response = await fetch(POSTS_URL)

	if (!response.ok) {
		throw new Error('Unable to fetch posts!')
	}

	return response.json()
}
