module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/jsx-ident': [2, 4],
		'react/jsx-ident-props': [2, 4],
		ident: [2, 4],
		'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', 'tsx']}],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
	},
};
