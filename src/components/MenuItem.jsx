import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link className="mx-4 lg:mx-6 hover:text-amber-600 py-4" href={address}>
      <Icon className="text-2xl sm:hidden mx-4" />
      <p className="hidden sm:inline my-2 text-sm">{title}</p>
    </Link>
  );
}
