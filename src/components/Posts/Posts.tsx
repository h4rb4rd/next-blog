'use client'

import { useEffect } from 'react'

import { AppLink } from '../AppLink'

import type { Post } from '@/types'
import { PostsSearch } from '../PostsSearch'
import { Routes } from '@/routes'

import styles from './styles.module.css'
import { usePosts } from '@/store'

export const Posts = () => {
	const { posts, loading, getAllPosts } = usePosts(state => ({
		posts: state.posts,
		loading: state.loading,
		getAllPosts: state.getAllPosts,
	}))

	useEffect(() => {
		getAllPosts()
	}, [])

	if (loading) return <h3>Loading...</h3>

	return (
		<ul className={styles.posts}>
			{posts?.map(post => (
				<li key={post.id}>
					<AppLink href={`${Routes.BLOG}/${post.id}`}>
						{post.id} {post.title}
					</AppLink>
				</li>
			))}
		</ul>
	)
}
