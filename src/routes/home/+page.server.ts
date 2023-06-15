import { redirect, type Actions } from "@sveltejs/kit";
import { getUser } from "../../lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const user = getUser(cookies.get("session") as string)

	if (!user) {
		cookies.delete("session");
		throw redirect(302, "/login");
	}

	return {
        classes: await user.getClasses(),
    }
}

// log out action
export const actions: Actions = {
	logout: async ({ cookies }) => {
		cookies.delete("session");
		throw redirect(302, "/");
	}
}