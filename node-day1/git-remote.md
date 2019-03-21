## 本地->github
- 先有github账号

## 建仓库之后可以看到
echo "# vue10-lesson-master_my_version-ok" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:changfeng1800/vue10-lesson-master_my_version-ok.git
git push -u origin master

- 当执行git push -u origin master时有提示：
$ git push -u origin master
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.
发现是公司网络的问题，要连手机
- 连好手机，重新来过,中间输入过yes,然后OK
$ git push -u origin master
The authenticity of host 'github.com (52.74.223.119)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,52.74.223.119' (RSA) to the list of known hosts.
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (5/5), 345 bytes | 69.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To github.com:changfeng1800/vue10-lesson-master_my_version-ok.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.




## 本地提交
- README.md
- 创建一个.gitignore
- git不会上传空文件夹添加.gitkeep在空文件夹内

## 关联远程仓库
```
git remote add origin 地址 ////origin是这个地址起的别名，因为地址很长不好记 ，这里只是git 和仓库关联，下面的Push才是推代码
git push -u origin master   ///-u 下次直接用git push就可以了
git remote -v  ////看远程仓库
```

## 删除关联
```
git remote rm 名字    ///万一第一次粘错了地址，就是删了，再重新来
```

## 推送代码
```
git push origin master  :推送要输入user和password,如果是以前输入过，新的git会记住密码
另外加ssh-key时有输入密码的话，这里会提示  Enter passphrase for key '/c/Users/apple/.ssh/id_rsa': ，这里输入密码就行了，密码是暗文看不到，输完按enter即可
```

## 拉取最新的代码
冲突：1. 在github edit 提交了一次，但是本地没变，这时本地比网上版本底，执行git push就是报错，
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:changfeng1800/git-test-node.git'
原因线上线下不一样，提示要先git pull origin master(fetch+merge)一次到本地，再push,这里类似把线上代码merge到本地了一次，会提示
Merge branch 'master' of github.com:changfeng1800/git-test-node

# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
意思是要写一个message,上面是默认的，可以改，改完esc :wq

冲突：2,先改线上index.js第一行，提交。再改本地index.js第一行,提交。
     然后，git add .   -> git commit -m 'update basic index.js' ->   git push origin master 又是报错，跟上次一样
     ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:changfeng1800/git-test-node.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
需要再执行：git pull origin master 上次是拉下来直接merge了，这次没有直接merge,在index.js这个文件里面有冲突，需要手动解决
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:changfeng1800/git-test-node
 * branch            master     -> FETCH_HEAD
   f351edd..4fd6fba  master     -> origin/master
Auto-merging index.js
CONFLICT (content): Merge conflict in index.js
Automatic merge failed; fix conflicts and then commit the result.



##拉取最新的代码  这里相当于两步
- pull = git fetch  + git merge
```
git pull origin master (fetch+merge)    
```

## gh-pages分支来发布我们的静态页
- 在项目中创建一个gh-pages的分支
- 将分支提到线上仓库
- 找到提供给你的网站 settings github-pages
    ```
        git checkout -b gh-pages
        touch index.html
        git add .
        git commit -m 'xxx'
        git push origin gh-pages
    ```

## issue问题
- 可以提交对项目，自己的信息

## follow 别人：
-关注别人，比如珠峰的老师
github里面搜zhufengzhufeng然后点user-> follow

## 更改别人代码
- fork实在当前项目下克隆了一份，如果代码更新，不会随之更新

> 只有fork关系才能发送pull request请求

## 拉取本地
```
git clone 项目地址 项目别名
```

> 默认就是git仓库而且有origin 地址，可以将代码提交到自己的仓库上

## collaborators
- 添加贡献者，被添加的人拥有最大权限

## GUI界面化
