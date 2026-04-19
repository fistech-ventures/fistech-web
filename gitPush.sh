#!/bin/bash

if [ -z "$1" ]; then
  echo "❌ Please provide a commit message"
  echo "Usage: ./gitPush.sh \"your commit message\""
  exit 1
fi

BRANCH=$(git rev-parse --abbrev-ref HEAD)

git add .
echo "📦 Staged all files"

echo "✅ Committing: \"$1\""
git commit -m "$1"
echo "Added the commit message: $1"

echo "🚀 Pushing to $BRANCH..."
git push origin "$BRANCH"

echo "✅ Done! Pushed to $BRANCH"