import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { logout } from '@/lib/utils';

function SignOutButton() {
  return (
    <button
      onClick={logout}
      className="py-3 px-5 hover:bg-destructive hover:text-white transition-all duration-300 rounded-lg flex items-center gap-4 font-semibold text-primary-200 w-full"
    >
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
