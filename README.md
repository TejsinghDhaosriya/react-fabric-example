
## About

This mini app using fabric and reactjs hooks was bootstrapped with create-react-app boilerplate.

### Possible changes:

#### 1

``
            <select onChange={handleChange}>
                <option key="?" value={null}>Select..</option>
                <option key="rect" value="rect">Rectangle</option>
                <option key="triangle" value="triangle">Triangle</option>
                <option key="circle" value="circle">Circle</option>
            </select>
``
            

To

``
             <select onChange={event => setSelectValue(event.target.value)} value={selectValue}>
                {options.map(item => (
                    <option key={item.value} value={item.value}>
                        {item.name}
                    </option>
                ))}
            </select> 
``

> The reason I went with the first option was because the useState hook was causing rerenders thus rerendering
> canvas in the same time

#### 2

Making it modulars via functional components.

#### 3

Adding CSS to make it more appealing to the eye.

#### 4

Adding a clear all button.

