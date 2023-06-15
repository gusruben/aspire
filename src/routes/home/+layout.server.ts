import { redirect } from "@sveltejs/kit";
import { getUser } from "../../lib/utils";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const user = getUser(cookies.get("session") as string)

	if (!user) {
		cookies.delete("session");
		throw redirect(302, "/login");
	}

	return {
		schedule: await user.getSchedule(),
		name: user.studentName,
	};
}
