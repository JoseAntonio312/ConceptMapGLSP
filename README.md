# Eclipse GLSP - Concept Map:<br> 🖥️ Java ● 🗂️ EMF ● 🖼️ Theia

This project contains a concept map in which you can build your own course.
It provides the initial setup of the package architecture and environment for a GLSP diagram editor that uses ...

![ConceptMap Image](ConceptMap.xcf)


## Project structure

This project is structured as follows:

-   [`glsp-client`](glsp-client)
    -   [`conceptmap-browser-app`](glsp-client/conceptmap-browser-app): browser client application that integrates the basic Theia plugins and the coceptmap specific glsp plugins
    -   [`conceptmap-glsp`](glsp-client/conceptmap-glsp): diagram client configuring the views for rendering and the user interface modules
    -   [`conceptmap-theia`](glsp-client/conceptmap-theia): glue code for integrating the editor into Theia
    -   [`workspace`](glsp-client/workspace): place where you can work to create your own course in addition to being able to import/export courses
-   [`glsp-server`](glsp-server)
    -   [`src`](glsp-server/src): dependency injection module of the server and diagram configuration
    -   [`src/handler`](glsp-server/src/handler): handlers for the diagram-specific actions
    -   [`src/model`](glsp-server/src/model): all conceptmap model, graphical model and model state related files
    -   [`src/launch`](glsp-server/src/launch): contains the Java GLSP server launcher
    -   [`src/palette`](glsp-server/src/launch): custom palette item provider
    -   [`src/marker`](glsp-server/src/marker): contains the source code of the model validartor that allows you to verify if you are building the course correctly
    -   [`src/operations`]: contains operations necessary for the correct functioning of some elements of the model to be built
    -   [`src/editname`]: contains the file in charge of verifying that the name of the elements is assigned according to the rules of the metamodel
    -   [`src/action`]: contains specific actions such as changing the position of the elements of the diagram 

The most important entry points are:

-   [`glsp-client/conceptmap-glsp/src/conceptmap-diagram-module.ts`](glsp-client/conceptmap-glsp/src/conceptmap-diagram-module.ts): dependency injection module of the client
-   [`glsp-client/conceptmap-browser-app/package.json`](glsp-client/conceptmap-browser-app/package.json): Theia browser application definition
-   [`glsp-server/src/main/java/org/eclipse/glsp/example/javaemf/ConceptMapDiagramModule.java`](glsp-server/src/main/java/org/eclipse/glsp/example/javaemf/ConceptMapDiagramModule.java): dependency injection module of the server

## Prerequisites

The following libraries/frameworks need to be installed on your system:

