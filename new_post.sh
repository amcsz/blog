#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 \"[title goes here]\""
  exit 1
fi

DATE=$(date +"%Y-%m-%d")
TIME=$(date +"%H:%M:%S")
TZ_OFFSET="-0400"
FILENAME_DATE=$(date +"%Y-%m-%d")

TITLE="$1"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')

# Construct filename
FILENAME="./_posts/${FILENAME_DATE}-${SLUG}.md"

# Write content to file
cat > "$FILENAME" <<EOF
---
layout: post
title:  "$TITLE"
date:   ${DATE} ${TIME} ${TZ_OFFSET}
tags: general
---
post content
EOF

echo "Blog post created at $FILENAME"
