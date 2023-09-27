import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'

import { getAllPosts } from '@/services/getAllPosts'
import { getPostsBySearch } from '@/services/getPostsBySearch'
import { Post } from '@/types'

type UsePosts = {
	posts: Post[]
	loading: boolean
	getAllPosts: () => Promise<void>
	getPostsBySearch: (value: string) => Promise<void>
}

export const usePosts = createWithEqualityFn<UsePosts>()(
	set => ({
		posts: [],
		loading: false,
		getAllPosts: async () => {
			set({ loading: true })
			const posts = await getAllPosts()
			set({ posts, loading: false })
		},
		getPostsBySearch: async search => {
			set({ loading: true })
			const posts = await getPostsBySearch(search)
			set({ posts, loading: false })
		},
	}),
	shallow
)
