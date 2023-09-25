import { POSTS_URL } from '@/const'

export const getPostsBySearch = async (search: string) => {
	const response = await fetch(`${POSTS_URL}?q=${search}`)

	if (!response.ok) {
		throw new Error('Unable to fetch posts!')
	}

	return response.json()
}
