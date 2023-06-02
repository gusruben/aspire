import type Aspen from "aspen-api";
import { users } from "../stores";
import { get } from "svelte/store";

export function getUser(sessionID: string): Aspen | null {
	const userStore = get(users);
    if (sessionID in userStore) {
		return userStore[sessionID];
    }
    return null;
}