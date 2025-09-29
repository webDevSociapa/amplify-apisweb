# Bavarians Buyer

## Description

A Next.js application for Bavairans' Buyer domain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
npm install pnpm -g
```

### Installing

clone the repository:

```bash
git clone <repository-url>
```

Install the dependencies:

```bash
pnpm install
```

### Running the application

To run the application in development mode:

```bash
pnpm dev
```

To build the application:

```bash
pnpm build
```

To run the build:

```bash
pnpm start
```

## Running before commit

To run the linter & prettier before commit:

```bash
pnpm run test-all
```

To fix all the linting issues:

```bash
pnpm run fix-all
```

## Post merge husky hook

After merge, the husky hook will run the pnpm patch version script, for next commit.
