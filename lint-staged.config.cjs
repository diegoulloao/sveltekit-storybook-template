module.exports = {
	'*.{js,ts,json,svelte}': ['yarn format', 'git add'],
	'./src/**/*.{svelte,ts}': ['yarn format', 'git add', 'yarn lint:fix'],
	'./.{ts,cjs,js}': ['yarn lint:fix']
};
