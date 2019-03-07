#!/bin/bash
find ../src -name "*.tsx" -exec bash -c 'mv "$1" "${1%.tsx}".jsx' - '{}' \;
find ../src -name "*.ts" -exec bash -c 'mv "$1" "${1%.ts}".js' - '{}' \;