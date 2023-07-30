"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/utils/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [loading, user, router]);

  return children;
};

export default ProtectedRoute;
