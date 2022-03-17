import { createReactive } from '../../utils';

const template = `
<ul class="list">
  <h1>{{ title }}</h1>
  {{ dateTime }}
  <for data="list" tag="li" class=item">
    <span>Name: { name }</span>
    <span>age: { age }</span>
  </for>
</ul>
`;


function TestB() {
  const state = createReactive({
    title: 'TestB',
    dateTime: new Date().toLocaleString(),
    list: [
      { id: 1, name: '小明', age: 26 },
      { id: 2, name: '小红', age: 28 },
      { id: 3, name: '小李', age: 30 },
    ]
  });
  return [template, state];
}

export default TestB