-   [Node.js](https://nodejs.org/en/) `>=16.11.0`
-   [Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) `>=1.7.0 <2.x.x`
-   [Java](https://adoptium.net/temurin/releases) `>=17`
-   [Maven](https://maven.apache.org/) `>=3.6.0`

The examples are heavily interweaved with Eclipse Theia, so please also check the [prerequisites of Theia](https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#prerequisites).

## How to install Node.js and Yarn - Linux

To install node.js for this project is recommended to install nvm to manage versions more easily and be able to install yarn easily:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
```

Once we have nvm installed we can install the version we need for node.js:

```bash
nvm install 16.14.0
```

And also use it:

```bash
nvm use 16.14.0
```

Finally we will install yarn thanks to npm with the following command:

```bash
nvm install -g yarn
```

## How to install Maven and Java 17 - Linux

To download Maven in its latest version, you must go to the official [Maven](https://maven.apache.org/download.cgi) website and download the compressed file

After this we will proceed to install the compressed file:

```bash
tar -xzvf apache-maven-{version}-bin.tar.gz
```

The problem we have now, especially in Linux systems, is that the default version of Java for Maven will be 11, so it is necessary to install version 17 or another

So we go to the official Java page to download the compressed file that contains [Java](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).

Once we have downloaded the corresponding tablet for the system we have, we will proceed to install it:

```bash
sudo dpkg -i jdk-{version}-linux-x64-bin.deb
```

Finally we check the java versions in both java and maven to verify that there are no additional steps to do:

```bash
java -version
```

```bash
mvn --version
```

## Theia Version compatibility

This project template is compatible with Theia `>=1.39.0`.

## Building the project

The server component is built with `maven` and the client component is built with `yarn`.
A convenience script to build both is provided.

The project has been configured so that the project can be built in two different ways:

The first of them is the manual way by using yarn and maven:

```bash
yarn build
```

In addition, it is also possible to build each component individually:

```bash
# Build only the glsp-client
yarn build:client

# Build only glsp-server
yarn build:server
```

The second way to build the project is using the dockerfile provided:

```bash
docker build -t conceptmap .
```

## Additional libraries to avoid possible problems during the construction of the project - Linux

When building the client part, if we do not have these libraries installed, we will have errors

1.Libsecret-1-dev

```bash
sudo apt-get install libsecret-1-dev
```

2.Napi.h

```bash
sudo apt-get install node-gyp build-essential
```

After this there should not be any type of error

## Running the project

To start the Theia browser application with the integrated conceptmap project, navigate to the client directory

```bash
cd glsp-client
```

and then execute:

```bash
yarn start
```

Another way to run the project is using the docker image built before:


```bash
docker run -d -p 3000:3000 --name my_container conceptmap

```

This will launch the project in the browser with an embedded GLSP server on [localhost:3000](http://localhost:3000).

To debug the involved components, the [VS Code workspace](java-emf-theia-example.code-workspace) offers launch configs, available in the `Run and Debug` view (Ctrl + Shift + D).
Here you can choose between four different launch configurations:

-   `Launch ConceptMap GLSP Server`<br>
    This config can be used to manually launch the `ConceptMap GLSP Server` java process.
    Breakpoints in the source files of the `glsp-server` directory will be picked up.
    In order to use this config, the Theia application backend has to be launched in `External` server mode (see `Launch ConceptMap Theia Backend (External GLSP Server)`).
    If the GLSP server is started via this launch config, it is possible to consume code changes immediately in the running instance via `Hot Code Replace` in the Debug toolbar.
-   `Launch ConceptMap Theia Backend (External GLSP Server)`<br>
    This config launches the Theia browser backend application but does not start the GLSP server as embedded process.
    Breakpoints in the source files of the `glsp-client/**/node` directories will be picked up.
    It expects that the GLSP Server process is already running and has been started externally with the `Launch ConcetpMap GLSP Server` config.
-   `Launch ConceptMap Theia Backend (Embedded GLSP Server)`<br>
    This config launches the Theia browser backend application and will start the GLSP server as embedded process which means you won't be able to debug the GLSP Server source code.
    Breakpoints in the source files of the `glsp-client/**/node` directories will be picked up.
-   `Launch ConceptMap Theia backed with external GLSP Server`<br>
    This is a convenience compound config that launches both the ConceptMap Theia backend in external server mode and the ConcetpMap GLSP server process. Enables debugging of both the glsp-client and glsp-server code simultaneously.
-   `Launch Theia Frontend`<br>
    Launches a Google chrome instance, opens the Theia browser application at `http://localhost:3000` and will automatically open an project workspace that contains a `example.course` file.
    Double-click the file in the `Explorer` to open it with the `ConceptMap Diagram Editor`.
    Breakpoints in the source files of the `glsp-client/**/browser` directories will be picked up.

## More information

For more information, please visit the [Eclipse GLSP Umbrella repository](https://github.com/eclipse-glsp/glsp) and the [Eclipse GLSP Website](https://www.eclipse.org/glsp/).
If you have questions, please raise them in the [discussions](https://github.com/eclipse-glsp/glsp/discussions) and have a look at our [communication and support options](https://www.eclipse.org/glsp/contact/).
