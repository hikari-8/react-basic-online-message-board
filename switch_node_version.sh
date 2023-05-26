#! /bin/bash
set -e

NODE_VERSION_FILE=".node-version"
while ["$PWD"!="/"]; do
  if[-f"$NODE_VERSION_FILE"]; then
    NODE_VERSION=$(cat "$NODE_VERSION_FILE")
    echo "Switching to NOde.js version $NODE_VERSION"
    nodebrew use $NODE_VERSION
    break
  fi
  cd..
done
