npm run build
git add dist -f
git commit -m "dist updated"
git subtree push --prefix dist origin gh-pages
