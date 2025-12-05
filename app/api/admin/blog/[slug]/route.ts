import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'blog.json')

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const posts = JSON.parse(data)
    const post = posts.find((p: any) => p.slug === slug)
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const updatedPost = await request.json()
    
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const posts = JSON.parse(data)
    const index = posts.findIndex((p: any) => p.slug === slug)
    
    if (index === -1) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    posts[index] = updatedPost
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2))
    
    return NextResponse.json(updatedPost)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const posts = JSON.parse(data)
    const filteredPosts = posts.filter((p: any) => p.slug !== slug)
    
    if (posts.length === filteredPosts.length) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    
    await fs.writeFile(DATA_FILE, JSON.stringify(filteredPosts, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
