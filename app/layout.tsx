import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Sharma | Data & Database Consultant, Trainer",
  description: "Industry profile of Manish Sharma, Oracle database consultant, SQL trainer, data analytics professional and Managing Director at Dataprofry Quantum Tech.",
  openGraph: {
    title: "Manish Sharma | Data & Database Consultant, Trainer",
    description: "SQL, Oracle, PL/SQL and Data Analytics professional. Available for guest lectures, corporate training and consulting.",
    type: "profile"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
