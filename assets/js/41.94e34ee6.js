(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{619:function(t,e,a){"use strict";a.r(e);var v=a(69),i=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-常用知识总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-常用知识总结"}},[t._v("#")]),t._v(" Git 常用知识总结")]),t._v(" "),a("p",[t._v("总结一下常用的 git 方法，和一些自己的思考。")]),t._v(" "),a("ul",[a("li",[t._v("基本用法")]),t._v(" "),a("li",[t._v("进阶用法")])]),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("首先，我们如果要在 github 上修改代码，通常的用法是：")]),t._v(" "),a("ul",[a("li",[t._v("git clone github/xxx 克隆仓库。")]),t._v(" "),a("li",[t._v("git checkout -b feature/xxx 新建自己的分支。")]),t._v(" "),a("li",[t._v("修改代码。")]),t._v(" "),a("li",[t._v("git add xxx 暂存代码。")]),t._v(" "),a("li",[t._v("git commit -m 'feat: xxx' 把暂存区的所有修改提交到分支上。")]),t._v(" "),a("li",[t._v("git push 推送到远程仓库。")]),t._v(" "),a("li",[t._v("在 github 上提交 pull request 。")]),t._v(" "),a("li",[t._v("合并后删除 feature/xxx 分支。")])]),t._v(" "),a("p",[t._v("可以说，这个步骤适用于绝大多数开发场景，对于新手来说非常友好。")]),t._v(" "),a("h3",{attrs:{id:"基本-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本-api"}},[t._v("#")]),t._v(" 基本 API")]),t._v(" "),a("p",[t._v("上文的操作也不是万能的，我们在开发时很有可能遇到：代码回滚、合并冲突、查看提交记录等问题，这个时候，可以使用以下几个命令：")]),t._v(" "),a("ul",[a("li",[t._v("git status 查看状态。")]),t._v(" "),a("li",[t._v("git diff 查看工作区和版本库里面最新版本的区别。")]),t._v(" "),a("li",[t._v("git log 查看提交记录。")]),t._v(" "),a("li",[t._v("git reflog 查看每一次命令记录。")]),t._v(" "),a("li",[t._v("git reset --hard commit_id 切换到指定提交版本。")]),t._v(" "),a("li",[t._v("git revert HEAD 发起一个新的 commit，用来撤销最后一次 commit。\n"),a("ul",[a("li",[t._v("git revert 不能操作文件")])])]),t._v(" "),a("li",[t._v("git stash 将当前改动先存起来。git stash pop 释放之前存入的改动。")])]),t._v(" "),a("h3",{attrs:{id:"基本分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本分支管理"}},[t._v("#")]),t._v(" 基本分支管理")]),t._v(" "),a("p",[t._v("如果是单人开发，分支管理也许没那么重要，如果是一个团队，那么分支管理就特别重要了。")]),t._v(" "),a("p",[t._v("良好的分支管理可以减少代码冲突，让上线流程更加清晰，分享一个分支开发案例：")]),t._v(" "),a("ul",[a("li",[t._v("master 线上代码分支。")]),t._v(" "),a("li",[t._v("develop 主开发分支。\n"),a("ul",[a("li",[t._v("当无项目开发时，和 master 分支保持一致。")]),t._v(" "),a("li",[t._v("当有项目开发时，会包含正在开发的项目代码。")])])]),t._v(" "),a("li",[t._v("feature/xxx 个人开发分支。\n"),a("ul",[a("li",[t._v("从 develop 分支上拉取代码，进行功能开发。")]),t._v(" "),a("li",[t._v("开发完成后，合并到 develop 分支。")])])]),t._v(" "),a("li",[t._v("release 预发布分支。\n"),a("ul",[a("li",[t._v("从 develop 分支上拉取代码，交给测试去测。")]),t._v(" "),a("li",[t._v("测试发现比较大的 bug，在 feature 分支上修改后，合到 develop 分支上，在重新拉取。")]),t._v(" "),a("li",[t._v("测试发现的小 bug，直接在 release 分支上修改。")]),t._v(" "),a("li",[t._v("合并到 master 和 develop 分支上。")])])]),t._v(" "),a("li",[t._v("hotfix 线上紧急修复分支。\n"),a("ul",[a("li",[t._v("从 master 分支拉取，修改代码")]),t._v(" "),a("li",[t._v("测试完毕后，直接合回 master 和 develop 分支。")])])])]),t._v(" "),a("p",[t._v("要实现这些操作步骤，我们得知道以下几个命令：")]),t._v(" "),a("ul",[a("li",[t._v("查看分支：git branch")]),t._v(" "),a("li",[t._v("创建分支：git branch [name]")]),t._v(" "),a("li",[t._v("切换分支：git checkout [name]")]),t._v(" "),a("li",[t._v("创建 + 切换分支：git checkout -b [name]")]),t._v(" "),a("li",[t._v("合并某分支到当前分支：git merge [name]")]),t._v(" "),a("li",[t._v("删除分支：git branch -d [name]")]),t._v(" "),a("li",[t._v("建立本地分支和远程分支的关联：git branch --set-upstream branch-name origin/branch-name")])]),t._v(" "),a("p",[t._v("Ok，到目前为止，这些 git 命令已经满足大部分的需求了，在多人开发的项目中，只要做好明确分工，减少代码冲突，就不会有什么大问题。")]),t._v(" "),a("h2",{attrs:{id:"进阶用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶用法"}},[t._v("#")]),t._v(" 进阶用法")]),t._v(" "),a("p",[t._v("基本用法满足了我们 80% 的需求，剩下的 20% 则可以提高我们的 git 使用效率。")]),t._v(" "),a("p",[t._v("例如：开发时如果出现了以下问题，我们应该怎么办？")]),t._v(" "),a("ul",[a("li",[t._v("怎么获取其他分支的 commit？")]),t._v(" "),a("li",[t._v("怎么合并多个 commit？")]),t._v(" "),a("li",[t._v("如何优化提交流水线？")])]),t._v(" "),a("p",[t._v("第一个问题其实很好做，直接使用 cherry-pick 命令就好了。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick commit_id\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("我们根据 commit_id 就能把其他分支的一个或多个 commit 合到当前分支上来。")]),t._v(" "),a("h3",{attrs:{id:"合并多个-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并多个-commit"}},[t._v("#")]),t._v(" 合并多个 commit")]),t._v(" "),a("p",[t._v("如果要合并最后 5 次提交记录为 1 次提交记录，可以先撤销过去的 5 个 commit，然后再建一个新的。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD~5\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这是合并后的 commit msg"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("使用 git rebase 也可以达到同样的效果。")]),t._v(" "),a("p",[t._v("git rebase 命令的 i 参数表示互动（interactive），这时 git 会打开一个互动界面，进行下一步操作。互动界面中，先列出当前分支最新的几个 commit（越下面越新）。")]),t._v(" "),a("p",[t._v("每个 commit 前面有一个操作命令，默认是 pick，表示该行 commit 被选中，要进行 rebase 操作。还有一些其他操作命令：")]),t._v(" "),a("ul",[a("li",[t._v("pick：正常选中。")]),t._v(" "),a("li",[t._v("reword：选中，并且修改提交信息。")]),t._v(" "),a("li",[t._v("edit：选中，rebase 时会暂停，允许你修改这个 commit。")]),t._v(" "),a("li",[t._v("squash：选中，会将当前 commit 与上一个 commit 合并。")]),t._v(" "),a("li",[t._v("fixup：与 squash 相同，但不会保存当前 commit 的提交信息。")]),t._v(" "),a("li",[t._v("exec：执行其他 shell 命令。")])]),t._v(" "),a("p",[t._v("有了交互页面，我们就能手动对这些 commit 进行合并、删除了。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并最后 5 个 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~5\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"优化提交流水线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化提交流水线"}},[t._v("#")]),t._v(" 优化提交流水线")]),t._v(" "),a("p",[t._v("在 git 中有一个重要的概念：流水线。")]),t._v(" "),a("p",[t._v("我们可以把 git 中的每一个分支想象成一条流水线。每一次 commit 都会在流水线上产生一个记录，流水线的头部指向最新的 commit。不同的分支控制着不同的流水线，可以通过 git merge 或者 git rebase 将流水线合并在一起。")]),t._v(" "),a("p",[t._v("git rebase 和 git merge 都可以用来合并分支，但合并方式不相同。")]),t._v(" "),a("ul",[a("li",[t._v("git merge 是将要合并的分支流水线和当前分支流水线汇合成后一条新的流水线。")]),t._v(" "),a("li",[t._v("git rebase 是将要合并的分支流水线，直接接到当前分支的流水线上。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"devops-git-rebase.jpg",alt:"git rebase img"}})]),t._v(" "),a("p",[t._v("图中可以看到，git rebase 过后的分支是一条流水线，而 git merge 会是两条流水线汇合成成一条。")]),t._v(" "),a("p",[t._v("我们要怎么选择用 merge 还是 rebase ？")]),t._v(" "),a("ul",[a("li",[t._v("下游分支更新上游分支内容的时候使用 rebase")]),t._v(" "),a("li",[t._v("上游分支合并下游分支内容的时候使用 merge")]),t._v(" "),a("li",[t._v("更新当前分支的内容时一定要使用 --rebase 参数")])]),t._v(" "),a("p",[t._v("例如：上游分支 master，基于 master 分支拉出来一个开发分支 dev，在 dev 上开发了一段时间后要把 master 分支提交的新内容更新到 dev 分支，此时切换到 dev 分支，使用 git rebase master。")]),t._v(" "),a("p",[t._v("等 dev 分支开发完成了之后，要合并到上游分支 master 上的时候，切换到 master 分支，使用 git merge dev。")]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000005937408",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Rebase 原理以及黄金准则详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/kidsitcn/p/5339382.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git rebase vs merge 详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 使用规范流程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34197548",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 使用 rebase 和 merge 的正确姿势"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);