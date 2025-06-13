// src/app/account/layout.js
'use client';

import { SessionProvider } from 'next-auth/react';

export default function AccountLayout({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}
