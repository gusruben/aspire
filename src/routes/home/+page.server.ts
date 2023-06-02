import { redirect } from "@sveltejs/kit";
import { getUser } from "../../lib/users";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const user = getUser(cookies.get("session") as string)
	
	if (user) {
		return {
			classes: await user.getClasses(),
			schedule: await user.getSchedule(),
		};
	} else {
		cookies.delete("session");
		console.log("logged out");
		throw redirect(302, "/login");
	}
}
