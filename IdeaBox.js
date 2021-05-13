const readline = require("readline");

// BOLD: start symbol => **
//       end symbol   => ***

const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  grey: "\x1b[38;5;247m",
  code: "\x1b[48;5;254m",
};

const topics = {
  npm: {
    title: "**NPM Node package Manager***",
    related: ["globalPackage", "commandLineInterfacePackage"],
    text: `
NPM project started in 2011, and it shares open source libraries, that can be added to any NodeJS application.

  **>> npm init***
  In the project folder, running the 'npm init' command will initialize a node_modules folder, a package.json and
  a package-lock.json file.
  After that any library can be added to the project with 'npm install package'.
  
  **>> npm install***
  If you downloaded a project from github, the package.json and package-lock.json file will be in the project
  folder, but the node_modules folder won't be there. To install the actuall packages based on the previous two
  files, the 'npm install' command can be run.
`,
  },

  commandLineInterfacePackage: {
    title: "  command line interface package",
    related: [],
    text: `
        Exapmle usage: nodemon filename
        After change is saved to a file, it ends the actual run and starts again it.`,
  },

  globalPackage: {
    title: "  global package",
    related: [],
    text: `
There are libraries like nodemon that can be run as actual programs in the CLI, these are not added to
the projejct's dependencies, but added to the user's separate libraries folder.
If you want to add a package to be able to be used globally, the installation command is given a -g flag.
'npm install -g nodemon'`,
  },

  scripts: {
    title: "  scripts\n",
    related: [],
    text: `
examples:

"start": "nodemon ./index.js --exec babel-node -e js"

"debug": "DEBUG = express: * nodemon ./index.js"
    `,
  },

  nodejs: {
    title: "**Node JS***",
    related: ["fsLibrary"],
    text: "",
  },

  framework: {
    title: "  Framework",
    related: ["expressjs"],
    text: `
In real life, a framework is a supporting structure of an object, example: house, vehicle.
In programming, a framework gives a structure to build an app on top of.`,
  },

  expressjs: {
    title: `    ${colors.bold}Express JS${colors.reset}`,
    related: [
      "middleware",
      "basicExpressServer",
      "serveHTMLpagesStaticContent",
      "basicTemplateEngine",
    ],
    text: `
Express JS is a web framework that can be used in a Node.js application.
Essentially it makes it simple to handle server calls with a chain of middleware functions.
Each call can be routed to specific functions to handle them.
`,
  },

  basicExpressServer: {
    title: "      basic Express server",
    related: [],
    text: `
'''
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('hello')) // res.json({'hello': 'bello'})
app.listen(port, () => console.log('server started on port: 3000'))
''''
    `,
  },

  serveHTMLpagesStaticContent: {
    title: "      serve HTML pages and static content",
    related: [],
    text: `
app.use(express.static('publicFolderPath'))
app.get('/', (req, res) => res.sendFile('index.html')) // have to be located in publicFolder
app.get('/x', (req, res) => res.sendFile('folder1/x.html')) // have to be located in publicFolder/folder1
    `,
  },

  basicTemplateEngine: {
    title: "      add basic template engine\n",
    related: [],
    text: `
example, add ejs engine

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => {
  // index.ejs file have to be in views folder
  res.render('pages/index', {pageTitle: 'Welcome'}) // the object contains variables for the template
})
    `,
  },

  middleware: {
    title: "      middleware function",
    related: ["routingMiddleware", "staticMiddleware"],
    text: `
In this context, the middleware function is a function in the app's request-response cycle.
The function has two to four parameters. The first and second is the request object and the response object.
Each object has properties, and methods. The third parameter is the reference to the next function to be called
in the cycle. This must be called at the end of the middleware to not let the request hang in the air.

The middleware can execute any code, change req-res objects, end cycle.
The response object has multiple methods to call, but for a request only call one method of these.

handler(req, res, next) {
    ...
    next()
}

Middlewares are defined on the application object.
    app.use(callback)

Express executes all defined middlewares in the order of creation,each middleware must call next or the request
will hang on.
    app.use(callback1)
    app.use(callback2)
    app.use(callback3)

    Order of execution: callback1 => callback2 => callback3


They can be defined to be only executed on specific URL matches:
    app.use('spacific URI', callback)
There are for methods add middlewares for responding to HTTP request types
    app.get('path', callback)


`,
  },

  responseObject: {
    title: `        response`,
    related: [],
    text: `
res.send(x)   : various options for x
res.json(d)   : send back a json
res.end()     : end the call

res.redirect('http://linkedin.com')
res.download('images/rocked.jpg')

res.render('view.ejs')
res.sendStatus(404)
res.status(500).json({'error': 'message'})
`,
  },

  requestBody: {
    title: `        request`,
    related: [],
    text: `
The body of the request is not available by default to be readable for the program.

If you expect a JSON, this line have to be added:
'''
app.use(express.json())
app.post('/newItem', (req, res) => res.send(req.body))
''''

If URL encoded response is expected add this line
'''
app.use(express.urlencoded())
''''


Useful properties:
    req.originalUrl
    req.method
`,
  },

  routingMiddleware: {
    title: `        routing middleware ${colors.grey}(parameters)${colors.reset}`,
    related: [],
    text: `
- executed when specific URL matches
- executed when specific HTTP method matches (get, post, put, delete)
- end request by sending data back to browser

**parameter routes***

  **must*** have parameter for a URI
      app.get('xx/:parameter1', callback)

  **optional*** parameter for a URI
      app.get('xx/:parameter1?', callback)

  **multiple*** parameters in URI
      app.get('/item/:category/:id', callback)
    `,
  },

  staticMiddleware: {
    title: "        static middleware\n",
    related: [],
    text: `
Support static files like css, img.

app.use(express.static('public'))
    => makes the public folder available on /
app.use('images', express.static('images'))
    => makes the images folder available on /images
    `,
  },

  expressRouter: {
    title: `      scturture routes ${colors.grey}(express.Router)${colors.reset}`,
    related: [],
    text: `
With Express' Router function, you can create a modular, mountable route handler.
The advantage of this complete 'mini app' handler, is that if you create a feature specific interface like in a separate file

  
    const router = express.Router()

    router.get('/about', callback1)
    router.post('/add', callback2)
    router.delete('/delete', callback3)

    export default router;

This routing structure can be added to a specific route like:
    import ownRouter from './ownRouter.js'

    app.use('/own/route/123123', ownRoute)

And after that, the following routes will handle request:
  /own/route/123123/about, /own/route/123123/add, /own/route/123123/delete

  Good practice to group routes into modules with Router.
    `,
  },

  routeChaining: {
    title: `        route chaining\n`,
    related: [],
    text: `
app.route('/item')
     .get((req, res) => {})
     .put((req, res) => {})
     .delete((req, res) => {})
    `,
  },

  expressProxy: {
    title: "      proxy",
    related: [],
    text: `
A proxy is basically another server that pushes endpoint calls or traffic to an app.

For security reasons, server availability for proxies can be regulated.
'''
app.set('trust proxy', 'loopback')
''''
    `,
  },

  cookieSession: {
    title: "      cookie session",
    related: [],
    text: `
Cookies give a way to persist data between each server call on the client side.
This data can be encrypred to be kind of secure.

const cookieSession = require('cookie-session')
app.set('trust proxy', 1)
app.use(cookieSession({
  name: 'session',
  keys: ['random', 'rand'] // these are needed for the encryption
}))
router.get('/', (req, res) => {
  req.session.visitCount = ... + 1
  res.sendFile(file)
})
    `,
  },

  expressHandleErrors: {
    title: "      handle errors",
    related: [],
    text: `
Express has a built in error handler, that will return the error name and stack for the request.
From Express 5, asynchronous errors are also catched automatically.
Manually they can be catched with calling the next function with an error argument.

    app.get('/', function (req, res, next) {
      fs.readFile('/file-does-not-exist', function (err, data) {
        if (err) next(err)
        else     res.send(data)
      })
    })


Catch error in synchronous code:
    router.get('/', (req, res, next) => {
      try {}
      catch (err) {
        return next(err)
      }
    })

  Alternative and for asynchronous code:
    app.get('/', function (req, res, next) {

      Promise.resolve().then(function () {
        throw new Error('BROKEN')
      }).catch(next) // Errors will be passed to Express.
    })

Catch error in asynchronous timer code:
    app.get('/', function (req, res, next) {
      setTimeout(function () {
        try {
          throw new Error('BROKEN')
        } catch (err) {
          next(err)
        }
      }, 100)
    })

Last middleware before the exeption handler middleware can be a 'no route found' handler, giving a 404 page back.

**Error handler middleware***
Last middleware is the handler for errors, it takes 4 arguments (this character specifies the error handler).
    
    app.use((err, req, res, next) => {
      res.locals.message = err.message
      const status = err.status || 500
      res.locals.status = status
      res.status(status)
      res.render('error')
    })

    `,
  },

  favicon: {
    title: "      favicon",
    related: [],
    text: `
import favicon from 'serve-favicon'
app.use(favicon(path.join(__dirname, 'path/fav.ico')))
`,
  },

  expressSecurity: {
    title: "      security\n",
    related: [],
    text: `
- keep up-to-date and secured dependencies
- use Transport-Layer-Security TLS for sensitive data
- use Helmet's secutiry collection middleware
- use cookies securely
- check Node secutiry checklist, stay informed
`,
  },

  modules: {
    title: "  modules",
    related: [],
    text: `
Basically every node.js file is a separate module. If you want to use these separated functionalities you have
to import them into your code. This can be done with the require(path) function.
Modules can be from different sources, ones are shipped with node.js, you can write own ones, and with NPM they
can be installed.

example:
    const path = require('path');
    console.log('File' + path.basename(__filename))

To make something available from a module to another module, you have to be explicit about it. There is the
exports object, that you can add new key-values.

    exports.text = 'hello'

And this variable can be imported this way:

    const F1 = require('path/F1.js')
    console.log(F1.text)`,
  },

  globalObject: {
    title: "  global object",
    related: [],
    text: `
In the JS language there is a global name object, that is available in global scope.
For example, the console.log function is part of the global object: global.console.log



*Global like variables*
There are variables that can be used in global scope, and therefore they look like to be part of the global objejct, but they are not.
__dirname: full path of the module's directory
__filename: full path of the current module`,
  },

  processObject: {
    title: "  process object",
    related: [],
    text: `
The process object is available globally. It contains information of the node's process running.
Can be used to read environment variables. How?
Can be used to communicate with terminal or parent process. How?

process.pid:            process id
process.version.node:   node.js version that runs the process
process.argv:           arguments sent to the process
                          returns an array 0. full path of node
                                          1. full path of file
                                          2. next written text
                                          3. space separated next text

process.stdout.write('hello')
    difference between console.log() is that there is no new line charachet at the end
process.stdout.on('data', data => {})
    gives an interface for the user to start writing in, listens to enter event, the written text is the data

process.exit()
    creates exit event that can be handled, then close the process
process.on('exit', () => {})

process.stdout.clearLine()  removes the last line from the console
process.stdout.cursorTo(0)  moves the cursor to specified position of the line



*Process object usage with readline*

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question('question?', answer => {})`,
  },

  fsLibrary: {
    title: "  fs (filesystem) library\n",
    related: [],
    text: `
ACCESS DIRECTORY FILE NAMES
    fs.readDir('path', (err, data) => {})
    fs.readDirSync('path')

READ FILE
    BUFFER  fs.readFile('x.jpg', (err, data) => {})
    STRING  fs.readFile('x.txt', 'utf-8', (err, data) => {})
    OBJECT  const data = require('x.json')

    readFileSync()

WRITE FILE
    fs.writeFile('file', text, (err) => {})
    fs.writeFileSync('file', text)
    fs.appendFile('file', text, (err) => {})

RENAME FILE/DIRECTORY
    fs.renameSync('fullPath1', 'fullPath2')
    fs.rename('fullPath1', 'fullPath2', err => {})

CREATE DIRECTORY
    fs.mkdir('folder', err => {})

DELETE EMPTY DIRECTORY
    fs.rmdir('fullpath', err => {})

DELETE FILE
    fs.unlinkSync('fullPath')

CHECK FILE/FOLDER EXISTS
    fx.existsSync('fullPath')
`,
  },

  webserver: {
    title: "  Webserver",
    related: ["staticWebServer", "dynamicWebServer"],
    text: `
Web app can be either static or dynamic with a server through a web API communication.
Static web apps basically means, that all information, is given to the client on first page load. And no interaction is
done that would require an API.
        `,
  },

  staticWebServer: {
    title: "    Static web server",
    related: [],
    text: `
A problem with static web sites can be, that they may contain the same information at different parts of the source
code, therefore it contains redundant parts. Furthere more, it's harder to keep all these places up-to-date.



./index.html
    hello

./server.js
    const express = require('express')
    const app = express()
    app.use(express.static(__dirname))
    const server = app.listen(3000)

    // server.address().port => 3000

>> nodemon server.js
        `,
  },

  dynamicWebServer: {
    title: "    Dynamic web server\n",
    related: [],
    text: `
./server.js
    const express = require('express')
    const bodyParser = require('body-parser')
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    // request from browser is URL encoded, need middleware

    app.get('/route', (req, res) => {
        res.send('success')
    })

    app.post('/route', (req, res) => {
        console.log(req.body)
        res.sendStatus(200)
    })

    // route parameter
    app.get('/messages/:user', (req, res) => {
        const user = req.params.user
    })

    const server = app.listen(3000)
        `,
  },

  web: {
    title: "**Web***",
    related: ["webservice", "rest"],
    text: ``,
  },

  webservice: {
    title: "  Web service",
    related: [],
    text: `
A web service is a collection of open protocols and standards used for exchanging data between applications or systems.
Facilitates communication between different programming languages Python, Java, JS, C++ and different operating systems
using open standards.
`,
  },

  rest: {
    title: "  REST",
    related: ["uri", "crud"],
    text: `
Representational State Transfer

Software architerture style which uses a subset og HTTP, was introduced in 2000.
It is basically about organizing resources in a common accessible interface using HTTP standard methods.
  - Each resource is identified by URIs/ global IDs.
  - REST uses various representation to represent a resource like text, JSON, XML.

A REST Server simply provides access to these resources.
REST client accesses and modifies the resources using HTTP protocol.


Used HTTP methods:
  GET    − provide a read only access to a resource
  PUT    − create a new resource
  DELETE − remove a resource
  POST   − update a existing resource or create a new resource
`,
  },

  uri: {
    title: "    Uniform Resource Identifier",
    related: [],
    text: ``,
  },

  crud: {
    title: "    CRUD\n",
    related: [],
    text: ``,
  },

  javascript: {
    title: "**Javascript***",
    related: [],
    text: ``,
  },

  babel: {
    title: "  Babel",
    related: [],
    text: `
Babel is a JavaScript compiler, it coverts ECMA script 2015+ code to be backwards compatible in older environments.

features:
    - transforms syntax
    - polyfill features that are missing
    `,
  },

  compiler: {
    title: "    compiler\n",
    related: [],
    text: `
Translates source code (basically from a higher level) programmming language to another (lower level) programming
language. The process creates an executable program.
    `,
  },

  VSCode: {
    title: "VS Code",
    related: [],
    text: `
Usefull, widely applied extension for formatting: Prettier. Because it makes your code prettier.

Command + Shift + D : duplicate line below
Option + Click : add new cursor
Option + Command + Arrow : add new cursor above/below
Command + D : Select same pattern, add new cursor
    `,
  },

  useful: {
    title: "Useful",
    related: [],
    text: `
Terminal tip: make multiple commands in one line

    cd express-app && npm init
      if the first command is succesful, the next one is run too


Data generation: mockaroo.com


Postman:
    - create different requests
    - shows code how this request is made in programming languages


Other frameworks:
    Koa, hapi, Sails.js


Layman's term: describe complex or technical statement using words and terms that not specialized people can understand.
    `,
  },

  architech: {
    title: "**Architect***",
    related: [],
    text: `
**Different types of architects***

  **Enterprise Architect***
      - focus on making IT work for business
      - have technical background
      - understand the business at a high level + understand IT
  
  **Software architect***
      - exeptionally technical
      - less concerned with day-to-day business
      - know how to code -> find cost-effective solutions
      development team --- architect --- business
  
  **Infrastructure architect***
      - responsible to run the business smoothly
      - data security


Good architect
    - understand latest business technologies
    - have good design skills
    - have strong communication skills

Successful enterprise architechture
    - reduce support and operational cost
    - define technical standards
    - reduce risks
    - improves continuity of oprerations
    - facilitate business processes
    - clear upgrade path
  overall, the organisation sees it as valuable

Traditional Enterprise architecture
    - each business unit maintains its own information system
         -> duplication, harder access globally
    - to many platforms
    - independent parts





**Developer versus Architect***
    Developer can be focused on the language specific implementations, and on the tasks s/he is given to.
    Architect's task is to see the big picture. S/he knows well enough every part of the application, and he can make
      suggestions for problems. The implementation is not he's role, and he shouldn't be too specific about an task.
      He is not there to solve the actual problem by oneself. He is more of a teacher than a dictator.
    `,
  },

  // ,empty: {
  //     title: '',
  //     related: [],
  //     text: ``
  // }
};

