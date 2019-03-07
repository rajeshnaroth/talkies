#!/bin/bash
find ../src -name "*.jsx" -exec bash -c 'mv "$1" "${1%.jsx}".tsx' - '{}' \;
find ../src -name "*.js" -exec bash -c 'mv "$1" "${1%.js}".ts' - '{}' \;