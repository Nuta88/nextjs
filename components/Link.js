import Link from 'next/link';

export const NextLink = ({ href, children, className, ...props }) => (
  <Link href={href} {...props}>
    <a className={className}>
      {children}
    </a>
  </Link>
);
