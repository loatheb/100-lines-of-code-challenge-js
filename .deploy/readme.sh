#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit() {
  git add README.md
  git commit -m "chore(readme): Travis build: $TRAVIS_BUILD_NUMBER, auto update contributors list"
}

push() {
  git push origin "$TRAVIS_PULL_REQUEST_BRANCH"
}

if [ "$TRAVIS_PULL_REQUEST" == "true" ]; then
  setup_git
  commit
  push
fi
