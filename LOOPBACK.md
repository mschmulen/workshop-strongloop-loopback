StrongLoop LoopBack
---

##Brief tour of the LoopBack frameworks and server



##SCL ( creating your first loopback app )

Create a folder for our project:
```
mkdir workshop-strongloop-loopback
cd workshop-strongloop-loopback
```

Create your LoopBack Node.js server with the slc command:
```
slc lb project node-server
cd node-server
```

##Customizing and configuring LoopBack

Create your LoopBack Node.js server with the slc command:
```
slc lb model product
slc lb model customer
slc lb model location
```

Start your loopback Node.js server:
```slc run app.js```


##Initialization via boot folder

Add some custom initialization:

```
mkdir boot
cd boot
atom initProducts.js
```

##Customizing web root for landing/splash page


## Binding to a data store ( MonogoDB )


## Exploring the LoopBack API

```slc run .```

```open http://localhost:3000/api/products```

### LoopBack /explorer/

```open http://localhost:3000/explorer```

### Advanced features Filter and Find

### ACLs




---

##References

- [Docs: LoopBack](http://docs.strongloop.com/display/DOC/LoopBack)
- [Docs: LoopBack REST API](http://docs.strongloop.com/display/DOC/REST+API)


