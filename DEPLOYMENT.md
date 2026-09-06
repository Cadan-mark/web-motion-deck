# Web Motion Deck GitHub Pages 部署说明

## 一、部署目标

本说明用于将静态项目 **Web Motion Deck** 发布到 **GitHub Pages**，使教师、评委或访客可以通过浏览器直接在线访问作品展示页面。

最终部署完成后，页面访问地址格式为：

```text
https://你的用户名.github.io/web-motion-deck/
```

## 二、部署前需要准备的仓库文件

本次仓库完善改动主要补充文档与 `.nojekyll`，并不代表当前仓库已经包含完整页面源码。

在你准备发布完整静态作品时，请确保仓库根目录至少包含以下文件：

- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `LICENSE`
- `DEPLOYMENT.md`
- `.nojekyll`

其中：

- `index.html`：页面入口文件
- `style.css`：样式文件
- `script.js`：交互逻辑文件
- `README.md`：项目说明文档
- `LICENSE`：开源许可证
- `DEPLOYMENT.md`：部署说明文档
- `.nojekyll`：让 GitHub Pages 直接按静态文件方式提供服务

## 三、创建 GitHub 仓库

1. 登录 GitHub 账号
2. 点击右上角 **New repository**
3. 仓库名称填写：

```text
web-motion-deck
```

4. 可选择公开仓库，便于教师或评委访问
5. 点击 **Create repository** 完成创建

## 四、通过 GitHub 网页界面上传文件

如果你暂时不使用命令行，可以直接通过 GitHub 网页上传：

1. 进入刚创建好的 `web-motion-deck` 仓库页面
2. 点击 **Add file**
3. 选择 **Upload files**
4. 将以下文件拖入页面或手动选择上传：
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `LICENSE`
   - `DEPLOYMENT.md`
   - `.nojekyll`
5. 填写提交说明，例如：

```text
Initial project upload
```

6. 点击 **Commit changes**

## 五、通过 Git 命令上传文件

如果你希望使用本地开发方式，可以使用以下 Git 命令：

```bash
git init
git branch -M main
git remote add origin https://github.com/你的用户名/web-motion-deck.git
git add .
git commit -m "Initial project upload"
git push -u origin main
```

如果仓库已经存在并且已关联远程地址，可使用：

```bash
git add .
git commit -m "Update project files"
git push
```

## 六、启用 GitHub Pages

1. 打开仓库页面
2. 进入 **Settings → Pages**
3. 在 **Build and deployment** 中选择：
   - **Source**：`Deploy from a branch`
   - **Branch**：`main`
   - **Folder**：`/ (root)`（即仓库根目录）
4. 点击 **Save**

保存后，GitHub 会开始部署静态页面。

## 七、部署完成后的访问地址

部署成功后，作品在线地址格式如下：

```text
https://你的用户名.github.io/web-motion-deck/
```

例如本项目的目标展示地址可写为：

```text
https://Cadan-mark.github.io/web-motion-deck/
```

## 八、部署后检查清单

部署完成后，建议逐项检查：

- [ ] 页面可以正常打开
- [ ] 样式可以正常加载
- [ ] JavaScript 交互可以正常工作
- [ ] 明暗主题切换正常
- [ ] 动效开关功能正常
- [ ] 全屏展示功能正常
- [ ] 移动端滑动切换正常
- [ ] `README.md` 中的相关链接已经更新正确

## 九、常见问题排查

### 1. 页面没有样式

可能原因：

- `style.css` 路径写错
- 文件名大小写不一致
- CSS 文件没有上传到仓库根目录

建议检查：

- `index.html` 中的 `<link>` 引用路径
- 仓库中是否真实存在 `style.css`
- GitHub Pages 部署目录是否正确

### 2. 页面没有 JavaScript 交互

可能原因：

- `script.js` 路径错误
- JavaScript 文件未上传
- 页面脚本加载顺序不正确

建议检查：

- `index.html` 中 `<script>` 的引用路径
- 浏览器开发者工具是否有报错
- `script.js` 是否已成功推送到 `main` 分支

### 3. GitHub Pages 出现 404

可能原因：

- GitHub Pages 尚未启用
- 仓库名不是 `web-motion-deck`
- `index.html` 不在根目录
- 部署分支或目录配置错误

建议检查：

- `Settings → Pages` 是否已保存成功
- 分支是否为 `main`
- 文件夹是否选择 `/ (root)`
- 仓库根目录是否存在 `index.html`

### 4. 页面更新后没有立即生效

可能原因：

- GitHub Pages 部署存在缓存或延迟
- 最新提交尚未完成部署

建议处理：

- 等待几分钟后再刷新页面
- 强制刷新浏览器缓存
- 回到 **Settings → Pages** 查看部署状态

## 十、可直接提交给教师或评委的说明文本

可复制以下内容作为提交说明：

```text
作品名称：Web Motion Deck
项目简介：基于原生 HTML、CSS、JavaScript 开发的 Web 视觉交互展示作品，包含 HTML Slides、页面转场、微交互、明暗主题、动效开关与响应式布局等功能。
在线演示链接：https://你的用户名.github.io/web-motion-deck/
源码仓库链接：https://github.com/你的用户名/web-motion-deck
```

如果使用当前仓库信息，也可以替换为：

```text
作品名称：Web Motion Deck
项目简介：基于原生 HTML、CSS、JavaScript 开发的 Web 视觉交互展示作品，包含 HTML Slides、页面转场、微交互、明暗主题、动效开关与响应式布局等功能。
在线演示链接：https://Cadan-mark.github.io/web-motion-deck/
源码仓库链接：https://github.com/Cadan-mark/web-motion-deck
```

## 十一、后续维护建议

- 增加作品预览图，提升仓库展示效果
- 继续扩展更多展示页或内容模块
- 补充演示视频，方便教师快速了解交互效果
- 添加开发过程截图，增强课程设计材料完整性
- 使用 GitHub Releases 管理重要版本成果
