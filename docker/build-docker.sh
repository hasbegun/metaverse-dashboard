#!/usr/bin/env sh

IMAGE_NAME=metaverse-dashboard
REPO=hasbegun
BRANCH=dev_ssl
COMMIT=$(git rev-parse --short HEAD)
docker build --build-arg=COMMIT=$(git rev-parse --short HEAD) \
    --build-arg=REPO=$REPO \
    --build-arg=BRANCH=$BRANCH \
    -t $IMAGE_NAME -f Dockerfile .
