# Coding Standards 📏

Welcome to **Designdeck**! To maintain code quality and consistency across our project, we follow a set of coding standards. Please adhere to these guidelines when contributing to the project.

## General Guidelines 🌟

- **Write Clear Code**: Ensure your code is easy to read and understand.
- **Follow Naming Conventions**: Use descriptive names for variables, functions, classes, and other identifiers.
- **Keep Code DRY**: Avoid duplicating code. Reuse functions and modules where applicable.
- **Document Your Code**: Add comments and documentation to explain complex logic and decisions.

## Code Style 🖋️

### JavaScript / TypeScript

- **Indentation**: Use 2 spaces for indentation.
- **Semicolons**: Always use semicolons at the end of statements.
- **Quotes**: Use single quotes for strings, except in JSX where double quotes are used.
- **Arrow Functions**: Prefer arrow functions for anonymous functions and callbacks.

```javascript
// Good
const add = (a, b) => a + b;

// Bad
const add = function(a, b) {
  return a + b;
};
```

### HTML

- **Indentation**: Use 2 spaces for indentation.
- **Attributes**: Use double quotes for attribute values.
- **Self-closing Tags**: For tags like `<img>`, `<input>`, etc., use self-closing syntax.

```html
<!-- Good -->
<img src="logo.png" alt="Logo" />

<!-- Bad -->
<img src='logo.png' alt='Logo'>
```

### CSS / TailwindCSS

- **Class Naming**: Use meaningful class names. Avoid using generic names like `.container` or `.box`.
- **TailwindCSS**: Use Tailwind’s utility classes for styling. Avoid writing custom CSS unless necessary.

```html
<!-- Good -->
<div className="bg-blue-500 text-white p-4 rounded">
  Hello World
</div>

<!-- Bad -->
<div className="blue-bg white-text padding-4 rounded-box">
  Hello World
</div>
```

## Commit Messages 📝

- **Format**: Use the following format for commit messages: `[Type]: Brief description`
- **Types**: 
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation changes
  - `style`: Code style changes (formatting, missing semi-colons, etc.)
  - `refactor`: Code changes that neither fix a bug nor add a feature
  - `test`: Adding or correcting tests
  - `chore`: Changes to the build process or auxiliary tools and libraries

```bash
# Good
feat: add user authentication

# Bad
update code
```

## Testing 🧪

- **Unit Tests**: Write unit tests for your code. Ensure that new features and bug fixes are covered by tests.
- **Test Coverage**: Aim for a high test coverage, but prioritize testing critical parts of the application.
- **Test Naming**: Use descriptive names for tests to make it clear what they are testing.

## Code Review Process 🔍

- **Review Guidelines**: When reviewing code, look for adherence to these standards, potential bugs, and opportunities for improvement.
- **Feedback**: Provide constructive feedback. Focus on the code and not the person.

---

Thank you for following these coding standards and helping us maintain high-quality code in **Designdeck**!
