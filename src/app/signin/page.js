"use client";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/utils/useAuth";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

const SignInPage = () => {
  const router = useRouter();
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signIn({ email, password });
      router.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 flex items-center justify-center">
      <div className="flex flex-col gap-4 w-[400px] mx-auto">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full px-3 py-2 text-sm border rounded-md outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full px-3 py-2 text-sm border rounded-md outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSignIn}
          className="w-full py-2 mt-6 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? (
            <ClipLoader color="#ffffff" loading={true} size={20} />
          ) : (
            "Sign In"
          )}
        </button>
        {error && <div>{error}</div>}

        <div className="flex gap-2">
          <p>Don&apos;t have an account?</p>
          <Link className="text-red-600" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

const SignIn = () => {
  return (
    <ProtectedRoute>
      <SignInPage />
    </ProtectedRoute>
  );
};

export default SignIn;
