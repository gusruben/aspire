import { redirect } from "@sveltejs/kit";
import { users } from "../../stores";
import { get } from "svelte/store";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const sessionID = cookies.get("session") as string;
	const userStore = get(users);

	if (sessionID in userStore) {
		const user = userStore[sessionID];
		const userCookies = await user.getCookies();

		const classes = await user.getClasses();

		return {
			sessionID,
			cookies: userCookies.map(c => c.toString()),
			classes,
		};
	} else {
		cookies.delete("session");
		throw redirect(302, "/login");
	}
}
