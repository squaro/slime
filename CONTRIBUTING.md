<!-- omit in toc -->
# Contributing Guidelines

<!-- omit in toc -->
## Table of Contents

- [Branch](#branch)
- [Commit](#commit)
- [Pull Request](#pull-request)

## Branch

All work should be done on an isolated branch.

<!-- omit in toc -->
### Format

Branches should use the following naming convention

```text
<name>/<work item id>/<short description>
```

<!-- omit in toc -->
#### Name

The authors short name:

- **name**: John Doe
- **short name**: `jdoe`

<!-- omit in toc -->
#### Work item id

The id of the bug / story / task (e.g. `4123`). If you don't have the id, don't put anything.

<!-- omit in toc -->
#### Short description

The short description of the work item:

- **title**: Add README file to the repository
- **short description**: `add-readme`

<!-- omit in toc -->
### Example

```text
jdoe/4123/add-readme
```

## Commit

We have adopted standards similar to [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) for how our git commit messages should be formatted. This leads to **more readable messages** that are easy to follow when looking through the **project history**.

<!-- omit in toc -->
### Format

Each commit message consists of a **header**, a **body** and a **footer**.

```text
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer than 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

<!-- omit in toc -->
#### Type

The commit type must be one of the following:

- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **test**: Adding missing tests or correcting existing tests

<!-- omit in toc -->
#### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end

Examples:

- fix: remove an unnecessary parameter
- feat: add validation to endpoint

<!-- omit in toc -->
#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

<!-- omit in toc -->
#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

<!-- omit in toc -->
### Revert

If the commit reverts a previous commit, it should begin with `revert:` , followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

<!-- omit in toc -->
### Example

```text
fix: add debouncing to asset scroller to correct browser scroll position

There is no debouncing when we store the asset container's scroll position.
This results in erratic, jumpy scrolling and a poor user experience. Improve
stability and usability with debouncing.

Closes #17056
```

## Pull Request

All proposed changes should be reviewed by opening a pull request.

Please try to keep pull requests small to decrease the time required to review and merge.

Pull requests must be completed by using **Squash and merge** option, keeping the PR id in the subject.

After a branch is merged, it **must** be deleted.
