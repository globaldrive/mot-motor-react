"use client";
import Link from "next/link";
import RoutesPaths from "@/types/enums/routes";
import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const reset = () => {
    window.location.reload();
  };
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
      <Link href={RoutesPaths.home}>HOME PAGE</Link>
    </div>
  );
};

export default ErrorPage;
