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
    title: "      basic server",
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

  basicExpressServerWithMongo: {
    title: "      basic server with MongoDB",
    related: [],
    text: `
MongoDB is a NoSQL database.

'''
  const mongoose = require('mongoose')
  const dbUrl = 'mongodb://user:password@...' // read from environment variables

  const Message = mongoose.model('Message', {
    name: String,
    message: String
  })

  app.post('route', (req, res) => {
    const message = new Message(req.body)
    message.save((err) => {
      if (err) sendStatus(500)
      res.sendStatus(200)
    })
  })

  app.get('route', (req, res) => {
    Message.find({}, (err, messages) => {
      res.send(messages)
    })
  })

  mongoose.connect(dbUrl, {useMongoClient: true}, (err) => console.log(err))

  Message.findOne({message: 'badword'}, (err, censored) => {
    if (censored) {
      console.log('censored word', censored)
      Message.remove({_id: censored.id})
    }
  })
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

  testJasmin: {
    title: "  test with Jasmine",
    related: [],
    text: `
>> npm install --save-dev jasmine

create testing folder
>> ./node-modules/.bin/jasmine init

add test script to package.json
    "scripts": {
      "test": "jasmine",
      ...
    }

spec/server.spec.js:
'''
  describe('calc', () => {
    it('test 1', () => {
      expect(2*2).toBe(4)
    })
  })
''''

asyncronous test
>> npm install --save-dev request

'''
it('200 ok', (done) => {
  request.get('http://localhost:3000/route', (err, res) => {
    expect(res.statusCode).toEqual(200)
    
    // have to be called at the end of the test. The test's "timer" waits for the function response until this call.
    done()
  })
})
''''
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
    title: "    Dynamic web server",
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

  HTTPServerSocketIo: {
    title: "    Server on Express & Socket.io\n",
    related: [],
    text: `
**Update strategies***
Polling
    every few seconds a HTTP request is sent to server to check for update

WebSocket
    informs the client from the server (push notification)


**Socket.io***
  Enables real time, bidirectional, event based communication. Therefore it's available both for frontend and backend
  development.
  In comparison, Express does not allow requests from the server to the client.


  Defaults back to polling if not supported in the environment.





**Basic backend usage***

./server.js
'''
  const express = require('express')
  const app = express()
  const http = require('http').server(app)
  const io = require('socket.io')(http)

  app.post('/route', (req, res) => {
      io.emit('x event', req.body)
      res.sendStatus(200)
  })

  io.on('connection', socket => console.log('user connected'))

  const server = http.listen(3000)
''''
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

  webservice: {
    title: "  MIME type",
    related: [],
    text: `
Multipurpose Internet Mail Extensions - **media type***
    - a standard that indicates the nature and format of a document, file, or assortment of bytes

**Responsible for:***
  When a browser asks for a URL, it recieves a HTTP response from a server. A header is part of this response, and it
  contains a Content-Type key. The browser can determine how to process the response based on this value. It's like
  the extension of a file, that shows what the file is and how the computer have to handle it.
    
  If configured badly, browser can misinterpret the content, site will not work correctly, downladed files may
  bemishandled.

Categorize the content's type: **type/subtype***

    **type*** represents the general category into which the data type falls, such as video or text.
      There are two classes of type: discrete and multipart.
        Discrete types are types which represent a single file or medium, such as a single text or music file, or a
        single video.

        Multipart represents a document that's comprised of multiple component parts, each of which may have its own
        individual MIME type; or, a multipart type may encapsulate multiple files being sent together in one
        transaction.

    **subtype*** identifies the exact kind of data of the specified type the MIME type represents
  
  
**multipart/form-data***
    This kind of data can be sent as a base64 string. The base64 string is not readable, and the separation of the form
    parts can not be done on it. If it's decoded to ansii, the boundry will be seenable, with other informations too,
    like the file name, type...
    You can find a parser to make an object of this data, or you can do it your own.
    The actual content of the fields are now coded in ansii, keep that in mind. Forexample to create a buffer from this,
    first the ansii text have to be encoded to base64, and only then give it to the Buffer as base64 text. Or tell the
    buffer that the text is ansii encoded.
    et voilà
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
    text: `
Topics to check: classes, prototype, events, scope
    `,
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
Classes in JS are only syntactic sugars, they are transpiled into prototypes when the code runs.
Declaring a class can be done with a class expression, using the **class*** keyword.

In contrast with Java which is an OOP language, JS only mimics OOP.
    **Missing*** features of OOP:
      - methods, properties doesn't have availability options like private, protected
        everything declared is publicly available

    **Differences*** in JS compared to Java:
      - declaration of properties, don't have to name them in the class's body, only in the constructor method

    **Similarities:***
      - inheritence is available is JS classes too using the **extends*** keyword
      - usage of **super()*** is the same as in Java
      - constructor function is available
      - static methods, properties are available

JS related class informations:
    - classes are not hoisted like functions
    - if the original class is changed in code later, all child instances will have the change too
      (even initialized before change)
  
  
constructor function:
    - one per class
    - if excluded, it's autogenerated by default
    - builds the initial object
    - super() ads methods, attributes of parent class
  
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


const order = new Order(123, [{}, {}], "A's order")
''''


                      Classes       Functions
Hoisted                 NO            YES
Can be overwritten      NO            YES
Can be extended         YES           NO


'use strict'
if class expression is used, strict mode is automatically enabled
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

  encodingDecoding: {
    title: "  encoding, decoding",
    related: [],
    text: `
'''
  const base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');

  const type = base64.split(';')[0].split('/')[1];
''''

'''
  let data = 'c3RhY2thYnVzZS5jb20=';
  let buff = new Buffer(data, 'base64');
  let text = buff.toString('ascii');
  
  console.log('"' + data + '" converted from Base64 to ASCII is "' + text + '"');
''''

'''
  let base64data = buff.toString('base64');
''''
  `,
  },

  buffer: {
    title: "  |Y|buffer||Y||",
    related: [],
    text: `
    https://nodejs.org/api/buffer.html
  `,
  },

  useStrict: {
    title: "  'use strict'\n",
    related: [],
    text: `
Javascript was backward compatible for a long time, but this meant that mistakes and not so great decisions about the language got stuck in forever.

Then in 2009 they decided to add new features to the language, that can break old code. To avoide this, the JS group added a kind of flag 'use strict'. With this, developers can explicitly ask to have the new language features, and therefore there will be no unintentional break of code.

This flag should be put at the top of the file, or top of a function block.
If enabled, this mode can not be reverted back.
Strict mode reises errors that were previously silent.
It might enhance performance.

Classes and modules enable 'use strict' by default.

New features:
    - class expression
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
  
  
  **Postman:*** 
      <> create different requests
      <> shows code how this request is made in programming languages
      <> send image data: https://stackoverflow.com/questions/39660074/post-image-data-using-postman
          <> can be done with choosing binary body, then upload the file, the header will contain the corresponding MIME
          <> also can be done with form-data body, for each key a file can be uploaded, MIME => multipart/form-data
  
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


A way to become an architect:
    <> take on more responsibilities
    <> look for problems in the application, and figure out solution
    <> it also means moving out of the developer role
As an architect:
    <> drive/help decision making
    <> dedicate time to learn
    <> read best practices
    <> know when to apply new technologies
    <> learn => experiment => educate team, coach. check if works out well
    <> also check other people ideas, check if all are consistent with app direction
    <> think about operational requirements
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

  liskovSubstitution: {
    title: "  **L***iskov Substitution Principle",
    related: [],
    text: `
**Subtypes must be substitutable for their base types.***
**The LSP focuses on “IS SUBSTITUTABLE FOR A” rather than “IS A.”***

This principle describes a valid relationship between a superclass and a subclass.
It's usefull to keep this principle in mind, to...
    ... not to break polymophism (subclass can not be used as it's base class)
    ... avoid if-then, switch statements for class checks, they are hard to maintain

The basic approach to make a subclass is to ask the question. Is this a that-thing? Yes, this **IS-A*** that-thing.
  Is ostrich a bird? Yes, ostrich is a bird.
But in programming we have expected behaviours of a base class, and these should not be broken by a subclass.
I expect a bird to fly, but ostrichs can't do that. Therefore, I can't cast them back to Bird and call the fly method meaningfully.
A fly method can differ for a pigeon and an eagle, but they both have the same meaning. For a ostrich simply not implementing this method can cause problems later on.

These expected behaviours can be called invariants. **Invariants*** are conditions or properties assumed to hold true at all times for all base class states. The LSP states that a proper subtype should not invalidate or change these statements of truth regardless of state.

Example:
  If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.
  If it looks like a duck and quacks like a duck, but it needs batteries, you probably have the wrong abstraction.

Example:
  In math it's reasonable to say that Square is a special Rectangle. But that doesn't mean that in OOP programming Square is can be a subclass of Rectangle.
  This is because from a Rectangle we expect to have to methods setWitdh, setHeight that work independent from each other. But the Square can not work like this. If the height is set, than the width is set as well, and vica versa.


**Fix violation***
  When you have two classes that share a lot of behavior but are not substitutable.
    => Create a third base class that both existing classes can derive from


The LSP reduces the long-term costs of software and allows your code to work more like hardware.

Ensure LSP:
  <> An IS-A relationship is about behavior.
  <> Child classes do not violate the invariants of their parent class.
  <> Child classes do not require verification of them being different from their base type.
  <> Inherited classes do not break reasonable assumptions of their base class’s user.
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

  tellDontAsk: {
    title: "  Tell, Don't Ask Principle",
    related: [],
    text: `
It recommends combining data and behavior to achieve better code quality. To avoid unnecessary requests, do not ask
objects questions about their state; instead, make a decision, and then tell objects what to do.

Procedural Code vs Object-Oriented Code
  Procedural code gets information, then makes decisions. Object-oriented code tells objects to do things.

If you retrieve data from an object **(data exposure)*** to do business logic based on it, it's violating this principle.


Anemic Domain Model
    It is an entity that is open to provide it's state to callers instead of performing the operation on itself.
      `,
  },

  objectsVSDataStructures: {
    title: "  Objects vs. Data Structures\n",
    related: [],
    text: `

**Objects*** are instances of a class. They have there data (state) encapsulated in properties, and they only expose methods
to change their state.
**Data structures*** are containers of structurized data for storage, retrieve, process, organize.
In comparison, the data is publicly exposed, and there is no behaviour related to the state.

**KEEP AWAY***
**Hybrid Structures***
Have functions => object like
Have public variables, accessors, mutators => temps other functions to use them as data structures
Cause problem overtime


As you work with objects and data structures, it’s vital to keep them separate and avoid hybrid structures.

**OOP***
Easy to create **new types of objects***, old code doesn't have to change.
Changing existing object is hard.
If you add a new function, a new behavior must manifest itself, and all of the existing classes must be changed.

Keep it high-level and, where possible, refer to abstractions—a simplified model of a much more complicated physical
entity or activity—or interfaces, but do not refer to specific implementation details.

getter/setter === accessor/mutator
  Violate the Tell Don't Ask Principle, and the Single Responsibility Principle (only one reason to change, cohesion)
  hurt polymorphism opportunities
  getters and setters make your class resemble a hybrid structure

Instead, expose the data in the most abstract form possible. Only the essential details should be displayed to the user.



**Procedural programming***
Easy to **add new behaviors*** to old structures.
But difficult to add new data structures.
Work best when represented data is not going to change.
Good usecase: 
    data transfer object o communicate with other systems/layers
    represents database table

  Limitations
  It’s best to use data structures and PP when the data it operates upon is not likely to change. But often,
  developers don’t respect this condition. Some developers build procedural code with a lot of “services” operating
  upon the data model, even though the data will likely change.



To avoid poor design, keep your classes highly cohesive and follow the object-oriented style of programming until you
know for sure that you want to protect the code against adding new functions more than adding new types.

Keep in mind that procedural code is rigid, doesn’t protect data well, and emphasizes operation over data, which can
cause problems. One of the most significant issues you are likely to encounter with procedural design happens when you
modify one part of your application, and the modification leads to a whole cascade of adjustments throughout the
entire application.

Another problem may occur when you encounter an error. If that happens, get ready to go through each line of code until
you identify the cause. In contrast, OOP involves up-frosnt planning that pays off in the long-term when you need to make
changes or additions to your code. In most cases, OOP is preferable to PP.

Changing or correcting a poor design often requires significant effort.
Take away:
    - Expose data in the most abstract form possible. Be careful with getters and setters.
    - objects make it easy to add new classes without changing existing functions;
    - data structures make it easy to add new functions without changing existing data structures.
    - Choose either OOP or PP design according to system needs and stick to your choice, but do not use hybrids.
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
    title: "  Simple enough design\n",
    related: [],
    text: `
KISS Keep It Simple, Stupid

YAGNI You aren't gonna need it
      `,
  },

  proceduralProgramming: {
    title: "**Procedural programming***\n",
    related: [],
    text: `
Procedures (a type of routine or subroutine) simply contain a series of computational steps to be carried out. Any
given procedure might be called at any point during a program's execution, including by other procedures or itself.

a programming paradigm, derived from structured programming, based upon the concept of the procedure call. Procedures,
also known as routines, subroutines, or functions, simply contain a series of computational steps to be carried out.

also known as inline programming takes a top-down approach. It is about writing a list of instructions to tell the
computer what to do step by step. It relies on procedures or routines.
      `,
  },

  functionalProgramming: {
    title: "**Functional programming***",
    related: [],
    text: `
**Programming paradigm***
    - a style of building the structure and elements of computer programs

Functional programming (FP) is about passing data from function to function to function to get a result.
treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data

In FP, functions are treated as data, meaning you can use them as parameters, return them, build functions from other
functions, and build custom functions. Functions in FP have to be pure functions, they should avoid shared state, and
side effects and data should be immutable.

A pure function is a function that given the same type of input will always return the same output, it is not dependent
on a local or global state.

A shared state is a state that is shared between more than one function or more than one data-structure. So with shared
state, in order to understand the effects of a function, you need to know all the details of every shared variable. It
adds a lot of complexity and permits less modularity.
      `,
  },
  programmingParadigm: {
    title: "  programming paradigm\n",
    related: [],
    text: `
- a style of building the structure and elements of computer programs

It is a style of programming, a way of thinking about software construction. A programming paradigm does not refer to a
specific language but rather to a way to program, a methodology. Some languages make it easy to write in some paradigms
but not others.
      `,
  },

  OOProgramming: {
    title: "**Object oriented programming***\n",
    related: [],
    text: `
**Programming paradigm***
programming paradigm based on the concept of “objects”, which may contain data, in the form of fields, often known as
attributes; and code, in the form of procedures, often known as methods.

is about encapsulating data and behavior into objects. An OOP application will use a collection of objects which knows
how to perform certain actions and how to interact with other elements of the application.

A method in OOP can be considered as a procedure in PP, but here it belongs to a specific object.

Another important aspect of OOP are classes. A class can be considered as a blueprint for an object.
      `,
  },

  aws: {
    title: "**AWS***",
    related: [],
    text: `
      `,
  },

  awsLambda: {
    title: "  **|Y|Lambda||Y||***",
    related: [],
    text: `
**Serverless***
    - pay for what you use
    - don't need to manage infrastructure
    - scale automatically up and down

Lambda usage steps:
    1, Upload the code
    2, Add trigger
    3, Run

Lambda Programming Model
    Triggers
      API Gateway: manage request trafic, call the right service
        good for:
          mobile/web backends
          real-time chat (save it to DynamoDB for example)
          crud backend
          easily connected with security services, Cognito
      S3: new file created, updated, deleted
      DynamoDB: create, update, delete record
      SQS: massage queue service
      Kinesis

    Handler function
'''
exports.handler = async (event, contex) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
''''
event: data sent during invocation
  const name = event.queryStringParameters && event.queryStringParameters.name

context: methods available to interact with the runtime information

    Code

Use cases:
  - data processing, real time analitics
  - replace backend
  - infrastructure setting changes, turn off instances if not needed
  - cron tasks

  example:
    HTTP request => API Gateway => AWS Lambda
    Record changes in table => DynamoDB => AWS Lambda
    New file is created => S3 => Lambda
    New message in queue => SQS => Lambda


Lambda execution can be sync, async and poll/stream based.

Not fits:
  - extreme real-time response
  - complex computing with high memory and requirements, lambda is generic
      example: video rendering
  - reliability services
      example: health care

Pricing depends on ...
  ... the number of requests
  ... the duration of each request
  ... the amount of memory Lambda needs for a request

Hello world Lambda
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html
https://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html
https://docs.aws.amazon.com/lambda/latest/dg/lambda-settingup.html

Lamdba Layers
resource: https://medium.com/@anjanava.biswas/nodejs-runtime-environment-with-aws-lambda-layers-f3914613e20e
https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html
https://stackoverflow.com/questions/34437900/how-to-load-npm-modules-in-aws-lambda


Libraries that worked for me:
  <> aws-multipart-parser
      `,
  },

  awsSAM: {
    title: "  **SAM***",
    related: [],
    text: `
**Serverless Application Model***

  Open source framework to build serverless applications.
  Infrastructure is defined in a YML file. Can be deployed to the cloud with SAM.
  
  CloudFormation: infrastructure for defining all the AWS resources
  
  SAM syntax ==(package time)==> CloudFormation syntax
  
  AWS SAM CLI
    check version:
      >> sam --version

    1. init sam:
      >> sam init --runtime nodejs14.x

    2. build project:
      >> sam build

    3. create package:
      >> sam package --template-file template.yml --output-template-file package.yml --s3-bucket meme-image

    4. deploy:
      >> sam deploy --region us-east-2 --capabilities CAPABILITY_IAM --template-file pck.yml --stack-name test-project

    5. check logs:
      >> sam logs --name testFunction --stack-name meme-project --region us-east-2

      check logs containusly:
      >> sam logs --name testFunction --stack-name meme-project --region us-east-2 --tail

  **Infrastructure as code***
    Involves using a high-level programming language to control the infrastructure of IT systems.
    Basically it means that scripts are written to define the whole infrastructure.

    This is fundamental for cloud development, micro-services, and for serverless.

    Advantages:
      <> no need for manual configuration (error proof)
      <> can be deployed in different environments
      <> increase development speed
      <> reusable in other projects
      <> store infrastructure beside the project's code

    Define:
      <> AWS Lambda
      <> API Gateway


    https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-use-app-spec.html
      `,
  },

  awsCloudFormation: {
    title: "  **CloudFormation***",
    related: [],
    text: `
Need for automation of solution delivery, and governance. Infrastructure as Code makes this possible.

CloudFormation makes it possible to create an AWS infrastructure based on "code" (Code as Infrastructure).
These JSON or YAML files are basically configurations for AWS resources. The advantage of a file like this is, that the CF can take it, and create, update, delete resources upon the description. Therefore the developer doesn't have to create or update anything manually which is more time consuming and error prone.
  <> if update fails, CF roles back to previous stable version

A configuration file can be written manually, by checking the syntax and options for the resources, but there is an online helper tool for this process, that can be done in the Cloud Formation Designer. This tool allow to edit CF templates in a drag and drop visual way.

CloudFormation can only perform actions that you have permission to do.

Typical resources:
    Network: Virtual Private Cloud, routing tables, gateways
    Infrastructure: instance, load balancers
    IAM: user accounts, permissions, groups, privileges
    Custom: non-AWS resources


**Template***: the actual file containig the infrastructure as code, a JSON or YAML file containing a description of resources to be provision.
**Stack***: all the resources that are created using a given CloudFormation template, instantiation of a CF template.
**Resources***: AWS resources that make up the stack.
**Events***: resource is created, updated, deleted, event is logged.

**Create***: operation of creating a new CF stack using a template, all resources specified by template are created
**Update***: the action of update an existing stack by making changes to a template, CF computes a change set, which is the action required to make the current stack match the requested stack
**Delete***: the action to delete CF stack, delete all resources. policies can be added to reources to not to be deleted even on delete event is trigered, like S3 storages.
**Rollback***: if update fails, CF attempts to rollback to previous state.

Stack states:
  **Created*** stack creation operation succesfully ompleted.
  **Updated*** stack update is succesfull
  **Deleted*** stack is successfully deleted
  **Corrupted*** stack rollback attempt failed, solution is to create again, or handle manually



**Template***

    **format version:***
      defines format in which the template is written, enable users to use older versions, and the cloud formation server to choose the correct interpreter. The latest template format version is 2010-09-09 and is currently the only valid value.

    **description:***
      provide instruction, information about the template

    **parameters:***
      list of parameters, that are used in the template. to use the template these have to be provided for creating a stack from it.

    **resources:***
      provision the resources
        "ResourceName" : {
          "Type": "AWS::S3::Bucket",
          "Properties": { ... },
          "DeletionPolicy: "Retain"
        }

    **outputs:***
      values to be easily accessible from a stack, CLI or API

'''
---
AWSTemplateFormatVersion: "version date"

Description:
  String, optional

Metadata:
  template metadata, optional

Parameters:
  set of parameters, optional

Rules:
  set of rules, optional

Mappings:
  set of mappings, optional

Conditions:
  set of conditions, optional

Transform:
  set of transforms, optional

Resources:
  set of resources, required

Outputs:
  set of outputs, optional
''''

Other options, topics:
  make conditional in template
  "DependsOn" tag, enforce order of creation of resources
  Signals
  Cross-Stack references

Tips:
  save template with source code
  write smaller, reusable templates
  avoid hardcoding values
  automate deployment

Update a stack can be donw from the terminal, and from the AWS Console too.
The later might be easier. Template parameters can be updated, new template can be added.
Update can be done as a direct update (rigth now), or in change sets (preview changes, execudes right away or later)

Interesting fact. For a Lambda resource, the code can be uploaded to an S3 bucket, and used from there. Or the code can be written as is in the YAML file, under RESOURCE > PROPERTIES > CODE > ZipFile
      `,
  },

  awsS3: {
    title: "  **S3***",
    related: [],
    text: `
Upload JSON from NodeJS to S3:
'''

  const AWS = require('aws-sdk');

  function uploadFile() {
    const s3 = new AWS.S3({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey
    });
    
    // Setting up S3 upload parameters
    const params = {
      Bucket: process.env.BucketName,
      Key: 'test.json',
      Body: JSON.stringify({hello: 2}),
      ContentType: 'application/json'
    };
  
    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
      if (err) {
        throw err;
      }
      console.log(\`File uploaded successfully. \${data.Location}\`);
    });
  }
''''

Upload file from NodeJS to S3:
'''

  /*
   * @param  {Buffer}  fileContent Data
   * @return {Location: string, Key: string} Image info, Locations as URL
   */
  async function uploadFile(fileContent) {
    const s3 = new AWS.S3({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey
    });
      
    const params = {
      Bucket: process.env.BucketName,
      Key: 'test.png',
      Body: fileContent,
      ContentType: 'image/png',
      ContentEncoding: 'base64',
    };
  
    try {
      const { Location, Key } = await s3.upload(params).promise();
      return { Location, Key };
    } catch (err) {
      console.log(err)
    }
  }
''''

The location should be returned, to save it in a database.


check later:
  https://stackoverflow.com/questions/23561473/how-to-upload-base64-data-as-image-to-s3-using-node-js/46320615
  https://blobfolio.com/2019/better-binary-batter-mixing-base64-and-uint8array/
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array


  https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/
      `,
  },

  AWSDynamoDB: {
    title: "  DynamoDB",
    related: [],
    text: `
Data integrity, Migration, Constraints, Stored procedures, Triggers

**SQL***
  Why are they created? What probllem are they wanted to solve?
  1970 first relational database: relational meaning that the internal structure of the data was different than what the user would see at the end.

  **Advantages:***
      <> enforced integrity
      <> recudes storage cost
      <> ability to structure data on the fly
  
  Storing data VS Processing
      Own the hardware => effectively store large volume of data, the cost of accessing is fixed
      Running out of harddrive space, add another drive should be avoided

  most of the fields would be stored only one time to efficiently reduce the cost of storing thousands if not millions of things.

  To get the data, you have to use a query to join records together by a foreign key to get the right structure of data.

  These days, the cost of storage is relatively inexpensive, now the focus is on processing data.

  SQL joins are just too slow or the needs sometimes (microsecond cost).

**NoSQL***

  **Advantages:***
    <> Data is stored as relationships are present in the data, not an ID that maps to another table.
    <> Typically faster than SQL, because there is no join to get the data.
    <> Don't have a schema, therefore don't require database migration or altered table scripts if the model is changed.
    <> Structure of the data can be different from row to row.
    <> fast, flexible


**When SQL is a better choise?***
  <> reduce anomalies in data, inteded to strore one type of entity
  <> allows you to run compulations or calculations on the server (its faster than retrive data and calculate it on own harddrive)



**DynamoDB***
  <> works best as a key-value storage
  <> stores data in rows of dynamic columns
  <> a row can be up to 400 kbyte
  <> limited scalar types: numbers, strings, boolean
        - objects for example can be stored stringified
  <> priced based on throughput, reading-writing units
  <> offers 25Gbs storage upfront
  <> quick autoscaling
  <> maximum ntegration with AWS
  <> stores items in a table, items are represented as columns, column values are called attributes

  Every item in DynamoDB requires at least one attribute, the partition key. When item and partitionkey is provided, DynamoDB hashes the key, and use this value as the memory address of this data.
  DynamoDB is basically a keystore that's highly efficient at putting and retrieving data by a given key.

  Data modelling
      1. Select a partition key
          Bad partition key: date, because many resources can access that same address at once.
          This is called a hot key, and you want to avoid it.
          Also orderids, shipping numbers are bad.
          Using a counter is bad also. These keys will be cold really fast.

          Key should be based on something regularly accessed and spread across all nodes.
          Example: Baseball game. TeamID's are regularly used, no need for date usage or score usage.

      2. Composite key
          Allow to save different kind of data, but still evenly spread the requests cross multiple partitions.
          Example:
            PLAYERS_<TEAM_ID>
            TEAMINFO_<TEAM_ID>
            GAMES_<TEAM_ID>
            ATBATS_<TEAM_ID>

          If too specific this key can become cold.
            GAMES_<TEAM_ID>_<Year>

      3. Sort key (Range attributes)
          Along with partition key, uniquely identify a row of data
          Items phisically near to one another or increased speed
          Can be queried effectively as ranges
          Can be used to query data hierarchially

          Example:
            PartitionKey = "GAMES_LAA" AND SortKey BETWEEN "2019-05-01" and "2019-05-30"

          Enables to pull ranges of data by a partition key

    Retrieve speed:
      Partition key = BEST
      Partition key + Sort key = GOOD
      Partition key + Sort key + Filter = SLOW

  Secondary index:
      Basically the original data structure is kept, but you have an other version of referencing to these data.

  **Pricing***
      Read consistency
        <> data is replicated to three availability zones, that takes milliseconds. This time required may result stale data.
        <> Eventual consistency: give me value from the most available node
        <> Strongly consistent: only read the first node

        <> 4KB read at eventual consistency = 1/2 read unit
        <> 4KB read at strongly consistent = 1 read unit

        <> 1KB of data written = 1 write unit
        <> 1KB of data written in transaction = 2 write units

        
      Allows transactions, and therefore rollback if an operation fails, this can double the cost for each operation.

      Provisioned pay:
        <> capacity is capped
        <> billed by read capacity units RCUs and write capacity units WCUs
        <> Advantage: predictable billing and throughput
        <> Disadvantage: users can get a 400 if you are over the capacity

      On demand pay:
        <> auto adjust to needed throughput
        <> Advantage: no 400 error
        <> Advantage: unlimited capacity
        <> Disadvantage: potential runaway costs
        <> billed for RCUs and WRUs


Topics: Local dynamoDB for development, transactions, query data, streams
      `,
  },

  AWSRekognition: {
    title: "  Rekognition\n",
    related: [],
    text: `
Can detect:
  <> objects and scenes
  <> facial information
  <> text in images

Can be used for:
  <> image moderation
  <> compare faces


Request:
'''
  {
    "Image": {
        "S3Object": {
            "Bucket": "console-sample-images-cmh",
            "Name": "skateboard.jpg"
        }
    }
  }
''''

Response:
'''
  { 
    "Labels": [
        {
            "Name": "Vehicle",
            "Confidence": 99.15271759033203,
            "Instances": [],
            "Parents": [
                { "Name": "Transportation" }
            ]
        },
        {
            "Name": "Transportation",
            "Confidence": 99.15271759033203,
            "Instances": [],
            "Parents": []
        },
        {
            "Name": "Automobile",
            "Confidence": 99.15271759033203,
            "Instances": [],
            "Parents": [
                { "Name": "Vehicle" },
                { "Name": "Transportation" }
            ]
        },
        ...
    ],
    "LabelModelVersion": "2.0"
  }
''''
  `,
  },

  communication: {
    title: "Communication",
    related: [],
    text: `
Communication is based on **people***, a **message***, the **context*** and to **listen*** to the other partner.

Regarding the **people*** part, you can ask the question who will be there, who are you going to talk to, and what do you know about them.
To formalize your message easily, you can think about what do you want the other to **think***, to **feel*** and to **do***.
Also, you should keep in mind, that everyone has mental filters, that modifies the perception of your message.

If we think about the **message***, you can check what channel should you use to send it. Should you write an email or is it better to have pop in for a quick chat?
When you've said what you wanted to, check that your message is understanded by the other. Ask some questions about the key thoughts.

The **context*** of the email can be important too. You can think about how is the timing of this email. Should you call the other this time of the day? Contect also means the location, the relatioships and the tune of the message.

When you **listen*** to the other, listen what they are saying, but also look for the gestures they are using. After knowing what they say and how they say it, think about the meaning of their message. Be empathetic.


**Communication for common situations***

  **Before people decide what they think about your message, they decide what they think of you.***

  <> Smile authentically. A genuine smile involves a considerable amount of facial muscles compared to a polite grimace.
  <> Stand or sit tall. Strong posture and a steady gaze tell everyone around you that you are competent.
  <> Mine for connections.
    - don't know the person => talk about external environment: weather, current event, common context like same place to be in.
    - know the person => make it more personal, keep comments positive. don't make small talk on negative things, recent management decision, other colleague. Don't stay at surface level, ask open-ended questions, get the person to talk about himself.

**Meetings***
  <> If you organize a meeting, you better send out the agenda.
  <> The meeting shouldn't be longer than 60-90 minutes
  <> Encourage discussion, write down questions that you are going to ask.
    - Allow time to people to think
  <> Loop in virtual participants
  <> Check nonverbal communication

**Emails***
  Short, to the point, only when neccessary
  Think of your readers action, state that action in your first or second sentence. Check thetone.
  Proof read: adjust mindset, that you want to find errors.
  If you don't require any action, think why is this email is sent.

  Give only the neccessary level of details, after the required action is clarified.

  Check last 5 emails, check:
    <> action is requested in first or second sentence
    <> action was clear and easy to take
    <> only most relevant details are given
    <> tone creates impact that you intend
    <> message is tailored to knowledge of reader
    <> email was the bes channel choice
    <> the timing of message was good for the reader
    <> message is error free

**Explain***
  Determine process OR product. Does it matter in the latter who it is achieved?
  Place actions in buckets: set up tasks, process tasks, test tasks to do
  Flex to the learner's need
      A big picture learner, or a step-by-step approacher?
  What > **Why*** > How
  Let the learner show and tell
  Learners must practice in a safe space you create.

  Tell the learner why the task matters!

**Advice to older colleague***
  Be respectful, make your thoughts come out as opinions, and do not decide on things, let them decide. It takes time to be credible, can mention previous experiences to help with this.

**When you're caught off guard***
  1. Buy time
    acknowledge the situation: this is catching me offguard
    ask for time until the end of the day
    ask questions
  2. Calm yourself
  3. Use response formula
    What I know + What I don't know + How I'll find out

**When you're criticized***
  1. Check listening bias: Are my mental filters or assumptions creating defensiveness?
  2. Give yourself time to ponder criticism. Reather than derend or accept as truth simply say 'thank you for the feedback'.
  3. Ignore first two thoughts. First is likely to be defensive, second is likely to be accusatory. Lead with your third thought.
  4. Use "Yes, and... other aspect to consider"

**When you are presenting up***
  Get to the point. Share your suggestion or key idea within the first 60-90 seconds of your presentation.
  Situation
  Complication: what created problem or opportunity
  Question (key question to be addressed)
  Answer: what is the answer to the question (your recommendation)

  Go for the big picture! Expected to be grilled, redirect back.
  Prepare 200% for the questions. Even create a side for them.
  
`,
  },

  cloudComputing: {
    title: "**Cloud computing***\n",
    related: [],
    text: `
Public clouds are shared, owned by multicompanies like Amazon, Google, Microsoft. Can be used by anybody.
Private clouds are owned by a single entity.
Community cloud: share it with known users. Can be used for example by farmers.
Hybrid cloud: the mix of private and public cloud

IaaS: database, servers, networks. AWS stuff

PaaS: development as a service basically, have tools to build application in the cloud and deploy it on the platform. Abstract away from the underlaying complexity. Example: Google App Engine

SaaS: software delivered over the internet, example: Gmail

5 characteristics
    <> On-demand self-selvice
    <> Ubiquitous network access (available everywhere)
    <> Resource pooling
    <> Rapid elasticity (scale up to huge loads)
    <> Pay per use
    
    
Basic concept about public clouds:
    Because they share resources between many companies, their resources are used approximately as much as they can be used. So they don't have separate servers for example that are only used for one company with a 30% usage rate. Therefore it's beneficial for them, and they can give their service in a lower cost to you. Lower power cost. Nontheless this is something to be called green.


Compared to owning the infrastructure, in the first year of a software development, the inital cost is lower, and basically it will not fluctuate during the years.

A good question to ask before deciding on CC, is to know what the company expects from it.

Qualitative benefits
    <> agility
    <> developer, operational efficiency
    <> talent recruitment (state of the art job is appealing)
    <> adaptibility
    <> consistency (single platform)

Quantitative benefits
    <> 
    



-----------------
Introduction to cloud computing
  **What is the cloud?***
    => Cloud is actually just a new hip way to refer to the internet.

    In the most fundamental sense, the internet is a worldwide network of billions and billions of devices. These devices can be computers, servers, cell phones, tablets, or Amazon Alexas.
    These are connected phisically with cabels, that can be TV cables, fiber optic cables, or copper telephone wires.
    When you make a request, your internet service provider then sends your request to a server which searches for the domain name you requested. If it finds a match it will route your request to the IP address of the server hosting the website. Once your request hits the server of the website you wanted to load, the server responds by sending the web page in little packets back to your computer. The packets are very small and acts like jigsaw pieces that your computer reassembles to load the whole entire web page

  The technical definition of cloud computing is the on-demand delivery of compute, database storage, application, and other IT resources. This means through cloud computing services, you have instantaneous access to computational, storage, and software using the internet. Computing resources available when you want it, where you want it.

  Benefits:
    Pay as you go, more affordable than legacy infrastructure
    Accessibility


History
    Origin of cloud computing
    1950s Mainframe computing: have a central computer accessed by numerous user devices.
      Mainframe computer, dumb terminals.
    
    1970s Virtual machines: multiple complete operating systems that quote unquote live in a single piece of hardware

    Hypervisor: use lots of mainframe computers' resources as if it's just one computer
      => modern concept of cloud computing

Examples of daily life:
    Emails, video streaming, Google Drive-Calendar...
    Cheap, inexpensive

-----------
**Cloud Computing Concepts***

    !!!Exam related
    <> Trade capital expense for variable expense (Dont have to buy hardware)
    <> Benefit from massive economies of scale (like Amazon)
    <> Stop guessing capacity (scale up and down as needed)
    <> Overal increase speed and agility
    <> Stop spending money running and maintaning data centers
    <> Go global in minutes

    <> No hardware replacement (service providers issue)
    <> Accessible anywhere


  -----
  **IaaS***
    you have control over the networking, security, computer, and servers
    requires the highest level of technical knowledge to execute
    examples: Amazon Web Services, Microsoft Azure, and Google Cloud

  **PaaS***
    allows you to deploy and manage applications without worrying about the underlying hardware infrastructure. Services offered could be web servers, databases, operating systems, or environments where you can execute specific programming languages to host applications. Some examples of PaaS are Microsoft Azure web hosting, Google App Engine, and Heroku.

    PaaS is different from IaaS in that there is less flexibility as packages are preconstructed. But, you also have to deal with less of the infrastructure deployment and maintenance allowing you more time and resources to focus on the project at hand as opposed to the infrastructure. 

  **SaaS***
    describes completed products managed by the service provider. You get the whole package of the service complete with user interfaces.
    generally does not require much technical knowledge and it's extremely intuitive and features are ready to use quote unquote out of the box
    Example: Outlook, Gmail

  -----
  **Cloud deployment models***
      Cloud deployment: 100% cloud based, depends on internet and cloud providers.

      On-premise/Private deployment: traditional deployment, not much benefit of CC. Onsite, internet not required. Can be really fast. If security is important, this might be a must.

      Hybrid deployment: Mix of previous two. One option is to have on-premise apps, and have a backup at the cloud.

  -----
  **Design principles*** CROPS
      Aims: secure, durable, high-performing

    Aim: **cost optimization***
      Use only what you need
      Continue to monitor for optimization

    Aim: **reliability*** (recover from service discruptions, often byself)
      Test disaster recovery
      Have duplicate copies of resources
      
    Aim: **operational excellence*** (ability to run and monitor systems while constantly improving processes and procedures)
      document everything
      operational processes constantly refine

    Aim: **performance efficient*** (ability to use computing resources to adjust to system requirements)
    
    Aim: **security***
      best practices should be automated
      data should always be protected
      enable traceability






**Introduction to AWS***
  History of AWS

    market cap is huge
    founded by Jeff Bezos in 1994 as a humble online bookstore
    AWS was launched internally in 2002
      - create online shopping websites
      - real competitors didn't come at first, big advantage
    Google Cloud, Microsoft Azure come later and have a market share today

  What is AWS
    Amazon Web Services
    many types and number of services
    AWS provides what used to be purchased as hardware, such as network switches and servers, as resources to be accessed using the internet. Because of cloud computing's pay as you go model and robust resources, organizations are able to save time, money, and human resources by moving their resources to AWS
    As of winter 2020, there are 24 groups of services offered by the platform ranging from compute to storage to game development.
    As a cloud computing service provider, AWS boasts flexibility, scalability, and reliability alongside affordability that was impossible with traditional on premises IT infrastructure. With AWS, engineers can concentrate on building your products and features instead of worrying about the it infrastructure's ability to handle their scaling

  Users: Airbnb, Netflix




Diving into AWS
  Popular services
    EC, Lambda, S3 in use-archival files, DynamoDB, RedShift, 

  Required for an account: valid phone number, credit card, email

    

    `,
  },

  AWSCertifiedCloudPractitionerExam: {
    title: "**AWS Certified Cloud Practitioner Exam***",
    related: [],
    text: `
Domain of Exam
  Domain 1: Cloud Concepts 26%
  Domain 2: Security and Compliance 25%
  Domain 3: Technology 33%
  Domain 4: Billing and Pricing 16%
TOTAL 100%
`,
  },

  cloudConcepts: {
    title: "  Cloud Concepts",
    related: [],
    text: `
**Domain 1: Cloud Concepts***

1.1 Define the AWS Cloud and its value proposition
  Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. 

  Define the benefits of the AWS cloud including:
    <> Security
      - AWS is architected to be the most flexible and secure cloud computing environment available today.
      - core infrastructure is built to satisfy the security requirements for the military, global banks, and other high-sensitivity organizations
      - backed by a deep set of cloud security tools, with 230 security, compliance, and governance services and features. AWS supports 90 security standards and compliance certifications, and all 117 AWS services that store customer data offer the ability to encrypt that data.
    <> Reliability
    <> High Availability
    <> Elasticity
      don’t have to over-provision resources up front, instead provision the amount of resources that you actually need can scale these resources up or down to instantly grow and shrink capacity as your business needs change
    <> Agility
      - access to a broad range of technologies
      - quickly spin up resources as you need them
      - deploy technology services in a matter of minutes (<=> data centers, it may take weeks to obtain new resources)
    <> Pay-as-you go pricing or Scalability
        For each resource, you have to pay only for the usage. For example, if a Lambda Function is used for 3 hours a day, you only pay for these hours and not the whole day.
        You don't have to analyse the amount and specifications of resources beforehand of an application deployment, because on the way when there is a larger usage, resources can be updated as needed, even scaled back when no longer needed.

    <> Global Reach
      The global footprint of the AWS Cloud enables you to deploy applications to customers around the world quickly, while providing them with low latency. This means that even if you are located in a different part of the world than your customers, customers are able to access your applications with minimal delays. 
    <> Economy of scale
      By using cloud computing, you can achieve a lower variable cost than you can get on your own.
      Because usage from hundreds of thousands of customers can aggregate in the cloud, providers, such as AWS, can achieve higher economies of scale. The economy of scale translates into lower pay-as-you-go prices.

      Explain how the AWS cloud allows users to focus on business value
    <> Shifting technical resources to revenue-generating activities as opposed to managing
    infrastructure

    AWS services: compute, storage, network security, blockchain, machine learning, AI, robot development, video production
    On-demand: have the neccessary resources available when you need it

    Why are there so many services? - Undifferentiated heavy lifting of IT
    Cost saving
      The cloud allows you to trade capital expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it. Plus, the variable expenses are much lower than what you would pay to do it yourself because of the economies of scale.
    No other cloud provider offers as many Regions with multiple Availability Zones connected by low latency, high throughput, and highly redundant networking. AWS has 80 Availability Zones within 25 geographic regions around the world, and has announced plans for 18 more Availability Zones and 6 more AWS Regions in Australia, India, Indonesia, Spain, Switzerland, and United Arab Emirates (UAE).

1.2 Identify aspects of AWS Cloud economics
  Define items that would be part of a Total Cost of Ownership proposal
o Understand the role of operational expenses (OpEx)
o Understand the role of capital expenses (CapEx)
o Understand labor costs associated with on-premises operations
o Understand the impact of software licensing costs when moving to the cloud
                Identify
o Right-sized infrastructure
which operations will reduce costs by moving to the cloud
o Benefits of automation
o Reduce compliance scope (for example, reporting)
o Managed services (for example, RDS, ECS, EKS, DynamoDB)

1.3 Explain the different cloud architecture design principles   Explain the design principles
  <> Design for failure
  <> Decouple components versus monolithic architecture o Implement elasticity in the cloud versus on-premises o Think parallel
      
      `,
  },

  securityCompliance: {
    title: "  Security and Compliance",
    related: [],
    text: `
**Domain 2: Security and Compliance***

2.1 Define the AWS shared responsibility model
  Recognize the elements of the Shared Responsibility Model
  Describe the customer’s responsibly on AWS
o Describe how the customer’s responsibilities may shift depending on the service used (for example with RDS, Lambda, or EC2)
  Describe AWS responsibilities

2.2 Define AWS Cloud security and compliance concepts
  Identify where to find AWS compliance information
o Locations of lists of recognized available compliance controls (for example, HIPPA, SOCs)
o Recognize that compliance requirements vary among AWS services   At a high level, describe how customers achieve compliance on AWS
o Identify different encryption options on AWS (for example, In transit, At rest)
  Describe who enables encryption on AWS for a given service
  Recognize there are services that will aid in auditing and reporting
o Recognize that logs exist for auditing and monitoring (do not have to understand the logs)
o Define Amazon CloudWatch, AWS Config, and AWS CloudTrail   Explain the concept of least privileged access

2.3 Identify AWS access management capabilities
  Understand the purpose of User and Identity Management
o Access keys and password policies (rotation, complexity) o Multi-Factor Authentication (MFA)
o AWS Identity and Access Management (IAM)
• Groups/users
• Roles
• Policies, managed policies compared to custom policies
o Tasks that require use of root accounts Protection of root accounts

2.4 Identify resources for security support
  Recognize there are different network security capabilities
o Native AWS services (for example, security groups, Network ACLs, AWS WAF)
o 3rd party security products from the AWS Marketplace
  Recognize there is documentation and where to find it (for example, best practices,
whitepapers, official documents)

o AWS Knowledge Center, Security Center, security forum, and security blogs o Partner Systems Integrators
  Know that security checks are a component of AWS Trusted Advisor
      
      `,
  },

  technology123: {
    title: "  Technology",
    related: [],
    text: `
Domain 3: Technology
3.1 Define methods of deploying and operating in the AWS Cloud
  Identify at a high level different ways of provisioning and operating in the AWS cloud
o Programmatic access, APIs, SDKs, AWS Management Console, CLI, Infrastructure as Code
  Identify different types of cloud deployment models o All in with cloud/cloud native
o Hybrid
o On-premises
  Identify connectivity options o VPN
o AWS Direct Connect o Public internet
3.2 Define the AWS global infrastructure
  Describe the relationships among Regions, Availability Zones, and Edge Locations
  Describe how to achieve high availability through the use of multiple Availability Zones
o Recall that high availability is achieved by using multiple Availability Zones
o Recognize that Availability Zones do not share single points of failure   Describe when to consider the use of multiple AWS Regions
o Disaster recovery/business continuity o Low latency for end-users
o Data sovereignty
  Describe at a high level the benefits of Edge Locations o Amazon CloudFront
o AWS Global Accelerator 3.3 Identify the core AWS services

  

o
•
Describe the categories of services on AWS (compute, storage, network, database) Identify AWS compute services
o Recognize there are different compute families
o Recognize the different services that provide compute (for example, AWS Lambda
compared to Amazon Elastic Container Service (Amazon ECS), or Amazon EC2, etc.) o Recognize that elasticity is achieved through Auto Scaling
o Identify the purpose of load balancers
Identify different AWS storage services
o Describe Amazon S3
o Describe Amazon Elastic Block Store (Amazon EBS) o Describe Amazon S3 Glacier
o Describe AWS Snowball
o Describe Amazon Elastic File System (Amazon EFS) o Describe AWS Storage Gateway
Identify AWS networking services o Identify VPC
o Identify security groups
o Identify the purpose of Amazon Route 53 o Identify VPN, AWS Direct Connect
Identify different AWS database services
o Install databases on Amazon EC2 compared to AWS managed databases

  o Identify Amazon RDS
o Identify Amazon DynamoDB o Identify Amazon Redshift
3.4 Identify resources for technology support
  Recognize there is documentation (best practices, whitepapers, AWS Knowledge Center,
forums, blogs)
  Identify
o AWS Abuse
the various levels and scope of AWS support
o AWS support cases
o Premium support
o Technical Account Managers
  Recognize there is a partner network (marketplace, third-party) including Independent Software Vendors and System Integrators
  Identify sources of AWS technical assistance and knowledge including professional services, solution architects, training and certification, and the Amazon Partner Network
        `,
  },

  billingPricing: {
    title: "  Billing and Pricing",
    related: [],
    text: `
Identify the benefits of using AWS Trusted Advisor Domain 4: Billing and Pricing
4.1 Compare and contrast the various pricing models for AWS (for example, On-Demand Instances, Reserved Instances, and Spot Instance pricing)
  Identify scenarios/best fit for On-Demand Instance pricing
  Identify scenarios/best fit for Reserved-Instance pricing
o Describe Reserved-Instances flexibility
o Describe Reserved-Instances behavior in AWS Organizations
  Identify scenarios/best fit for Spot Instance pricing
4.2 Recognize the various account structures in relation to AWS billing and pricing
  Recognize that consolidated billing is a feature of AWS Organizations
  Identify how multiple accounts aid in allocating costs across departments
4.3 Identify resources available for billing support
  Identify ways to get billing support and information
o Cost Explorer, AWS Cost and Usage Report, Amazon QuickSight, third-party partners, and AWS Marketplace tools
o Open a billing support case
o The role of the Concierge for AWS Enterprise Support Plan customers
  Identify where to find pricing information on AWS services
o AWS Simple Monthly Calculator o AWS Services product pages
o AWS Pricing API
  Recognize that alarms/alerts exist
  Identify how tags are used in cost allocation
      
      
      `,
  },

  appendix: {
    title: "  Appendix",
    related: [],
    text: `
Appendix
Which key tools, technologies, and concepts might be covered on the exam?
The following is a non-exhaustive list of the tools and technologies that could appear on the exam. This list is subject to change and is provided to help you understand the general scope of services, features, or technologies on the exam. The general tools and technologies in this list appear in no particular order. AWS services are grouped according to their primary functions. While some of these technologies will likely be covered more than others on the exam, the order and placement of them in this list are no indication of relative weight or importance:
  APIs
  Cost Explorer
  AWS Cost and Usage Report
  AWS Command Line Interface (CLI)
  Elastic Load Balancers
  Amazon EC2 instance types (for example, Reserved, On-Demand, Spot)
  AWS global infrastructure (for example, AWS Regions, Availability Zones)
  Infrastructure as Code (IaC)
  Amazon Machine Images (AMIs)
  AWS Management Console
  AWS Marketplace
  AWS Professional Services
  AWS Personal Health Dashboard
  Security groups
  AWS Service Catalog
  AWS Service Health Dashboard
  Service quotas
  AWS software development kits (SDKs)
  AWS Support Center
  AWS Support tiers
  Virtual private networks (VPNs)
AWS services and features
Analytics:
  Amazon Athena
  Amazon Kinesis
  Amazon QuickSight
Application Integration:
  Amazon Simple Notification Service (Amazon SNS)
  Amazon Simple Queue Service (Amazon SQS)
**Compute and Serverless:***
  AWS Batch
  **Amazon EC2 / Elastic Compute Cloud***
  AWS Elastic Beanstalk
  AWS Lambda
  Amazon Lightsail
  Amazon WorkSpaces
Containers:
  Amazon Elastic Container Service (Amazon ECS)
  Amazon Elastic Kubernetes Service (Amazon EKS)
  AWS Fargate
Database:
  Amazon Aurora
  Amazon DynamoDB
  Amazon ElastiCache
  Amazon RDS
  Amazon Redshift
Developer Tools:
  AWS CodeBuild
  AWS CodeCommit
  AWS CodeDeploy
  AWS CodePipeline
  AWS CodeStar
Customer Engagement:
  Amazon Connect
Management, Monitoring, and Governance:
  AWS Auto Scaling
  AWS Budgets
  AWS CloudFormation
  AWS CloudTrail
  Amazon CloudWatch
  AWS Config
  AWS Cost and Usage Report
  Amazon EventBridge (Amazon CloudWatch Events)
  AWS License Manager
  AWS Managed Services
  AWS Organizations
  AWS Secrets Manager
  AWS Systems Manager
  AWS Systems Manager Parameter Store
  AWS Trusted Advisor
Networking and Content Delivery:
  Amazon API Gateway
  Amazon CloudFront
  AWS Direct Connect
  Amazon Route 53
  Amazon VPC

  Security, Identity, and Compliance:
  AWS Artifact
  AWS Certificate Manager (ACM)
  AWS CloudHSM
  Amazon Cognito
  Amazon Detective
  Amazon GuardDuty
  AWS Identity and Access Management (IAM)
  Amazon Inspector
  AWS License Manager
  Amazon Macie
  AWS Shield
  AWS WAF
Storage:
  AWS Backup
  Amazon Elastic Block Store (Amazon EBS)
  Amazon Elastic File System (Amazon EFS)
  Amazon S3
  Amazon S3 Glacier
  AWS Snowball Edge
  AWS Storage Gateway
`,
  },

  computeAndServerless: {
    title: "    Compute and serverless > EC2\n",
    related: [],
    text: `
**Amazon EC2 / Elastic Compute Cloud***
Provides secure, resizable compute capacity in the cloud as Amazon EC2 instances.
Keywors: Compute as a Service

The advantage of using an EC2 instance, is that you don't have to buy a server upfront for a project (estimate the hardware), wait for it to ship, then rent a place in a datacenter, and configure it. Also stick with it for a long time.
You can get an EC2 instance within minutes, and you only have to configure it. You can choose memory, CPU options for the beginning of the project, then later on change these (vertical scale) to biger ones. When you are finished with it, you can stop the instance and not pay for it anymore.

Security, the network options can be configured.
You probably don't get a full machine, instead a virtual one on top of it, and share the resource. (multitenancy)

Instance types are grouped under instance families. Varies in CPU, memory, storage, networking capacity.
General purpose:
  <> good balance of compute, memory, and networking resources
  <> used for web service, application servers, gaming servers, backend servers for enterprise applications, small and medium databases

Compute optimized:
  <> high-performance processors
  <> used for gaming servers, high performance computing, scientific modeling

Memory optimized:
  <> Accelerated computing are good for floating point number calculations, graphics processing, or data pattern matching, as they use hardware accelerators. 
  <> Memory optimized instances are designed to deliver fast performance for workloads that process large datasets in memory. In computing, memory is a temporary storage area. It holds all the data and instructions that a central processing unit (CPU) needs to be able to complete actions. Before a computer program or application is able to run, it is loaded from storage into memory. This preloading process gives the CPU direct access to the computer program.
  Suppose that you have a workload that requires large amounts of data to be preloaded before running an application. This scenario might be a high-performance database or a workload that involves performing real-time processing of a large amount of unstructured data. In these types of use cases, consider using a memory optimized instance. Memory optimized instances enable you to run workloads with high memory needs and receive great performance.

Accelerated computing:
  <> Accelerated computing instances use hardware accelerators, or coprocessors, to perform some functions more efficiently than is possible in software running on CPUs. Examples of these functions include floating-point number calculations, graphics processing, and data pattern matching.
  In computing, a hardware accelerator is a component that can expedite data processing. Accelerated computing instances are ideal for workloads such as graphics applications, game streaming, and application streaming.

Storage optimized
  <> Storage optimized instances are designed for workloads that require high, sequential read and write access to large datasets on local storage. Examples of workloads suitable for storage optimized instances include distributed file systems, data warehousing applications, and high-frequency online transaction processing (OLTP) systems.

  <> In computing, the term input/output operations per second (IOPS) is a metric that measures the performance of a storage device. It indicates how many different input or output operations a device can perform in one second. Storage optimized instances are designed to deliver tens of thousands of low-latency, random IOPS to applications. 
  You can think of input operations as data put into a system, such as records entered into a database. An output operation is data generated by a server. An example of output might be the analytics performed on the records in a database. If you have an application that has a high IOPS requirement, a storage optimized instance can provide better performance over other instance types not optimized for this kind of use case.

Billing options:
On-Demand
  Instances are ideal for short-term, irregular workloads that cannot be interrupted. No upfront costs or minimum contracts apply. The instances run continuously until you stop them, and you pay for only the compute time you use.
  Usecase: developing and testing applications and running applications that have unpredictable usage patterns
  On-Demand Instances are not recommended for workloads that last a year or longer because these workloads can experience greater cost savings using Reserved Instances.

Saving Plan
  enable you to reduce your compute costs by committing to a consistent amount of compute usage for a 1-year or 3-year term. This term commitment results in savings of up to 72% over On-Demand costs. Any usage beyond the commitment is charged at regular On-Demand rates.
      `,
  },

  empty: {
    title: "AWS Cloud Practitioner Essentials",
    related: [],
    text: `
What is cloud computing?
    - On-demand delivery of IT resources and applications through the internet with pay-as-you-go pricing
      `,
  },

  cloudFinancials: {
    title: "Cloud Financials",
    related: [],
    text: `
Check:
    1. AWS invoice
    2. AWS Billing console
    3. AWS Cost Explorer, recommended
    4. AWS Cost and Usage Report

If cost increase by 10%, what is the cause?
  It sounds bad, but if its generated because of more searches and users, it's an investment. Isn't it?
  KPI: Key Performance Indicator
    Cost based KPIs: Daily AWS run time, Total EC2 hours...
    Value based KPIs: AWS cost per search, AWS cost per guest, per backend job

"We don't want to make money from costumers that aren't getting value from us.. How many of your partners call you up and say 'stop spending money with us'?"

Save money with:
    1. Cost aware design, Architecture
    2. Maximize elastcity
    3. AWS pricing models
    4. Resource Lifecycle management

What looks good as you scale: Unit cost e.g. cost per user is lowering. Usage is increasing.

Best way to start optimization is to look at the bill.
      `,
  },

  AWSControllingCost: {
    title: "AWS: Controlling Cost",
    related: [],
    text: `
**Why is this important?***
  A key reason to move to the cloud is to save money (it's not automatically less expensive)

**Who is responsible to make it unexpensive?***
  Everyone, and KPI should be set up. Cross-functional team is key to successfully control AWS costs.

**Where to start the AWS journey?***
  AWS Free tier: Designed to explore 85 products. Some resources are always free, some are free for 12 months, and some are free until a certain usage.

  Keywors: My billing dashboard, AWS Cost explorer

  **Set up a budget!*** Create budget
    Advantage: there will be an alert, when you go higher then you wanted to.
    Cost/Usage/Reservation/Savings Plans

**Organizations***
  An enterprise might have more than one Amazon account. There can be discounts for this.
  It's a oneway step to create an organization. You can not go back to a simple account. You can invite account or create new subaccounts.

**Object tagging***
  1. Why to use it?
    See which instances, how much cost generate. Manage and enforce cost control.
    'Cost Allocation Tags'

  2. Feature description
    Enables addition of metadata (case-sensitive key-value pairs) to AWS object instances

  3. What to do for it?
    Create new tags or use AWS ones.
    Map tags to instances, tags can be added manually, by template (CF), by policy.

  4. How to keep it up?
    Management tools > AWS Config
    A rule can be created to for example check if all instances have a kind of tag. This can be useful to find these instances and correct them.
    Config Dashboard is a good start here.

  5. Reason validation
    Valid reason for tags: In the console if you choose a region, you only see instances prices, etc in that region. And you can be charged up with instances that you forgot in other regions. Tags are a solution for this problem.

  AWS Cost Categories
    <> defined at the organizational level
    <> allows mapping of tagged resources into cost centers
    <> uses rules and dimensions
    <> categorize: by account, by tag, by charge type, by service, by cost category

  Handy tools:
    Resource groups (easier way to tag instances)
    Cost management <=> Billing not the same page


Facts:
  <> Cost can vary by regions.
  
AWS BILL:
  The bulk of the bill is usually compute (EC2), Database, Storage (S3).
  **How moving to serverless related to pricing?***
    <> pre-purched capacity units VS Pay for service on consumption
    <> EC2 hours, seconds VS Lambda incovations
    <> RDS hours, seconds VS DynamoDB read/write unit
  
      => serverless can be cheaper

  **Compute:***
    EC2
      <> For price calculation of an EC2 instance, the AWS Pricing Calculator can be used. When an instance is bought, the actual price or estimated price is not available.
      <> **Simple strategy to cost control***
        Stop instance: won't cost more money
      Keywords: spot instances, reserved plan.
      There are discount related to 1-3 year commitment. Also also there are discounts for estimating the usage, about what time period it will be used the most.

    Lambda
      Pay for invocation
      Price also depends on timeout and memory
      Soo much smaller than a EC2 instance
    
      Tip: run the code modularly in separate lambdas can reduce the cost (microservices)
      Keywords: Total Cost of Ownership TCO

  **Database:***
    RDS: managed relational database servers on virtual machines that have been optimized to run on the Amazon Cloud
    Tip: Use reserved instances, it saves a lot!

    DynamoDB
      pay by table access write and read units
      You have to give an estimation on read-write / sec plus the maximum read-write. The price depends on these metrics.

  **Storage:***
    <> There are multiple options for S3 configuration, that cost in a various scale. Example: general, glacier,
  


CloudFormation
  Uses a template to create an architecture.
  Tip: in production, disable Console and only use template.
  Money related: 

  Keywords: CF Designer
  => CF is really useful, deleting a stack removes all instances (no manual error)


AWS Cost Explorer (tool)
  Can search by servic, region, linked account, usage type, cost category.. it's easy to point out where the spend pain is coming from. Filtering is the key.

AWS Cost management
  <> There are default reports created by Amazon. Own reports can be created too.
  <> Can create budgets
  <> Anomaly detection: additional layer of monitoring (recommended for complex infrastructure)
  <> Reservations > Recommendations: Amazon can show you how much you could save if you would use resedved instances over on-demand ones
  <> Savings Plans:
      Compute: flexible, apply for EC2, AWS Fargate, AWS Lambda. reduce by 66%
  <> Reserved instance: you buy that instance coniguration


Option for watch over the billig, monitoring:
  <> CloudWatch billing alarms, creates an SNS

AWS Marketplace subscriptions: can buy images of apps, really good for see solutions that might work for the business and spare a lot of work time (money)

Service Catalog
  Uses CloudFormation template, a portfolio can be created of templates. The usage is not that clear as for a developer role.

AWS Compute Optimizer
    Scan infrastructure, give suggestions EC2 options. Can take 12 hours.
    Show how other resources would have worked with your actual history of usage.

Well-Architected Tool
    Well-Architected Framework: gives a report based on questions
    Serverless Lens




What is true cost?
    Cost of AWS services (basic)
    Labor cost (hidden cost) to learn the cloud
    Training cost (employees), worth the do
    Time to market (At first, 100% cloud can be time consuming)

Scenario: Marketing Website
    Compute: EC2 (more familiar with on-premise work) or Lambda (need training)
    Files: S3
    Data: RDS (familiar to developers) or DynamoDB (good for high-volume website, need training)
    Other: Route 53, EIP

Scenario: Dynamic website
    Compute is quite the same
    + CloudFront


Internal Business Application
    Compute is the same:
    Data:
      RDS for MySQL or DynamoDB
      Caching
      Data processing cost consideration: machine learning (Rekognition), visualization

How much money would we use if the application is down?

Big Data Pipeline, most expensive
    get more and more meaning out of data, cloud
    premium services are quite expensive (AWS get money from these)
    RDS Aurora
    Steaming: Kafka (open source) or AWS Kinesis
    Data transformation: AWS Glue

    I'm seeing the most movement around cost in this data area, and I do believe that this is an unexamined driver as costing moves from the traditional compute of EC2 and RDS and into the service-based costing and I think it's a key takeaway from this course.

    really interesting to see how relational databases are being augmented
      data lake is implemented as S3

    Now, why you'd use this kind of architecture really fundamentally is because you have the volume of data that it would become prohibitively expensive to use traditional relational technologies even on the Amazon cloud and that's the primary driver of this.
      `,
  },

  AWSIAM: {
    title: "AWS IAM",
    related: [],
    text: `
Reasons to create an IAM user and don't use the root account:
  <> You cannot reduce the permissions associated with your AWS account root user access key.
  <> The access key for your AWS account root user gives full access to all your resources for all AWS services, including your billing information.

Must not's:
  <> Don't use or have an access key for the root user

Musts:
  <> Create an admin IAM instead of using the root account
  <> Enable MFA


Real case for other users: AWS recommends that you create new users without permissions and require them to change their password immediately. After they sign in for the first time, you can add policies to the user.

User groups:
  Instead of defining permissions for individual IAM users, it's usually more convenient to create user groups that relate to job functions (administrators, developers, accounting, etc.). Next, define the relevant permissions for each user group. Finally, assign IAM users to those user groups. All the users in an IAM user group inherit the permissions assigned to the user group.
  Advantage: easy to make changes to lot of users in same group, move person from one group to another

Standard security advice of granting least privilege
  Understand access level groupings:
    List, Read, Write, Permissions management, or Tagging
  Validate your policies:
    generates security warnings when a statement in your policy allows access we consider overly permissive
  Generate a policy based on access activity:
    IAM Access Analyzer reviews your AWS CloudTrail logs and generates a policy template that contains the permissions that have been used by the entity in your specified time frame
  Use last accessed information:
    You can use this information to identify unnecessary permissions so that you can refine your IAM or Organizations policies to better adhere to the principle of least privilege.
  Review account events in AWS CloudTrail:



Get started using permissions with AWS managed policies
    Generally give full access to a specific service like: AmazonDynamoDBFullAccess
    Or partial access: AmazonEC2ReadOnlyAccess

Use customer managed policies instead of inline policies
    advantage of using these policies is that you can view all of your managed policies in one place in the console
    Inline policies are policies that exist only on an IAM identity (user, user group, or role).

Keywors: Access level, MFA (Virtual, U2F security key)

Roles can be given to instances. For example: EC2, Lambda


Interfaces for accessing IAM:
  <> AWS Management Console (browser-based interface to manage IAM and AWS resources)
  <> AWS Command Line Tools (issue commands at your system's command line to perform IAM and AWS tasks) AWS CLI
  <> AWS SDKs (consist of libraries and sample code for various programming languages and platforms)
  <> IAM HTTPS API (access IAM and AWS programmatically)


Role: similar to a user, an AWS identity with permissions what the identity can and can not do. don't have password and accesskeys. If a user is assigned to a role, the user gets accesskeys automatically for temporalily
If the user uses the role, he gives up his actual permissions and uses the role's permissions instead. (like wearing an other face).

IAM permissions boundaries: Permissions boundaries are an advanced feature that sets the maximum permissions that an identity-based policy can grant to an IAM entity (user or role).

AWS Organizations service control policies (SCPs): Organizations SCPs specify the maximum permissions for an organization or organizational unit (OU).




Policies for a request:
    0. By default all requests are denied. (root full access)
    1. The AWS identity has it's own policies.
    2. The resources can have permissive policies. These adds on.
    3. The AWS identity might have permission boundries. These remove.
    4. Organization SCPs. These filter the previous result.
   (5.) An explicit deny in any of these policies overrides the allow.

Keywords: Explicit and implicit deny
Cognito: federated access to resources <=> never share security credentials

Steps to rotate access keys:
    1. First AKs are active, create second AKs
    2. Update all apps to use second AKS
    3. Inactivate first AKs
    4. Confirm apps are working
    5. Delete first AKs

Inline policy: directly added to an entity, if the entity is deleted the policy is deleted too. (avoide to accidently add policy for someone)

(Preferred)
Managed policies: policy accessible by reference. Add these policies to entities by the reference. (adv: reusable, versioning and rollback)
    <> AWS has default managed policies to use (updated when needed)

Groups vs managed policies:
    Groups for:
      <> logically group and manage users (team of identities)
    Managed policies for:
      <> assign the same policy to users, groups, and roles.
  Best option is to create manage policies and add these to groups.

Create smaller policies than a big one.


One AWS account vs. multiple AWS accounts:
    One acc:
      <> want simpler control of who does what
      <> no need to isolate projects, products, teams
      <> have no need for breaking up cost
    Multiple acc:
      <> need full isolation between projects, teams, environments
      <> want to break out the cost and usage


IAM components: users, groups, roles, policies
Programmatic access: basically not the Management Console access with access key ID and secret access key usage

1. What is IAM?
  AWS Identity and Access Management (IAM) is a free web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.

2. What are the typical use case scenarios for IAM?
  <> grant other people permission to administer and use resources in your AWS account
  <> to give different permissions to people
  <> secure access to AWS
  <> can add MFA to individual IAMs
  <> temporaly permissions can be given by roles to AIM users (example access S3 bucket)
  <> want to log information who did what in the account

3. What are user groups and security groups in AWS? What’s the difference?
  <> user groups: multiple AWS users are organized in a group, they can be given same policies easily
  <> security groups:

4. What are IAM policies?
  Document in JSON format that explicitely lists permissions.
      {
        Sid: "Stmt12312313123", // who/what is authorized
        Effect: "Allow",
        Action: [
          "s3:DeleteObject"     // Which task(s) are allowed
          "s3:GetObject"
        ],
        Condition: {
          IpAddress: {
            "aws:SourceIP": "10.14.8.0/24"    // need to be met for authorization
          }
        },
        Resource: [
          "arn:aws:s3:::builling-marketing",
          "arn:aws:s3:::builling-sales"       // to which authorized tasks are performed
        ]
      }
  
5. What is EC2 and S3?
  AWS Compute Service and AWS Storage Service.
  
6. How to allow a user to programmatically access AWS resources?
  You can access IAM and AWS programmatically by using the IAM HTTPS API, which lets you issue HTTPS requests directly to the service.
  
7. What is the allow/deny priority order when policies are configured on different levels (group, user, etc.)?
  Check for explicit deny first, then check if there is an allow.
  
8. What ways of managing permissions for a given user do you know?
  <> Inline policy for the user
  <> Add managed policy for the user
  <> Add policy for group, add user to group
  <> Give access to roles
  
9. What places can be used by AWS CLI to gather credentials and settings?
  any aws command with --profile tag with the profile name
  
10. What output formats does AWS CLI support?
  JSON is the default output format of the AWS CLI.
  Yaml, yaml-stream, text, table



AWS CLI:
  open source tool that enables you to interact with AWS services using commands in your command-line shell
    
  Create profiles:
    > aws configure --profile 



Policy evaluation logic
  1. Authentication: who sends the request?
  2. Process request context: determine which policies apply to the request
  3. Evaluate policies within a single account: evaluates all of the policy types
  4. Determine if request is allowed or denied within the account: process policies against the request context


Take away:
  When you have an AWS Account, and you want to share it's services (that you will pay for) with someone, you can add IAM users to the account to securely allow access to your account.

  Handy: users can be grouped. Resources can have policies too, this reduces complexity. Managed roles can be added to groups, IAMs, resources.

  Implicit deny is the base behaviour, access can be added explicitely.
      `,
  },

  AWSS3: {
    title: "AWS S3",
    related: [],
    text: `
Amazon Simple Storage Service (Amazon S3) is storage for the Internet.
Store and retrieve any amount of data, at any time, at anywhere.
Keywords: highly scalable, reliable, fast, inexpensive, durable, low cost, availability, secure, flexible configurations
So you can think of Amazon S3 as a basic data map between "bucket + key + version" and the object itself.
URL https://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl, "doc" is the name of the bucket and "2006-03-01/AmazonS3.wsdl" is the key.

**Create bucket***

**Store objects***
  Each object can contain up to 5 TB of data.

**Retrieve objects***

**Manage permissions***

**Access control***
  defines who can access objects and buckets within Amazon S3 (read, write access)

**Authentication***
  verifies the identity of a user



S3 concepts
  Buckets
    A bucket is a container for objects stored in Amazon S3. Every object is contained in a bucket.
    <> organize the Amazon S3 namespace at the highest level
    <> identify the account responsible for storage and data transfer charges
    <> play a role in access control
    <> serve as the unit of aggregation for usage reporting
    <> buckets belong to the account not to the creator of the bucket
    <> bucket names must be unique within a partition (a grouping of Regions: aws, aws-cn, aws-us-gov)
    <> You can upload any number of objects to the bucket.
    <> After you create a bucket, you cannot change the bucket name or Region.
    <> By default, you can create up to 100 buckets in each of your AWS accounts (max is 1,000 buckets).
    <> If your Region launched after March 20, 2019, your client and bucket must be in the same Region.
    <> Default encryption – Enabling default encryption provides you with automatic server-side encryption. Amazon S3 encrypts an object before saving it to a disk and decrypts the object when you download it.
        There are no additional charges for using default encryption for S3 buckets.
        keywords: AWS KMS (AWS KMS encrypts only the object data. Any object metadata is not encrypted.)
        <> There are additional charges for using AWS KMS CMKs.
        <> When you use SSE-KMS encryption with an S3 bucket, the AWS KMS CMK must be in the same Region as the bucket.
        <> Costumer managed option or AWS default option
        <> The security controls in AWS KMS can help you meet encryption-related compliance requirements.
        <> x-amz-server-side-encryption-context header

        Bucket Keys
          <> AWS KMS generates a bucket-level key that is used to create unique data keys for objects in the bucket
          <> reduce the cost (up to 99 percent) of Amazon S3 server-side encryption using AWS Key Management Service (SSE-KMS) by decreasing the request traffic from Amazon S3 to AWS KMS
          <> after configuration, only new objects will be using the Bucket Key, old ones won't
          <> In AWS CloudFormation, the AWS::S3::Bucket resource includes an encryption property called BucketKeyEnabled that you can use to enable or disable an S3 Bucket Key.
          <> To copy or upload objects with S3 Bucket Keys, the AWS KMS key policy for the CMK must include the kms:Decrypt permission for the calling principal.
          <> If the calling principal is in a different account than the AWS KMS CMK, you must also include kms:Decrypt permission in the IAM policy. The call to kms:Decrypt verifies the integrity of the S3 Bucket Key before using it.
          <> If you want to enable or disable an S3 Bucket Key for existing objects, you can use a COPY operation

        SSE-S3 (Server Side Encryption S3)
          Server-side encryption protects data at rest. Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it rotates regularly. Amazon S3 server-side encryption uses one of the strongest block ciphers available to encrypt your data, 256-bit Advanced Encryption Standard (AES-256).
          <> no charges for the service, but requests to configure and use SSE-S3 incur standard Amazon S3 request charges
          <> If you need server-side encryption for all of the objects that are stored in a bucket, use a bucket policy.

        SSE-C (Costumer)
          Server-side encryption is about protecting data at rest. Server-side encryption encrypts only the object data, not object metadata. Using server-side encryption with customer-provided encryption keys (SSE-C) allows you to set your own encryption keys. With the encryption key you provide as part of your request, Amazon S3 manages the encryption as it writes to disks and decryption when you access your objects. Therefore, you don't need to maintain any code to perform data encryption and decryption. The only thing you do is manage the encryption keys you provide.
          <> AES-256 encryption
          <> retrieve an object, you must provide the same encryption key as part of your request
          <> no new charges, but requests to configure and use SSE-C incur standard Amazon S3 request charges
          <> Amazon S3 does not store the encryption key you provide. Instead, it stores a randomly salted HMAC value of the encryption key to validate future requests. The salted HMAC value cannot be used to derive the value of the encryption key or to decrypt the contents of the encrypted object. That means if you lose the encryption key, you lose the object.

        Protecting data using client-side encryption
          Client-side encryption is the act of encrypting data before sending it to Amazon S3.
          To enable client-side encryption, you have the following options:
            <> Use a customer master key (CMK) stored in AWS Key Management Service (AWS KMS).
            <> Use a master key that you store within your application.
          <> AWS Encryption SDK is a client-side encryption library, implement encryption best practices in Amazon S3 (no JS support)

          Option 1: Using a CMK stored in AWS KMS
            <> upload: get plain text key and cipher blob from AWS KMS, encrypt with plain text, upload with cipher blob
            <> download: download object from S3, send cipher blob to AWS KMS to get plain text key, decrypt object

          Option 2: Using a master key stored within your application
            <> the client is responsible for handling the master key, for every object a separate encription key is generated
            <> the data is encrypted, then the encryption key is encrypted with the master key
            <> the encrypted encription key is uploaded as metadata with the object
            <> at download, the client figure out which master key to use for the decryption for the encryption key, then after decrypting the key, the data is decrypted.


    Bucket operations:
      Empty
      Delete
        

  Objects
    Objects are the fundamental entities stored in Amazon S3. Objects consist of object data and metadata (set of name-value pairs that describe the object).
    An object is uniquely identified within a bucket by a key (name) and a version ID.
    The combination of a bucket, key, and version ID uniquely identify each object.

  Keys
    A key is the unique identifier for an object within a bucket. Every object in a bucket has exactly one key.

  Regions
    choose the geographical AWS Region where Amazon S3 will store the buckets that you create
    choose a Region to optimize latency, minimize costs, or address regulatory requirements
    Objects stored in a Region never leave the Region unless you explicitly transfer them to another Region.
    default region is US East

  Amazon S3 data consistency model
    Updates to a single key are atomic. For example, if you PUT to an existing key from one thread and perform a GET on the same key from a second thread concurrently, you will get either the old data or the new data, but never partial or corrupt data.
    If there are multimple writes to the same key, the last sceduled will be the winner.


S3 features
  Storage classes are designed for different business use cases.
    S3 Standard
      <> for general-purpose storage of frequently accessed data
      features:
        <> low latency, high throughput
        <> durability of 99.999999999% of objects across multiple Availability Zones
        <> Resilient against events that impact an entire Availability Zone
        <> Designed for 99.99% availability over a given year
        <> Supports SSL for data in transit and encryption of data at rest
        <> S3 Lifecycle management for automatic migration of objects to other S3 Storage Classes
        <> Retrieval fee: N/A

      use cases: cloud applications, dynamic websites, content distribution, mobile and gaming applications, and big data analytics

    S3 Intelligent-Tiering
      <> for data with unknown or changing access patterns
      <> designed to optimize costs by automatically moving data to the most cost-effective access tier, without operational overhead
          low latency frequent access tier
          low latency infrequent access tier
          (Optional) tier for high latency infrequent access (archive)      - objects moved here after 90 consecutive days
          (Optional) tier for high latency infrequent access (deep archive) - objects moved here from archive after 180 consecutive days
              If the objects are accessed later, S3 Intelligent-Tiering moves the objects back to the Frequent Access tier

      features:
        <> Automatically optimizes storage costs for data with changing access patterns
        <> Stores objects in four access tiers, optimized for frequent, infrequent, archive, and deep archive access
        <> Frequent and Infrequent Access tiers have same low latency and high throughput performance of S3 Standard
        <> Archive access and deep Archive access tiers have same performance as Glacier and Glacier Deep Archive
        <> durability of 99.999999999% of objects across multiple Availability Zones
        <> 99.9% availability over a given year
        <> No operational overhead, no retrieval fees, no additional tiering fees apply when objects are moved between access tiers within the S3 Intelligent-Tiering storage class
        <> Retrieval fee: N/A

    S3 Standard-IA
      for data that is accessed less frequently, but requires rapid access when needed
      low per GB storage price and per GB retrieval fee
      use cases: ideal for long-term storage, backups, and as a data store for disaster recovery files

      features:
        <> Same low latency and high throughput performance of S3 Standard
        <> durability of 99.999999999% of objects across multiple Availability Zones
        <> Resilient against events that impact an entire Availability Zone
        <> Data is resilient in the event of one entire Availability Zone destruction
        <> Designed for 99.9% availability over a given year
        <> Supports SSL for data in transit and encryption of data at rest
        <> S3 Lifecycle management for automatic migration of objects to other S3 Storage Classes

    S3 One Zone-Infrequent Access
      for data that is accessed less frequently, but requires rapid access when needed
      stores data in a single AZ and costs 20% less than S3 Standard-IA
      ideal for customers who want a lower-cost option for infrequently accessed data but do not require the availability and resilience of S3 Standard or S3 Standard-IA
      good choice for storing secondary backup copies of on-premises data or easily re-creatable data
      use it as cost-effective storage for data that is replicated from another AWS Region using S3 Cross-Region Replication

    Glacier
      secure, durable, and low-cost storage class for data archiving

      features:
        <> durability of 99.999999999% of objects across multiple Availability Zones
        <> Data is resilient in the event of one entire Availability Zone destruction
        <> Supports SSL for data in transit and encryption of data at rest
        <> Low-cost design is ideal for long-term archive
        <> Configurable retrieval times, from minutes to hours

    Glacier Deep Archive
      lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year
      designed for customers — particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors — that retain data sets for 7-10 years or longer to meet regulatory compliance requirements
      can also be used for backup and disaster recovery use cases
      All objects stored in S3 Glacier Deep Archive are replicated and stored across at least three geographically-dispersed Availability Zones

      features:
        <> durability of 99.999999999% of objects across multiple Availability Zones
        <> Lowest cost storage class designed for long-term retention of data that will be retained for 7-10 years
        <> Ideal alternative to magnetic tape libraries
        <> Retrieval time within 12 hours

    Outposts
      delivers object storage to your on-premises AWS Outposts environment
      makes it easy to store and retrieve data on your Outpost
      ideal for workloads with local data residency requirements, and to satisfy demanding performance needs by keeping data close to on-premises applications




  Access managements
    Bucket policies: can define conditions on S3 operations, requesters, IP address..
    IAM: to manage access to your Amazon S3 resources with user policies and groups
    Access control lists (legacy access control mechanism that predates IAM)
    Prefixes: replicate folder-level permissions
    Tagging: tag objects, share only these

    Object lifecycle management for cost efficiency:
      example: after a time objects are moved to other buckets (archive)
  
  Versioning
    use versioning to keep multiple versions of an object in the same bucket

  Common operations
    create bucket, write/read/delete object, list keys

  REST API
    use standart HTTP requests for operations

  Paying
    pay for what you use, grow with the needs
    charged only for storing objects in the bucket and for transferring objects in and out of the bucket

    advanced feature: configure a bucket so that a customer pays for the downloads they make

  S3 Cross-Region Replication
    helps ensure that all users have access to the resources they need and increases operational efficiency


Common use scenarios: backup and storage (pdf, ...), application hosting (have packaged up here), media hosting (access videos), software delivery (app can be download from)

Static website:
  Amazon CloudFront provides the capabilities required to set up a secure static website. Amazon S3 static websites only support HTTP endpoints. CloudFront uses the durable storage of Amazon S3 while providing additional security headers like HTTPS. HTTPS adds security by encrypting a normal HTTP request and protecting against common cyber attacks.

Protecting data
  Object encryption
    protect data in transit and at rest
    Server-side encryption encrypts your object before saving it on disks in its data centers and then decrypts it when you download the objects.
    Client-side encryption is the act of encrypting data before sending it to Amazon S3.

  keywords: signing methods, logging and monitoring (CloudWatch, CloudTrail, S3 Access Logs, Trusted Advisor)

configuration keywords: cors, event notification, lifecycle, location, logging, object locking, replication, tagging, transfer acceleration, versioning, website
access keywords: Virtual-hosted–style access, Path-style access, S3 access points


Managing your storage lifecycle
  AIM: manage your objects so that they are stored cost effectively throughout their lifecycle
  Action types:
    Transition actions
      <> move objects to different storage class to reduce cost (glacier)
      <> example: objects are frequently asked for, then only occasionally
      <> There is a waterfall approach how obejcts can be moved from class to class. Reversed direction is prohibited in life-cycle management.
      <> there can be minimum object size limit to be able to transit them (example 128KB)
      <> there can be limits for how many days an object have to stay in a class before transition

      considerations:
        <> Objects that are stored in the S3 Glacier or S3 Glacier Deep Archive storage classes are not available in real time.
        <> consider aggregating many small objects into a smaller number of large objects to reduce overhead costs
        <> minimal storage duration period is 90 days for the S3 Glacier storage class and 180 days for S3 Glacier Deep Archive. If you delete or overwrite an archived object within the minimal duration period, Amazon S3 charges a prorated early deletion fee. 
        <> if an object is deleted before the minimal days required in a class, the charge for storing the object will be the minimal days required
        <> You can use lifecycle rules to define actions that you want Amazon S3 to take during an object's lifetime
        <> expiration rules apply for new and existing objects
        <> can be used with versioning
        <> not enabled on MFA required buckets
        <> Lifecycle actions are not captured by AWS CloudTrail object level logging, S3 server access logs can be enabled in an S3 bucket to capture S3 Lifecycle-related actions
        <> if two expiration policies overlap, the shorter expiration policy is honored
        <> if two transition policies overlap, S3 Lifecycle transitions your objects to the lower-cost storage class
        <> if rules specify same object for expiration and transition for the same day, both will be executed (but the move in unneccesary, so it will be skipped)
        <> A versioning-enabled bucket has one current version and zero or more noncurrent versions for each object. When you delete an object, note the following: If you don't specify a version ID in your delete request, Amazon S3 adds a delete marker instead of deleting the object. The current object version becomes noncurrent, and then the delete marker becomes the current version.
        <> deleting versioned files are tricky, manual deletion seems the easiest way.
    Expiration actions
      <> delete object after X days
      <> example: app only need logs for 2 months


    
1. What are buckets in S3?
  Buckets are the fundamental containers in Amazon S3 for data storage.

2. What does S3 replication do? What is it for?
  Replication is the automatic, asynchronous copying of objects across buckets in different or the same AWS Regions.

3. What steps are required to gain AWS CLI access to an S3 bucket?
  Have the IAM credentials to access the S3 bucket.

4. How is it possible to control access to S3 resources?
  Bucket policies can define conditions based on S3 operations, requesters, IP address...
  User policies can grant or deny access to S3 resources, group policies also. Tagging resources and creating policies based on these tags are also a solution.
  With prefixes, folder-lever permissions can be set.

5. What are versions in S3? What does it mean to delete an object in S3 when versioning is enabled?
  Versioning allows you to preserve, retrieve, and restore every version of every object stored in an Amazon S3 bucket.
  When a user performs a DELETE operation on an object, subsequent simple (un-versioned) requests will no longer retrieve the object. However, all versions of that object will continue to be preserved in your Amazon S3 bucket and can be retrieved or restored. Only the owner of an Amazon S3 bucket can permanently delete a version.

6. How is it possible to optimize cost of S3 resources?
  Different storage classes can be used with their own pricing to optimize cost for the business needs.
  Setting up archiving objects to move them to other (cheaper) buckets.
  Set up lifecycles and delete old objects.

7. How nested file hierarchies are represented in S3?
  With prefixes.

8. What does S3 store inside its objects?
  The data it self and the meta-data (up to 4K) related to it.

9. Why S3 is better than a physically maintained file server?
  S3 offers to store and retrieve any amount of data, at any time, at anywhere. Secure.
  A file server has limited scalability, and maintenance cost. S3 is pay-for-use based, which is basically cheaper.
  Faster to set up and use.
    
    `,
  },

  AWSMFA: {
    title: "AWS MFA for CLI",
    related: [],
    text: `
There can be restrictions to only be able to use AWS CLI tools if you are authenticated with MFA. Restrictions can be made even on AWS regions.

Install these with pip:
    > pip install --uprade awscli boto3 aws-mfa
    > mkdir -p ~/.aws
    > aws-mfa --setup
    Profile name to [default]: default    // default or own email
    aws_access_key_id: (hidden)
    aws_secret_access_key: (hidden)

When credentials expire, run this:
    > export MFA_DEVICE=$(aws --profile default-long-term iam list-mfa-devices --query "MFADevices[0].SerialNumber" --output text)
    > aws-mfa
      `,
  },

  criticalThinking: {
    title: "Critical thinking",
    related: [],
    text: `

      
5 critical thinking killers
  <> critical thinking values evidence over authority: can't ask question to the boss
  <> black-and-white thinking: don't think like something is bad and it's not bad. these are just two options. Instead name the qualities like bad and good. Each can be true or false on it's own.
  <> moral judgements: quick evaluation with good or bad
  <> labels: categorize something into a bucket and not to think further on it
  <> resistance to change: set aside immediate and emotional reactions, slow pace is good
      `,
  },

  // empty: {
  //     title: '',
  //     related: [],
  //     text: ``
  // }
};

export default topics;
