// src/app/page.tsx (Kök səhifə - yalnız yönləndirmə üçün)
import { redirect } from "next/navigation";

export default function RootPage() {
  // Bütün istifadəçiləri default olaraq Azərbaycan dilinə yönləndirir
  redirect("/az");
}
