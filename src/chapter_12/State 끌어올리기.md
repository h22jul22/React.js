### State 끌어올리기

-   Shared State
    -   자식 컴포넌트들이 부모 컴포넌트와 공통된 state에 있는 데이터를 사용해야 하는 경우, 부모 컴포넌트의 state를 공유하여 사용하는 것
-   state 끌어올리기 (lifting state up)

    -   자식 컴포넌트에서 개별적으로 상태를 관리하지 않고, 부모 컴포넌트에서 상태를 관리하여 자식 컴포넌트 간의 값을 공유하고 연산 결과를 표시
    -   이 구조를 사용하면 부모 컴포넌트가 상태를 일괄적으로 관리할 수 있어, 여러 자식 컴포넌트가 상태를 공유하거나 협력해야 할 때 유용

    ```jsx
    import React, { useState } from 'react';

    function ParentComponent() {
        const [value1, setValue1] = useState(0);
        const [value2, setValue2] = useState(0);

        const handleValue1Change = (newValue) => setValue1(newValue);
        const handleValue2Change = (newValue) => setValue2(newValue);

        return (
            <div>
                <h1>State Lifting Example</h1>
                <ChildComponent label='Value 1' value={value1} onValueChange={handleValue1Change} />
                <ChildComponent label='Value 2' value={value2} onValueChange={handleValue2Change} />
                <h2>Sum: {value1 + value2}</h2>
            </div>
        );
    }

    function ChildComponent({ label, value, onValueChange }) {
        const handleInputChange = (e) => {
            const newValue = parseInt(e.target.value, 10) || 0;
            onValueChange(newValue);
        };

        return (
            <div>
                <label>
                    {label}: <input type='number' value={value} onChange={handleInputChange} />
                </label>
            </div>
        );
    }

    export default ParentComponent;
    ```
