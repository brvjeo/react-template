#!/bin/bash

git clone https://github.com/brvjeo/react-template.git

cp -r ./react-template/* .

cp ./react-template/.prettierrc .

rm -rf ./react-template

rm README.md

touch README.md

rm brvjeo.sh

git init

touch .gitignore

echo -e "jest.config.ts\n.eslintrc.js\n/configuration\nGlobal.d.ts\n/node_modules\n.gitignore\nwebpack.config.ts\nbabel.config.json\ntsconfig.json\n.prettierrc\npackage-lock.json\n/.idea" >> .gitignore

npm run initialize

npm i

webstorm .
