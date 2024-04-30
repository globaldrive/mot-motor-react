"use client";
import Link from "next/link";
import RoutesPaths from "@/types/enums/routes";

const ErrorPage = () => {
  return (
    <div>
      Ooops something went wrong
      <Link href={RoutesPaths.home}>HOME PAGE</Link>
    </div>
  );
};

export default ErrorPage;
