# Contributing to VueTube

Hello! First of all, I'd like to say thank you for your interest in contributing to the VueTube project. If you haven't
already, I'd like to extend to you a warm welcome to our [Discord server](https://discord.gg/7P8KJrdd5W). Hopefully this
page will help make the contributing experience as seamless as possible.

# Our Projects

Although VueTube started as a simple YouTube client, it has since grown into a full-fledged ecosystem of projects, each
with their own purpose. Here's a list of all of our projects, and what they do:

[![VueTube](https://github-readme-stats.vercel.app/api/pin/?username=VueTubeApp&repo=VueTube)](https://github.com/VueTubeApp/VueTube)

[**VueTube**](./app.md) is the repository for the main VueTube project, containing the front end codebase for the app.

[![VueTube Extractor](https://github-readme-stats.vercel.app/api/pin/?username=VueTubeApp&repo=VueTube-Extractor)](https://github.com/VueTubeApp/VueTube-Extractor)

[**VueTube Extractor**](./extractor.md) is a library designed to extract data from streaming services, designed for use
in VueTube App.

[![VueTube Translator](https://github-readme-stats.vercel.app/api/pin/?username=VueTubeApp&repo=VueTube-Translator)](https://github.com/VueTubeApp/VueTube-Translator)

**VueTube Translator** is a tool for translating fields of GitHub files like JSON or JS and export the result with the
correct structure. It was created to help VueTube translators, but it can be used for any other purposes.

[![VueTube HTTP](https://github-readme-stats.vercel.app/api/pin/?username=VueTubeApp&repo=vuetube-http)](https://github.com/VueTubeApp/vuetube-http)

**VueTube HTTP** is a plugin for native HTTP requests, file download/uploads, and cookie management. It's a fork of
the [original HTTP project](https://github.com/capacitor-community/http) from Capacitor Community, with additions by the
VueTube Team.

# For Developers

## General Workflow

We ask you to first familiarise yourself with
GitHub's [Pull Request workflow](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
. This is the general workflow we use for all of our projects:

1. Fork the repository you wish to contribute to.
2. Make your changes.
3. Submit a pull request to the main repository.
4. Wait for a maintainer to review your changes.
5. If your changes are accepted, they will be merged into the main repository.
6. If your changes are rejected, you will be notified of the reason why.

Please note that different repositories may have slightly different workflows, so please refer to the other pages in
this section for more information.

### Filing a PR

A pull request is fairly simple, and it's done here on GitHub. All we ask is that you include a few screenshots (and/or
screen recordings) of what you've actually changed within the app.

During the code review process, we may ask you to make changes to your code or ask you to explain why you made certain
changes. Please answer these questions as best you can, as it helps us understand your thought process. After
implementing changes request by our team, please notify us by commenting on the PR.

We also ask you to keep your PRs as small as possible to address one issue at a time. This makes it easier for us to
review your code, and it also makes it easier for you to fix any issues that may arise.

Furthermore, please reduce the number of commits in your PR to a minimum. It is recommended that you squash your commits
into one commit before submitting your PR and that you append small changed to a previous commit by
using `git commit --amend`.

Our team of maintainers will review your changes within a few days. We ask that you be patient, as we are all volunteers
and have other commitments outside VueTube.

## Coding Standard

### Coding Style

Our JavaScript & TypeScript code are formatted using [EsLint](https://eslint.org/). Please ensure that your code is
formatted correctly before submitting a PR.

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for our commit messages. This helps us
keep track of what changes have been made to the codebase at a glance. Please ensure that your commit messages follow
this format.

Use of [Emoji](https://gitmoji.dev/) is also encouraged, but not required.

### Unit Tests

Some of our repositories have unit tests. If you are making changes to a repository that has unit tests, please ensure
that your changes do not break any of the existing tests. If you are adding new features, please add unit tests for
them.

[//]: # (For When We have a Code of Conduct)

[//]: # (## Code of Conduct)

[//]: # (We ask that you follow our [Code of Conduct]&#40;./code-of-conduct.md&#41; when contributing to VueTube. This is to ensure that our community is a safe and welcoming place for everyone.)

# For Translators

As VueTube is an international project, we need translators to help us translate the app into different languages. If
you are interested in helping us translate the app, please refer to our [Translation Guide](./translation.md).

# For Designers

If you are a designer and would like to help us design the app, please refer to our [Design Guide](./design.md). We also
encourage you to join our [Discord server](https://discord.gg/7P8KJrdd5W) to discuss your ideas with us.

[//]: # (Not Available for Now)
[//]: # (# For Documentation Writers)

[//]: # ()
[//]: # (If you are interested in helping us write documentation for VueTube, please refer to)

[//]: # (our [Documentation Guide]&#40;./documentation.md&#41;.)

# Thanks

We hope that you have had a smooth experience contributing to VueTube. Any additional questions or concerns can be asked
on our [Discord server](https://discord.gg/7P8KJrdd5W).
