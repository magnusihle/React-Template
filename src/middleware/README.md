# Middleware

## For Redux
The middleware sits in between the dispatch and reducers, which means we can alter our dispatched actions before they get to the reducers or execute some code during the dispatch.

## Setup Proxy

This file is for setting up the proxy. You can also configure the proxy in package.json. But it's better practice to hafe a config file.

Proxy middleware configuration:

```bash
var proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'http://www.example.org'}));
    #             \____/   \_______________________________/
    #                |                      |
    #              context               options

    # 'apiProxy' is now ready to be used as middleware in a server.
}
```
