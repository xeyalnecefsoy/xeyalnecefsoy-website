import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json')

// Initialize JSON file if it doesn't exist
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE)
  } catch {
    // File doesn't exist, create it with data from projects.ts
    const { projects } = await import('@/data/projects')
    await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2))
  }
}

export async function GET() {
  try {
    await ensureDataFile()
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const projects = JSON.parse(data)
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataFile()
    const newProject = await request.json()
    
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const projects = JSON.parse(data)
    
    projects.push(newProject)
    await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2))
    
    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
