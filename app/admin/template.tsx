"use client"

import AdminPanelLayout from './admin-panel-layout'

export default function AdminPage({ children }: { children: React.ReactNode }) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>
}
