#!/bin/bash

git clone https://github.com/brvjeo/react-template.git

cp -r ./react-template/* .

rm -rf ./react-template

rm README.md

touch README.md

rm brvjeo.sh

git init

touch .gitignore

echo -e "node_modules/\n.gitignore\nwebpack.config.js\nbabel.config.json\ntsconfig.json\n.prettierrc\npackage-lock.json" >> .gitignore

npm run initialize

npm i

webstorm .
