# v-for

- 调用 `createApp` 传入 { `components: [TestA,TestB]` }

- `createApp` 对传入的参数进行遍历,如果有`components`属性，则调用`initComponent`方法对`components`的内容进行遍历

- `initComponent` 对传入的`components`进行遍历，期中每一项是一个函数，调用该函数，并且把`template`和`data`解构出来

- 将解构出的`template`和`state`传入`compileTemplate`方法，并且返回一个`node`节点,并且添加到 dom 池中

- `compileTemplate` **返回处理好的 Node 节点**

  - replaceVar 先将 template 中含有双大括号的变量替换成对应的值
  - 创建一个`div`节点，并且把 template 字符串赋值为 innerHtml
  - 调用`compileNode`方法，并且传入`div`节点和`data`数据，并且返回一个`node`节点
  - `compileNode`将传入的节点中所有的节点通过`querySelectorAll`方法获取,并且循环获取对应的节点的`tagName`如果`tagName`在规定好的`customTags`中,则调用`replaceNode`方法传入节点，标签名和数据，最后返回所有处理好的**节点**

- `replaceNode`获得节点上`data`,`tag`属性中的内容,并且获得`class`的名称
  - 判断`tag`如果是 for 的话,将`节点，数据，数据名，标签名，真实节点名`传入`vfor`
  - `vfor`函数中
    - 创建了一个虚拟的`oFrag`节点
    - 遍历数据，并且使用传入的真实节点名创建元素，赋值 class 名，将 innerHtml 设置为当前节点子元素替换变量之后的内容，并且添加到`oFrag`节点中
    - 使用`oFrag`节点替换`node`节点

## TestA & TestB

- 返回一个 html 模板和响应式处理后的数据


## Tip

- replace 方法中第二个参数是函数的状况 参数为 匹配的内容 括号中匹配的内容 匹配到的字符串的索引 偏移量
