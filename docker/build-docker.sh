#!/usr/bin/env sh

IMAGE_NAME=metaverse-dashboard
# change repo and branch for debug and dev.
REPO=hasbegun
BRANCH=dev_ssl
COMMIT=$(git rev-parse --short HEAD)
echo "Build $IMAGE_NAME based on $COMMIT from $REPO/$BRANCH."
docker build --build-arg=COMMIT=$COMMIT \
    --build-arg=REPO=$REPO \
    --build-arg=BRANCH=$BRANCH \
    -t $IMAGE_NAME -f Dockerfile .
