// Admin Layout to wrap admin pages
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}
