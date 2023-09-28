import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Routes } from '@/routes'

type Params = {
	postId: string
}

type Response = {
	params: Params
}

export async function DELETE(req: Request, { params }: Response) {
	const postId = params.postId

	const headerList = headers()
	const type = headerList.get('Content-Type')

	const cookieList = cookies()
	const coo2 = cookieList.get('Cookie_2')?.value

	// logic delete post
	redirect(Routes.BLOG)

	return NextResponse.json({ postId, type, coo2 })
}
