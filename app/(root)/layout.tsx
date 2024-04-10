import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">{children}</main>
      <ScrollToTopButton />
    </div>
  );
}
