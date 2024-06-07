FROM ubuntu:22.04

# Actualiza el sistema e instala las dependencias del sistema
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    gnupg2 \
    lsb-release \
    software-properties-common \
    libxkbfile-dev \
    libsecret-1-dev \
    openjdk-17-jdk \
    maven \
    build-essential

# Instalar nvm (Node Version Manager) y Node.js 16.14.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash && \
    export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install 16.14.0 && \
    nvm use 16.14.0 && \
    nvm alias default 16.14.0 && \
    npm install -g yarn

# Establecer las variables de entorno para nvm y Node.js
ENV NVM_DIR="/root/.nvm"
ENV NODE_VERSION="16.14.0"
ENV PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Establecer las variables de entorno para Java
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$PATH:$JAVA_HOME/bin

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$PATH:$JAVA_HOME/bin

WORKDIR /usr/src/app

ENV PUPPETEER_SKIP_DOWNLOAD=true

COPY glsp-server/target/org.eclipse.glsp.example.javaemf-2.0.0-glsp.jar /usr/src/glsp-server/target/

COPY . /usr/src/app

RUN cd /usr/src/app && yarn build

EXPOSE 3000

COPY ./glsp-client .

CMD [ "yarn", "start" ]
