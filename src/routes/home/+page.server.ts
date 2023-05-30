import { redirect } from "@sveltejs/kit";
import { get } from "svelte/store";
import { users } from "../../stores";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    
    const sessionID = cookies.get("session") as string;
    const userStore = get(users);

    if (sessionID in userStore) {
        const user = userStore[sessionID]
    
        return {
            classes: await user.getClasses(),
            schedule: await user.getSchedule(),
        }
    } else {
        cookies.delete("session")
        console.log("logged out")
        throw redirect(302, "/login")
    }

}