const format = {
  bold: (text) =>
    text.replace(/[*]{3}/g, colors.reset).replace(/[*]{2}/g, colors.bold),

  code: (text) => {
    let pad = false;
    const paddedText = text.split("\n").map((line) => {
      if (/[']{3,4}/.test(line)) pad = !pad;
      return pad ? line.padEnd(100) : line;
    });

    const codeText = paddedText
      .join("\n")
      .replace(/[']{4}/g, colors.reset)
      .replace(/[']{3}[ ]*\n/g, `${colors.code}`);

    return codeText;
  },
};

const print = {
  titles: () => {
    Object.keys(topics)
      .map((it) => topics[it].title)
      .forEach((title, ix) => {
        const index = `${ix}`.padStart(3, " ");
        print.format(`${colors.grey}${index}${colors.reset}  ${title}`);
      });
  },

  topic: (topicKey) => {
    const topic = topics[topicKey];

    print.bold(topic.title);
    print.format(topic.text);

    for (const relatedKey of topic.related) {
      print.bold("\n" + topics[relatedKey].title);
      print.format(topics[relatedKey].text, 3);
    }
  },

  format: (text, padding = 0) => {
    const lines = format.code(format.bold(text)).split("\n");
    for (const line of lines) {
      console.log(" ".repeat(padding) + line);
    }
  },

  bold: (text) => console.log(`${colors.bold}${text}${colors.reset}`),
};

function findTopicKey(input) {
  let i = 0;
  for (const key of Object.keys(topics)) {
    if (topics[key].title === input || `${i}` === input) {
      return key;
    }
    i++;
  }
}

// *'s have to be removed... any not number or a-z can be removed perhaps
const topicTitles = Object.keys(topics).map((it) => topics[it].title);

const rl = readline.createInterface({ input: process.stdin, output: null });

class Frames {
  static init() {
    console.log(colors.reset);
    console.clear();
    print.titles();

    // handle current terminal width?
    Frames.input();
  }

  static input() {
    rl.question(">>> ", (input) => {
      console.clear();
      console.log(colors.reset);

      switch (input) {
        case "quit":
          Frames.exit();
          break;

        case "":
          Frames.init();
          break;

        default:
          if (topicTitles.includes(input) || !Number.isNaN(Number(input))) {
            const topicKey = findTopicKey(input);
            print.topic(topicKey);
          }
      }

      Frames.input();
    });
  }

  static exit() {
    process.exit();
  }
}

Frames.init();
// 1, concrete title 2, search with keyword if no exact match 'Do you mean one of these: ...'

// have a state, in a separate text file, what number was last checked. Its needed for modifying the text, and spare
//    time to get back to the previous page
