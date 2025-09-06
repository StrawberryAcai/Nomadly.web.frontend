'use server'
import {cookies} from "next/headers";

export const deleteCookie = async () => {
  try {
    (await cookies()).delete("refreshToken");
    return true;
  } catch (error) { return error}
}