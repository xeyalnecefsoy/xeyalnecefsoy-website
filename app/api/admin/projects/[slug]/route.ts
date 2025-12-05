import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json')

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const projects = JSON.parse(data)
    const project = projects.find((p: any) => p.slug === slug)
    
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const updatedProject = await request.json()
    
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const projects = JSON.parse(data)
    const index = projects.findIndex((p: any) => p.slug === slug)
    
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    
    projects[index] = updatedProject
    await fs.writeFile(DATA_FILE, JSON.stringify(projects, null, 2))
    
    return NextResponse.json(updatedProject)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const projects = JSON.parse(data)
    const filteredProjects = projects.filter((p: any) => p.slug !== slug)
    
    if (projects.length === filteredProjects.length) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    
    await fs.writeFile(DATA_FILE, JSON.stringify(filteredProjects, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
