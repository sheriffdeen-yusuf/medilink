import Link from "next/link";

export default async function Navigation() {
  // console.log(session);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center text-primary font-semibold">
        <li>
          <Link href="/cabins" className="hover:text-sky-800 transition-colors">
            Public Area
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-sky-800 transition-colors">
            About
          </Link>
        </li>
        <li>
          {true ? (
            <Link
              href="/account"
              className="hover:text-sky-800 transition-colors flex items-center gap-4"
            >
              <div className="bg-slate-200  text-sky-700 rounded-full p-2 ">
                <h1 className="font-semibold">SH</h1>
              </div>
              <span>Account</span>
            </Link>
          ) : (
            <Link href="/account" className="hover:text-sky-800 transition-colors">
              Account
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
