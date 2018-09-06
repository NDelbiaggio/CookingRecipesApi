# CookingRecipesApi

In order to run this project, you will need to install [Nodejs](https://nodejs.org/en/).

# Installing Mongodb on your machine

Then, you will need to install mongodb on your machine.

## For Mac

On mac I would recommend to first install [brew](https://brew.sh/) and then use it to install mongodb

```
brew install mongodb
```

After it we can create the directory where the data will be stored

```
sudo mkdir -p /data/db
```

Then it is necessary to give the write permission to this directory,

```
sudo chown -R `id -un` /data/db
```

Finally we can start the database with

```
mongod
```

In order to have an interface for our database we can download [Mongodb Compas](https://www.mongodb.com/download-center?jmp=nav#compass)

## For Windows

The first step is to download the msi of [Mongodb](https://www.mongodb.com/download-center?jmp=nav#community)
Then use the installer and do a complete installation.

In order to get a interface for our database, you can dowload [Mongodb Compas](https://www.mongodb.com/download-center?jmp=nav#compass) if you didn't do it with the installer.

After that you need to start Mongodb, for that go to:

```
ProgramesFiles\MongoDb\Server\'the version of mongodb'
```

then select **mongod** and copy the path.

After that search for **View advanced system settings**.

Then go on **environments variables**

Now in **System variables** select **path** and then **edit**

Finally, add **new** path and **paste the path to mongod**

Now **mongod** can be run from the **cmd**, you might need to restart it.

By default mongodb stores the data to **c:\data\db** so we need to create this directory. For that run the **cmd** and run the command:

```
md c:\data\db
```

now it's finally time to start it so run

```
mongod
```

and go on compas to connect the interface

# Starting the project

First of all you need to fork this project. Then install the node_modules by running

```
npm install
```

and then run the server

```
nodemon index.js
```

or

```
node index.js
```

by default the server is running on **localhost:3900**

## Populate the database

For adding some data in the database run

```
node populateDatabase.js
```

# Routes

- **/api/units** GET only
- **/api/ingredients** GET & POST only
- **/api/recipes** not available yet
- **/api/categories** not available yet
