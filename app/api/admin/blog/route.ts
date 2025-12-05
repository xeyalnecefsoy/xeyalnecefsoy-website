import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'blog.json')

// Initialize JSON file if it doesn't exist
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE)
  } catch {
    // File doesn't exist, create it with data from blog.ts
    const { posts } = await import('@/data/blog')
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2))
  }
}

export async function GET() {
  try {
    await ensureDataFile()
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const posts = JSON.parse(data)
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataFile()
    const newPost = await request.json()
    
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const posts = JSON.parse(data)
    
    posts.push(newPost)
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2))
    
    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
