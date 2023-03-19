#!/bin/bash
npm audit fix --force
npx postcss src/styles/config.css -o src/styles/tailwind.css
npx next build