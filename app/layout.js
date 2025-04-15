
import AuthProvider from "./Context/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Employee Management System",
  description: "A simple employee management system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
