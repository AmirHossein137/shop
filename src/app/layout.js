import { peyda } from "@/utils/peydaFont";
import "./globals.css";
import ProviderRTK from "@/store/ProviderRTK";
import Layout from "@/components/layout/Layout";

export const metadata = {
  title: "رستوران رفتاری",
  description: "رستوران رفتاری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${peyda.variable} antialiased`}>
        <ProviderRTK>
          <Layout>{children}</Layout>
        </ProviderRTK>
      </body>
    </html>
  );
}
