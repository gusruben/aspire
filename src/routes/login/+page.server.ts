import Aspen from "aspen-api";
import { users } from "../../stores";
import crypto from "crypto";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		// temporary, constant district ID
		const aspen = new Aspen("dcps");
		await aspen.login({
			username: data.get("username") as string,
			password: data.get("password") as string,
		});

		const sessionID = crypto.randomBytes(16).toString("base64");

		users.update(store => {
			store[sessionID] = aspen;
			return store;
		});

		cookies.set("session", sessionID);
		throw redirect(302, "/home");
	},
};
