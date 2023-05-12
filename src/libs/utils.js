describe('utils', function () {
  it('create random string', function () {
    const randomString = () => Math.random()
      .toString(36)
      .slice(2);

    let r1 = randomString();
    console.log(r1);
  });

  it('camel case', function () {
    const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
    let r = uppercaseWords('hello world'); // 'Hello World'
    console.log(r);
  });

  it('to a camel case', function () {
    const toCamelCase = (str) => str.trim()
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
    toCamelCase('background-color'); // backgroundColor
    toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
    toCamelCase('_hello_world'); // HelloWorld
    toCamelCase('hello_world'); // helloWorld
  });

  it('renmove dups', function () {
    const removeDuplicates = (arr) => [...new Set(arr)];
    console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));
  });

  it('flat map', function () {
    const flat = (arr) =>
      [].concat.apply(
        [],
        arr.map((a) => (Array.isArray(a) ? flat(a) : a))
      );
    const flat1 = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);
    flat1(['cat', ['lion', 'tiger']]); // ['cat', 'lion', 'tiger']

  });

  it('average array', function () {
    const average = (...args) => args.reduce((a, b) => a + b) / args.length;
    average(1, 2, 3, 4, 5);   // 3
  });

  it('find days between two date', function () {
    const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
    diffDays(new Date('2021-11-3'), new Date('2022-2-1'));  // 90
  });

  it('find the th day', function (){
    const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    dayOfYear(new Date()) // 74
  })

  it('stop for a while', function (){
    const pause = (millis) => new Promise(resolve => setTimeout(resolve, millis))
    const fn = async () => {
      await pause(1000)
      console.log('fatfish') // 1s later
    }
    fn()
  });
});
