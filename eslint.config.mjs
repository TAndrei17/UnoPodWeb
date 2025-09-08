import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
	js.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			'@stylistic': stylistic,
			jest: require('eslint-plugin-jest'),
		},
		rules: {
			// Основные правила
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-function-return-type': 'off',

			// Стиль
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/quotes': ['error', 'double'],
			'@stylistic/brace-style': 'off',
		},
		env: {
			'jest/globals': true,
		},
	},
];
