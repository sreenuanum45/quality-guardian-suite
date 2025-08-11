import React, { useMemo } from "react";

export type ProtectedMailtoProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  user: string;
  domain: string;
  label?: string;
};

const ProtectedMailto: React.FC<ProtectedMailtoProps> = ({ user, domain, label, ...props }) => {
  const email = useMemo(() => `${user}@${domain}` as const, [user, domain]);
  const href = useMemo(() => `mailto:${email}`, [email]);

  return (
    <a href={href} {...props} aria-label={props["aria-label"] ?? "Send email"}>
      {label ?? email}
    </a>
  );
};

export default ProtectedMailto;
