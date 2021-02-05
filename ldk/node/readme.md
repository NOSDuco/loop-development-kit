# Loop Development Kit (LDK) for NodeJS

## Developing

### Prerequisites

You should have the following installed:

- Node 10+
- Olive Helps

### Setup

#### Setting Up Your Loop

Olive Helps expects your library to start its Loop server when launched. The LDK takes care of most of that for you, what you need to do is:

- Create your `package.json` file.
- Import the LDK.
- Create your `main` script (usually `index.js` or `src/index.js`):
    - Create an implementation object that satisfies the [[Loop]] interfaces.
    - Initialize the appropriate Loop with your implementation and call `.serve` on it.

#### Install the Package

Install this library as a dependency:

```shell
npm i @oliveai/ldk -P
```

##### Example Loop

Here's an example main script for a Loop:

```javascript
const { serveLoop, Logger } = require('@oliveai/ldk');
const Loop = require('./loop'); // Constructor that generates objects meeting the Loop interface.

const logger = new Logger('example-loop');
const loop = new Loop(logger);
serveLoop(loop);
```

### Running Locally

#### Local Loop Command (Recommended)

Olive Helps lets you add a local command as a Local Loop:

1. Open Olive Helps.
2. Open the Loop Library:
    1. Click the Hamburger icon.
    2. Click Loop Library.
3. Click the Install Local Loop button:
4. Select the working directory for the command.
5. Enter the command to be executed, including any arguments.
6. Click Install.

The command will be installed as a Loop. If you need to change the command or its arguments you'll need remove it and then add the new commands.

#### Packaged Command

Instructions to come! We're always working on improving the LDK developer experience and this section is empty while we're making some dramatic improvements to make your life easier.

### Troubleshooting and Debugging

Olive Helps logs are available in the following directories for your OS:

```shell
~/Library/Logs/Sidekick # MacOS
/var/log/Sidekick       # Linux
%AppData%/Logs          # Windows
```

`tail -f` the log file (usually `Sidekick-X.Y.Z.log`) to watch things happen!


## Concepts

### Loops

This LDK can be used to write Loops for Olive Helps. More detail about Loops is available on the {@page Loops} page.

- [Basic Loops Example](https://github.com/open-olive/sidekick-controller-examplenode) - Recommend using as a starting point for new Loops.

TODO: Change this link

## LDK Development

### Dependencies

The `.proto` files in `src/shared/proto` are inserted with Git subtrees. To update the subtree, and rebuild the protoc files, execute `npm run protoc`.

### Testing

Tests are written with [`ts-jest`](https://kulshekhar.github.io/ts-jest/).

Set `TEST_LOGGING` environment variable to a non-empty value to get Logger output when running tests.