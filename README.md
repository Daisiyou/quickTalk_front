```
<router-link to="/">Home</router-link>
<a href="/"> Home</a>
区别，router-link不对刷新界面， <a>会刷新界面
```

```
npm, yarn查看源和换源：
npm config get registry  // 查看npm当前镜像源
npm config set registry https://registry.npm.taobao.org/  // 设置npm镜像源为淘宝镜像
yarn config get registry  // 查看yarn当前镜像源
yarn config set registry https://registry.npm.taobao.org/  // 设置yarn镜像源为淘宝镜像
镜像源地址部分如下：
npm --- https://registry.npmjs.org/
cnpm --- https://r.cnpmjs.org/
taobao --- https://registry.npm.taobao.org/
nj --- https://registry.nodejitsu.com/
rednpm --- https://registry.mirror.cqupt.edu.cn/
npmMirror --- https://skimdb.npmjs.com/registry/
deunpm --- http://registry.enpmjs.org/

```

###component props

```
example:

props: {
    title:{
      type:String,
      required:true,
      default:"this is title",
    }
}

类型检查 (type)
String
Number
Boolean
Array
Object
Date
Function
Symbol

```



# quickTalk_front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
