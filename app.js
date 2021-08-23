// npm - global command, comes with node
// npm --version (displays the version)

// install local dependency/package - use it in this particular project
// npm i <packageName> 

// install global depency/package - use it in any projects
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manefest file (stores important info about project/package)
// manual creation (create package.json in the root, create properties individually, etc)
// npm init (step by step interactive process, press enter to skip)
// npm init -y (create everything by default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
newItems = _.flattenDeep(items)
console.log(newItems)