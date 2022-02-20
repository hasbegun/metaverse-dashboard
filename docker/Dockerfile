FROM ubuntu:20.04

# default is 'vircadia'
ARG REPO=hasbegun
# default is 'master'
ARG BRANCH=dev_ssl
ARG COMMIT=""

LABEL branch=${BRANCH}
LABEL commit=${COMMIT}

RUN apt update && apt install -y git curl
RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh && \
    bash ./nodesource_setup.sh && \
    apt install nodejs && \
    rm ./nodesource_setup.sh

RUN npm install -g @vue/cli@latest

RUN apt-get update
# checkout repo
RUN mkdir -p /usr/local/src && \
    cd /usr/local/src && \
    git clone --depth 1 --branch ${BRANCH} https://github.com/${REPO}/metaverse-dashboard.git
RUN cd /usr/local/src/metaverse-dashboard && \
    npm install && npm run build

ENV USER=cadia
ENV METAVERSEDASHBOARD=metaverse-dashboard

# Add a user for the server to run under
RUN adduser --disabled-password --gecos 'metaverse-server user' ${USER}

WORKDIR /home/${USER}
ENV COMMIT_SHA=${COMMIT}
ENV COMMIT_BRANCH=${BRANCH}
USER ${USER}:${USER}
RUN mkdir -p /home/${USER}/${METAVERSEDASHBOARD}/log
COPY --chown=${USER}:${USER} ./files/run-metaverse-dashboard.sh /home/${USER}/

EXPOSE 8080
ENTRYPOINT [ "/home/cadia/run-metaverse-dashboard.sh" ]
