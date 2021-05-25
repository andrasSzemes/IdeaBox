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

CloudFormation makes it possible to create an AWS infrastructure based on code. Code as Infrastructure.
These JSON or YAML files are basically configurations for AWS resources. The advantage of a file like this is, that the CF can take it, and create, update, delete resources upon the description. Therefore the developer doesn't have to create or update anything manually which is more time consuming and error prone.
  <> if update fails, CF roles back to previous stable version

A configuration file can be written manually, by checking the syntax and options for the resources, but there is an online helper tool for this process, that can be done in the Cloud Formation Designer. This tool allow to edit CF templates in a drag and drop visual way.

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


Template
    Format version: defines format in which the template is written, enable users to use older versions, and the cloud formation server to choose the correct interpreter
    Description: provide instruction, information about the template
    Parameters: list of parameters, that are used in the template. to use the template these have to be provided for creating a stack from it.
    Resources: provision the resources
      "ResourceName" : {
        "Type": "AWS::S3::Bucket",
        "Properties": { ... },
        "DeletionPolicy: "Retain"
      }

    Outputs: values to be easily accessible from a stack, CLI or API

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
    title: "  **S3***\n",
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

  communication: {
    title: "Communication",
    related: [],
    text: `

**Building blocks:***
  **People***
    Who will be there?
    What do I need to know about them?

    Think => Feel => Do model
      What do I want the other to think?
      What do I want the other to feel?
      What do I want the other to do?
      
      Everyone has mental filters, that modifies perception of messages

  **Message***
    Is email appropriate or should I pop in for a quick chat?
    Check your message for understanding.
    Use the communication form, email, class?

  **Context***
    How is the timing of this email?
    location, timing, relationships, tune

  **Listening***
    What kind of listener do I want to be right now?
    Listen with ears, eyes, heart. empathy
`,
  },

  // ,empty: {
  //     title: '',
  //     related: [],
  //     text: ``
  // }
};

export default topics;
