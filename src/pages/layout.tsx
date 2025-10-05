import { HeaderComponent } from "@/components/internal/header";

export function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <HeaderComponent />

      <div className=" py-8 px-16 mt-16">
        {children}
      </div>
    </div>
  )
} 