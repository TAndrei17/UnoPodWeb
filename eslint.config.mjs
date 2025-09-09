import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';

export default [
	{
		ignores: ['node_modules', 'dist'],
	},
	js.configs.recommended,
	{
		files: ['**/*.js'],
		plugins: {
			'@stylistic': stylistic,
			jest: jestPlugin,
			import: importPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			globals: {
				console: 'readonly',
				process: 'readonly',

				describe: 'readonly',
				it: 'readonly',
				test: 'readonly',
				expect: 'readonly',
			},
		},
		rules: {
			// Main Rules
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-undef': 'error',

			// Style
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/brace-style': 'off',

			// Imports
			'import/no-unresolved': 'error',
			'import/no-duplicates': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
	},
];
