import { PioneerProvider } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <PioneerProvider>
      <body>{children}</body>
    </PioneerProvider>
    </html>
  )
}
