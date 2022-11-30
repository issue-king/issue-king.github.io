cd source_code
call npm run build
echo(===================== npm build success =====================)

cd ..
rm -rf docs
mkdir docs
cp -avx  source_code/docs/.vuepress/dist/* docs
echo(===================== dir copy success =====================)

git add .
git commit -m %1
git push
echo(===================== git push success =====================)
