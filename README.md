# yannic.world

[![web badge]][web]
[![uptime badge]][web]
[![contributors badge]][contributors]
[![travis badge]][travis]
[![david badge]][david]
[![david dev badge]][david dev]
[![donate badge]][donate]

> Blog for [yannic.world][web]

## Usage

To view your blog post as you're writing it, you can:
- Follow the steps in the Development section to run the app and render your blog post on every change
- Use an editor with Markdown support (e.g VS Code) (**note**: only HTTPS images will show when previewed)
- On GitHub itself once you've made a Pull Request (Netlify will comment a deploy preview link)

### Creating New Posts

1. Download the source code:

    ```bash
    git clone https://github.com/wopian/yannic.world.git
    cd yannic.world
    ```

1. Create a new branch (`git checkout -b {branchName}`)

1. Create a new [Markdown] file (i.e `yyyy-mm-dd-slug.md`) in `/content/` with the following content:
   ```yaml
   ---
   title: # (max 50 characters)
   shortTitle: #(max 25 characters)
   synopsis: # Shown on index and when embedded on other sites
   author: Yannic Geurts
   authorImage: /authors/yannic-geurts.png # Or a HTTPS image link
   image: /posts/{yyyy}/{mm-dd-slug}/image.jpg # Or a HTTPS image link
   ---

   ## Your Blog Post Content...
   ```

1. Edit the [Markdown] file with your blog content after the `---`.
1. Save images in `/static/posts/{yyyy}/{mm-dd-slug}` or link to HTTPS images.
1. Add the new files to Git.
1. Commit and push files upstream.
1. Create and merge the Pull Request on GitHub.

## Development

### Requirements

- [git](https://git-scm.com/) 2.0.0 or newer
- [node.js](https://nodejs.org) 10.0.0 or newer
- [yarn](https://https://yarnpkg.com) 1.0.0 or newer

### Setup

1. Download the source code:

    ```bash
    git clone https://github.com/wopian/yannic.world.git
    cd yannic.world
    ```

1. Install dependencies:

    ```bash
    yarn
    ```

### Commands

```bash
# Start dev server
yarn dev
# Lint source code
yarn lint
```

## License

All code released under the [MIT license]

[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[mit license]: https://github.com/wopian/yannic.world/blob/master/LICENSE.md

[web]: https://yannic.world
[web badge]: https://flat.badgen.net/uptime-robot/status/m780944859-1b37fbba6273469ee7d45967
[uptime badge]: https://flat.badgen.net/uptime-robot/month/m780944859-1b37fbba6273469ee7d45967

[david]: https://david-dm.org/wopian/yannic.world
[david badge]: https://flat.badgen.net/david/dep/wopian/yannic.world

[david dev]: https://david-dm.org/wopian/yannic.world?type=dev
[david dev badge]: https://flat.badgen.net/david/dev/wopian/yannic.world

[travis]: https://travis-ci.com/wopian/yannic.world
[travis badge]: https://flat.badgen.net/travis/wopian/yannic.world

[contributors]: https://github.com/wopian/yannic.world/graphs/contributors
[contributors badge]: https://flat.badgen.net/github/contributors/wopian/yannic.world

[donate]: https://paypal.me/wopian
[donate badge]: https://flat.badgen.net/badge/support%20me%20on/paypal.me/pink
