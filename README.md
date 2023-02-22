# The #SmartMeeting presentation

Internal presentation for the [Numéricco](https://www.numericco.com/) company to search the smart meetings.

Inspired by the [#NoMeetings](https://nomeetings.work/) project.

## Environment

- LOCAL: http://web.smartmeeting.lndo.site/
- DEV: ~
- PRE: ~
- PRO: https://jjpeleato.com/courses/smartmeeting/

## Project

Project built with the framework [reveal.js](https://revealjs.com/).

More information on [GitHub](https://github.com/hakimel/reveal.js)

### Installing dependencies

- You have to install [Lando](https://lando.dev/)

If Lando's tools does not work for you, there is another way. You must install the environment manually: XAMP, Node.JS, NPM or Yarn and Gulp CLI.

For more information visit:

- [XAMP](https://www.apachefriends.org/es/index.html)
- [Node and NPM](https://nodejs.org/es/)
- [Yarn](https://yarnpkg.com/es-ES/)
- [Gulp](https://gulpjs.com/)

**Notes:**
- If you work with Windows < 10. To execute the commands, we recommend installing [Cygwin](http://www.cygwin.com/).
- If you work with Windows 10. To execute the commands, we recommend installing [WSL 2 with Ubuntu](https://docs.microsoft.com/es-es/windows/wsl/install-win10).
- If you work with Windows 10. You need install the following package [win-node-env](https://www.npmjs.com/package/win-node-env).
- I recommend installing the following IDE for PHP Programming: [PHPStorm](https://www.jetbrains.com/phpstorm/) (recommended) or [Visual Studio Code](https://code.visualstudio.com/).

### Project skeleton

```
├─ .husky/ # Husky directory (git-hooks)
├─ assets/
├─ gulp/
│  ├─ task/
│  └─ config.js # Paths and configuration Gulp system.
├─ public/
├─ .babelrc
├─ .editorconfig
├─ .gitignore
├─ .lando.yml
├─ .stylelintignore
├─ .stylelintrc
├─ commitlint.config.js
├─ gulpfile.babel.js
├─ LICENSE
├─ package.json
└─ README.md
```

### Installing

1. Open the `README.md` and rename the name of presentation, name of project and description.
2. Open the `lando.yml` and rename the project and proxy name.
3. Open your terminal and browse to the root location of your project.
4. Run `$lando start`.
	- The project has a `.lando.yml` file with all the environment settings.
	- The command starts the installation process when it finishes, you can see all the URLs to access.
5. If required. Run: `$lando npm install --save-dev` or `$lando yarn install --dev`.
6. If required. Run: `$lando npm run prepare`.
7. End. Happy developing.

### Developing with NPM or Yarn and Gulp

- Open your terminal and browse to the root location of your project.
- To work with and compile your SASS and JS files on the fly start: `$lando gulp`, `$lando npm run gulp:dev` or `$lando npm run gulp:prod`
- Gulp actions commands list:
	- `$lando gulp clean` Delete all files.
	- `$lando gulp css` Compile SASS to CSS and validate SASS according Stylelint. Not concat.
	- `$lando gulp cssAssets` Copy CSS assets to public directory.
	- `$lando gulp copyCssFontawesome` Copy Fontawesome CSS assets to public directory.
	- `$lando gulp copyWebfontsFontawesome` Copy Fontawesome webfont assets to public directory.
	- `$lando gulp fontAssets` Copy fonts assets to public directory.
	- `$lando gulp fontawesome` Copy fontawesome assets to public directory.
	- `$lando gulp images` Copy and minify image assets to public directory.
	- `$lando gulp imagesAssets` Copy and minify other image assets to public directory.
	- `$lando gulp js` Validate the code with JSHint. Minify the JS files.
	- `$lando gulp jsAssets` Copy JS assets to public directory.
	- `$lando gulp jsCopy` Copy another JS assets to public directory.
	- `$lando gulp validate` Validate JS with JSHint and SCSS according Stylelint.
	- `$lando gulp validateJs` Validate JS with JSHint.
	- `$lando gulp validateScss` Validate SCSS according Stylelint.
	- `$lando gulp watch` Compile SASS to CSS and concat and minify JS files in real-time.
- NPM actions commands list:
	- `$lando npm run prepare` Enable Git hooks. **Important: Run always after npm install.**
	- `$lando npm run gulp:dev` Compile for development environment.
	- `$lando npm run gulp:prod` Compile for production environment.
	- `$lando npm run gulp:validate` Run validate JS and SCSS files.

### Technologies and tools

The present project uses several technologies and tools for the automation and development process. For more information and learning visit the following links.

1. [Reveal.js](https://revealjs.com/)
2. [Lando](https://docs.devwithlando.io/)
3. [Docker](https://www.docker.com/)
4. [Git](https://git-scm.com/)
5. [Nginx](https://www.nginx.com/)
6. [Node.js](https://nodejs.org/)
7. [NPM](https://www.npmjs.com/)
8. [Yarn](https://yarnpkg.com/)
9. [Gulp](https://gulpjs.com/)
10. [JSHint](https://jshint.com/)
11. [Stylelint](https://stylelint.io/)
12. [Fontawesome](https://fontawesome.com/)
13. [EditorConfig](https://editorconfig.org/)
14. [Husky](https://www.npmjs.com/package/husky)
15. [Conventional Commits](https://www.conventionalcommits.org/)
16. [Commitlint](https://commitlint.js.org/)
17. [Commitizen](http://commitizen.github.io/cz-cli/)
18. [Human.txt](http://humanstxt.org/)
19. [Security.txt](https://securitytxt.org/)

**Note:** Thanks all people to work on these projects.

### Clarifications

1. It is very important that if you deploy the project to publish. The **DocumentRoot** on the VirtualHost has to point to the **public/** directory. 
2. At the moment you can not update the `gulp-imagemin` package because it generates an error. I will investigate in the following commitments. 
3. You can not update the `stylelint`, `stylelint-config-standard` and `stylelint-scss` because `gulp-stylelint` package cannot work with them.

### Others clarifications

1. It is possible that on macOS the Gulp tasks do not run the correct form. In this case install NodeJS, NPM and Gulp-cli in your OS and execute the tasks outside the Docker containers.

## Finally

More information on the following commits. If required.

Grettings [**@jjpeleato**.](https://www.jjpeleato.com/)
