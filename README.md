# Todos CLI Application

This is a simple command-line todo application written in Node.js. It allows users to manage their todo tasks easily from the terminal.

## Installation

### From NPM Package

You can install the Todos CLI application from the NPM package `todos-cli-app`:

```
npm install -g todos-cli-app
```

### From Source

1. Clone the repository:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd todos-cli
```

3. Install dependencies:

```
npm i -g
```

## Usage

To use the Todos CLI application, follow these steps:

1. Open your terminal.

2. Run the `todos` command followed by one of the available commands:

### Commands:

- `todos list`: List all the TODO tasks.

- `todos add <task>`: Add a new todo task.

- `todos mark-done`: Mark task(s) as done.

### Examples:

List all the TODO tasks:

```
todos list
```

Add a new todo task:

```
todos add "Task description"
```

Mark task(s) as done:

```
todos mark-done -t <task1> <task2> ...
```

If no tasks are specified, all tasks will be marked as done.
