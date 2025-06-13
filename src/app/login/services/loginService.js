// src/app/login/services/loginService.js
import { signIn, signOut } from 'next-auth/react';

export function googleLogin() {
    return signIn('google');
}

export function logout() {
    return signOut();
}
