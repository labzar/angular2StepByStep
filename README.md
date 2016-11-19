# angular2StepByStep
## QUICKSTART
The QuickStart application has the structure of a real-world Angular application and displays the simple message: Hellooo World :)
###### Prerequisite: Install Node.js and npm

If Node.js and npm aren't already on your machine, install them. Our examples require node v4.x.x or higher and npm 3.x.x or higher. To check which version you are using, run node -v and npm -v in a terminal window.

###### Step 1: Create and configure the project

**Create the project folder**
Using a terminal window, create a directory for the project, and change into this directory.

COPY CODE
```
mkdir angular-quickstart
cd    angular-quickstart
```

**Create configuration files**
Our typical Angular project needs several configuration files:

> package.json: identifies npm package dependencies for the project.
> tsconfig.json: defines how the TypeScript compiler generates JavaScript from the project's files.
> systemjs.config.js: provides information to a module loader about where to find application modules, and registers all the necessary packages. It also contains other packages that will be needed by later documentation examples.
Create each of these files in your project directory. Populate them by pasting in text from the tabs in the example box below.

> package.json
```
{
  "name": "angular-quickstart",
  "version": "1.0.0",
  "scripts": {
    "start": "tsc && concurrently \"tsc -w\" \"lite-server\" ",
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
  "licenses": [
    {
      "type": "MIT",
      "url": "https://github.com/angular/angular.io/blob/master/LICENSE"
    }
  ],
  "dependencies": {
    "@angular/common": "~2.2.0",
    "@angular/compiler": "~2.2.0",
    "@angular/core": "~2.2.0",
    "@angular/forms": "~2.2.0",
    "@angular/http": "~2.2.0",
    "@angular/platform-browser": "~2.2.0",
    "@angular/platform-browser-dynamic": "~2.2.0",
    "@angular/router": "~3.2.0",
    "@angular/upgrade": "~2.2.0",
    "angular-in-memory-web-api": "~0.1.15",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.8",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.39",
    "zone.js": "^0.6.25"
  },
  "devDependencies": {
    "@types/core-js": "^0.9.34",
    "@types/node": "^6.0.45",
    "concurrently": "^3.0.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.3"
  }
}
```
