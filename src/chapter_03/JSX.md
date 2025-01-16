### JSX (A syntax extension to JavaScript)

-   JavaScript와 XML/HTML을 합친 것.
-   JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환하는 과정을 거치게됨.
    -   실제로 JSX로 코드를 작성해도 최종적으로는 자바스크립트 코드가 나오는 것.
-   리액트에서 JSX 문법을 사용하면 내부적으로 모두 createElement라는 함수를 사용하도록 변환됨.
    -   최종적으로는 이 createElement() 함수를 호출한 결과로 자바스크립트 객체가 나오게됨.
    ```jsx
    const element = <h1 className='greeting'>Hello, world!</h1>;

    const element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

    const element = React.createElement(type, [props], [...children]);
    ```
-   장점:
    -   코드가 간결해지고 가독성이 향상됨.
    -   Injection Attack을 방어함으로써 보안성이 올라감.
