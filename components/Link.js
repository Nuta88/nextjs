import Link from 'next/link';

export const NextLink = ({ href, children, ...props }) => (
  <Link href={href} {...props}>
    <a>
      {children}
    </a>
  </Link>
);
