#!/bin/bash
cd /home/kavia/workspace/code-generation/hello-world-react-app-333575-333589/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

