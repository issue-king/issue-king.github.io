cd source_code
call npm run build
echo(===================== npm build success =====================)

cd ..
rd /s /q docs
md docs
xcopy /s /e  source_code\docs\.vuepress\dist docs
echo(===================== dir copy success =====================)

git add .
git commit -m 'git auto commit'
git push
echo(===================== git push success =====================)
