"use client";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="w-full flex justify-center items-center flex-col gap-4">
        <h1 className="head_text text-center green_gradient">
          idemy
          <br className="max-md:hidden" />
          <span className="blue_gradient text-center"> Watch & Learn</span>
        </h1>
        <p className="desc text-center">
          idemy is a learning platform where everyone learn and develop skills
        </p>
        <Link href="/courses" className="black_btn orange_gradient">
          See All the Courses
        </Link>
      </section>
    </div>
  );
};

export default Home;
