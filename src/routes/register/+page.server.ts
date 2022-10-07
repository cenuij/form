import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	async default({ request }) {
		const form = await request.formData();

		console.log(Object.fromEntries(form));

		throw redirect(303, '/');
	}
};
