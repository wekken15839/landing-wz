"use client"
import { ThemeProvider as MTProvider } from "@material-tailwind/react";
export default function Providers({ children }) {

  return (<MTProvider>
    {children}
  </MTProvider>);
};  