import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>All Rsult page</h1>
      <div className="space-y-1 w-1/4">
        {[
          ...Array.from({ length: 8 }, (_, key) => (
            <Link key={key} href={`/account/results/${key}`}>
              <div className="h-10 hover:bg-lime-200 ">result {key + 1}</div>
            </Link>
          )),
        ]}
      </div>
    </div>
  );
};

export default page;
