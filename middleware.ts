import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Ignore next internals and public files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // If path already includes a locale (/az or /en), continue
  if (pathname.startsWith('/az') || pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  // Redirect root or any non-localized path to default locale 'az'
  const url = req.nextUrl.clone()
  url.pathname = `/az${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|api).*)'],
}
