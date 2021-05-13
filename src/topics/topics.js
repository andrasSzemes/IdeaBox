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
    title: `    **Express JS***`,
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
    title: `        routing middleware |G|(parameters)||G||`,
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
    title: `      scturture routes |G|(express.Router)||G||`,
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
  Can be used to communicate with terminal or parent process. How?
  
  process.env.XXX:        access XXX environmental variable
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

  importRequire: {
    title: "  import vs require\n",
    related: [],
    text: `
                                        import             import with babel             require
  checks node modules                     NO                     YES                       YES
  declared anywhere                      only at top        only at top                    YES
  can import just a part of file          YES                    YES                       NO
  used with module.exports                NO                     NO                        YES
  used with export keyword                YES                    YES                       NO
      `,
  },

  JSPrototype: {
    title: "  prototype",
    related: [],
    text: `
  
  Javasscript is not a class based langage, but the **class keyword*** can be used to create cunstructs as prototypes.
  Basically this keyword is a syntactic sugar for developers familiar with OOP development. This code is transpiled into
  prototype based code.
  **extends*** keyword is also available for prototype chaining.
  
  Using prototypes, gives as a way to work with object more organized. It helps to abstract from the plain objects
  to concepts.
  Creating blueprints for objects can remove redundant object {} notions.
  
  Objects that are created from a prototype are customisable, and can be used as a starting point to build out objects.
  If there are common properties and methods in the prototype object, it **removes unnecessary memory duplication***.
  These common parts are inherited from the prototype object.
  
  **Prototype chain*** (inheritence)
      With this feature, methods and properties can be given from an other prototype without redeclaration of these
      functionalities explicitly.
  '''
      Basket.prototype = new Item()
  ''''
  
  **Contructor function***
      There are build in constructor function in the language, like Array. Therefore the syntax to create an array can be
      familiar:
      '''
      const array = new Array()
      ''''
  
      Objects created with this function can be consumized by passing arguments to it.
      There is a convention to start constructor functions with a capital letter for distinguishing purposes.
      In the functions's body, key value can be added to the new object by the reference **this*** which refers to the
        newly created object.
  
      '''
      function Basket(price, items) {
        // custom props
        this.price = price;
        this.items = items;
      }
  
      // common props
      Basket.prototype.name = 'basket'
      ''''
      
      `,
  },

  JSClass: {
    title: "  class\n",
    related: [],
    text: `
  In contrast with Java which is a only OOP language, JS classes doesn't have options like private, protected every method
  and property is public.
  
  Also, the declaration of properties is a bit different, because they don't have to name them in the class's body, only
  in the constructor method.
  
  Inheritence is available is JS classes too using the **extends*** keyword.
  
  Declaring a class can be done with a class expression, using the **class*** keyword.
  
  The usage of **super()*** is the same as in Java.
  
  Classes in JS are only syntactic sugars, they are transpiled into prototypes when the code runs.
  
  basic usage example:
  '''
  class Item {
    constructor() {
      this.type = 'goods'
    }
  
    logItem() {}
  }
  
  class Basket extends Item {
    constructor(price, items) {
      super()
      this.price = price
      this.items = items
    }
  }
  
  class Order extends Basket {
    constructor(price, items, name) {
      super(price, items)
      this.name = name
    }
  }
  ''''
      `,
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
    title: "**Architect***\n",
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

  design: {
    title: "**Design***",
    related: [],
    text: ``,
  },

  singleResponsibility: {
    title: "  **S***ingle Responsibility Principle",
    related: [],
    text: `
  Responsibility: Only one reason to change.
      An example to this is that you get a modification request for a calculation. You modifies A class.
      Then you have another request regarding save files in a different format, and you modifies A class again.
        => than A class have more than one reason to change
      
      The class behaviour should be describable with one sentence.
  
      Checks for SRP:
        Describable with one sentence?
        Does this sentence contain less than 25 words?
        Is it lack of 'if', 'or', and 'but'?
        One responsibility?
  
  
      Maximume cohesive class:
        every method use all properties of the class
      If the cohesion is small in a class, probably the SRP is violated.
      `,
  },

  openClosed: {
    title: "  **O***pen-Closed Principle",
    related: [],
    text: `
If in a car you need to replace the windshield, the repair does not require you to modify the engine.

  Open means that the logic of the module can be upgraded on need.
  Closed means that the source code of the module does not change when there is an upgrade. No ripple effect.
  
  Ideally, you will be able to add new behavior by adding new code and changing little or no old code.
  The right design is creating the right abstraction.
  
  
  Exapmles of OCP:
      - well designed API of a module or component
      - well defined function, class, or interface
      - an implemented design pattern
      - a domain specific language, or architectural decision ?
  
  
  **Extension points***
    - virtual methods
    - absctract methods
    - interface inheritance
    - parameter to function
    - setter of another class
    - higher order function

    Extensions must conform to extension points, which declare contracts.
    Beyond the extension point contract, an extended plugin does not know anything about the plugin connecting it.
  

  **Design patterns***

    **Plugin Architecture Pattern***
      The extension point exposes the business logic and defines how you can communicate with the system.
      Plugins are easily replacables, can be used in parallel, and have it's own plugins.
      When this pattern is implemented, making room for new features, adding new functionalities should be easy.


    **Strategy Pattern***
      Can be used if you have a task and you want to do the same task differently based on the context.
      For example the task is sorting, you call the sort method of a class that impelements a strategy interface with a
      sort method. The class can be easily replaced if other versions of sorting implements the Strategy Interface.

      The basic idea about this for me, is that if you have an Interface and different classes impelments it, they can
      be used in one place of the other even some inner implementation logic changes.

    **Template Method Pattern***
      Basically the same logic as Strategy Pattern. But Strategy pattern uses delegation (an object handles a request
        by delegating it to a second object) Template pattern uses inheritance.
  
  Shotgun Sugrery Anti-pattern
      A single change impacts the rest of the application.
  
  

  **Drawbacks of OCP:***
      - costly, requires considerable time and effort to develop abstraction
          (be familiar with product backlog, previous features)

      - abstractions make software design more complex

  **Positives:***
      Increase flexibility, reusability, and maintainability.
    
  **When to use***
    only apply abstraction to the part of the program that requires frequent change.

  

  Continous refactoring:
      Every time a change presents a problem tha you did not protect against upfront, you must refactor the code.
      `,
  },

  liskowSubstitution: {
    title: "  **L***iskow Substitution Principle",
    related: [],
    text: `
  
      `,
  },

  interfaceSegregation: {
    title: "  **I***nterface Segregation Principle",
    related: [],
    text: `
  
      `,
  },

  dependencyInversion: {
    title: "  **D***ependency Inversion Principle\n",
    related: [],
    text: `
  
      `,
  },

  overDesign: {
    title: "  Over design",
    related: [],
    text: `
Negative impacts of too much abstraction:
    - abstraction is expensive
    - can make code difficult to understand and maintain


Solution for over design is TDD.
      `,
  },

  overDesign: {
    title: "  Simple enough design",
    related: [],
    text: `
KISS Keep It Simple, Stupid

YAGNI You aren't gonna need it
      `,
  },

  // ,empty: {
  //     title: '',
  //     related: [],
  //     text: ``
  // }
};

export default topics;
