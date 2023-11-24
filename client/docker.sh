#!/usr/bin/env bash

MY_DIR=$(dirname $(readlink -f "$0") | sed  "s/\/[^\/]*$//")
USER=$(whoami)

function getOperationalSystem() {
  case "$OSTYPE" in
  win*) echo "windows" ;;
  msys*) echo "windows" ;;
  *) echo "linux" ;;
  esac
}

OS=$(getOperationalSystem)

echo "==============================================================================="
echo "=== SRC: $MY_DIR"
echo "=== OS: $OS"
echo "=== USER: $USER"
echo "==============================================================================="

  ## chown configuration
  CHOWN_USER="$USER:www-data"
  DOCKER_USER="$USER"
  DOCKER_GROUP="www-data"

  # run the npm installation
  printf  "\n=== [DOCKER NPM]\n"
  docker-compose exec client bash -c "npm run start"
