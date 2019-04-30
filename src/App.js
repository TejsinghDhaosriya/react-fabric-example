import React, { useEffect } from 'react';
import { fabric } from 'fabric'

function App() {
    var rect, triangle, circle, canvas, selectValue
    useEffect(() => {
        canvas = new fabric.Canvas("c");
    }, []);
    const addShape = () => {
        rect = new fabric.Rect({
            originX: "left",
            left: 200,
            fill: 'red',
            width: 200,
            height: 200,
            angle: 45
        });
        triangle = new fabric.Triangle({
            width: 20, height: 30, fill: 'blue', left: 50, top: 50
        });
        circle = new fabric.Circle({
            radius: 20, fill: 'green', left: 100, top: 100
        });

        if (selectValue === "rect") {
            canvas.add(rect)
        } else if (selectValue === "triangle") {
            canvas.add(triangle)
        } else if (selectValue === "circle") {
            canvas.add(circle)
        }
    }

    const removeShape = () => {
        canvas.remove(canvas.getActiveObject())
        console.log(canvas.getObjects())
    }

    const handleChange = (event) => {
        selectValue = event.target.value
        console.log(selectValue);
    };

    return (
        <div className="App" >
            <select onChange={handleChange}>
                <option key="?" value={null}>Select..</option>
                <option key="rect" value="rect">Rectangle</option>
                <option key="triangle" value="triangle">Triangle</option>
                <option key="circle" value="circle">Circle</option>
            </select>
            <button onClick={addShape}>Add shape</button>
            <button onClick={removeShape}>Remove selected shape</button>
            <canvas
                id="c"
                width={600}
                height={400}
            />
        </div>
    );
}

export default App;
