set -e

git config user.name "LeisanYusupova"
git config user.email "leisan_11_@mail.ru"

echo "Start to deploy..."

git checkout --orphan gh-pages
ls -l

git --work-tree ./dist add --all
git --work-tree ./dist commit -m "Deploy to GitHub Pages"
git push -f origin HEAD:gh-pages
rm -r dist

git checkout -f main
git branch -D gh-pages

echo "Successfully deployed"

