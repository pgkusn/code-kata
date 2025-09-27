# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Run tests**: `npm test` (starts Vitest in watch mode)
- **Run tests with UI**: `npm run test:ui` (launches Vitest UI)
- **Run tests with coverage**: `npm run test:coverage`
- **Start main application**: `npm start` (runs main.js, though no main.js exists currently)

## Project Architecture

This is a **code kata practice repository** containing algorithmic challenges and solutions, primarily from Codewars. The project structure is:

- **`src/codewars/`**: Contains individual kata solutions and their corresponding test files
- Each kata is implemented as a standalone TypeScript file (e.g., `operArray.ts`)
- Test files use the `.spec.ts` naming convention (e.g., `operArray.spec.ts`)
- Solutions are organized as individual functions exported from their respective files

## Testing Framework

- Uses **Vitest** as the testing framework with global test functions enabled
- Tests use `describe()` and `it()` blocks following standard testing patterns
- TypeScript is configured with strict mode and vitest globals support
- Test files import functions directly from their corresponding implementation files

## Key Conventions

- **Language**: TypeScript with ES modules (`"type": "module"` in package.json)
- **Testing**: Each kata solution should have a corresponding `.spec.ts` file
- **Dependencies**: Uses lodash and ramda for utility functions
- **Code Style**: Functions are exported individually, allowing for selective imports
- **File Organization**: One kata per file, with clear function names describing the problem

## Development Notes

- The project is configured for ES modules with TypeScript
- Vitest runs with globals enabled, so `describe`, `it`, and `expect` are available without imports
- Each kata solution is self-contained and can be run independently
- 使用繁體中文回覆