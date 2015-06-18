To install
1. clone and check out the desired version of `xtuple`
1. clone and check out the desired version of `xtte`
1. 
  - you can either use `build_app.js` to load first the foundation-database pieces (tables and desktop client parts) then the mobile client and supporting data:

    ```
    $ cd .../xtuple
    $ scripts/build_app.js -e ../xtte/extensions/time_expense/foundation-database
    $ scripts/build_app.js -e ../xtte/extensions/time_expense
    ```
  - or create an updater package for just the foundation-database bits:

    ```
    $ cd .../xtte/source
    $ make   # creates .../xtte/packages/xtte-X.Y.X.tgz
    ```
