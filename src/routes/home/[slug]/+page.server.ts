import { redirect } from '@sveltejs/kit';
import { getUser } from '../../../lib/utils';
// for some reason, this only works with the full path
import { AspenApiError } from '../../../../node_modules/aspen-api/dist/types.js';

export async function load({ cookies, params }) {
	const user = getUser(cookies.get("session") as string);
    
    if (!user) {
        cookies.delete("session");
        throw redirect(302, "/login");
    }

    try {
        return {
            assignments: await user.getAssignments(params.slug),
        }
    } catch (e) {
        // this will make it return the unknown class page, rather than an error
        if ((e as Error).message == AspenApiError.UnknownClassError) {
            return {};
        }
        throw e;
    }
}