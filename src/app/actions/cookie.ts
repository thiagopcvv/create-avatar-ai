"use server";

import { cookies } from "next/headers";

export async function handleCookie(key: string, value: string) {
  cookies().set(key, value, { secure: true, sameSite: "none" });
}

export async function getCookie(key: string) {
  const token = cookies().get(key);
  return token;
}
