import { createReactive } from '../../utils';

const template = `
<ul class="list">
  <h1>{{ title }}</h1>
  {{ dateTime }}
  <for data="list" tag="li" class=item">
    <span>姓名: { name }</span>
    <span>年龄: { age }</span>
  </for>
</ul>
`;


function TestA() {
  const state = createReactive({
    title: 'TestA',
    dateTime: new Date().toLocaleString(),
    list: [
      { id: 1, name: '张三', age: 18 },
      { id: 2, name: '李四', age: 20 },
      { id: 3, name: '王五', age: 22 },
    ]
  });
  return [template, state];
}

export default TestA