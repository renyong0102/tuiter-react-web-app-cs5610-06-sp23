// In React.js, the styles attribute does not accept a string; instead it accepts a JSON object where the properties
// are CSS properties and the values are CSS values.
// 2.11 Working with the HTML style attribute
const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }
    const bgBlue = {
        "background-color": "lightblue",
        "color": "black",
        ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        // using the spread operator ... allows us to merge the properties of multiple objects into a single object
        // without creating nested objects.
        ...colorBlack,
        ...padding10px
    };
    return(
        <div>
            <h1>Styles</h1>
            <div style={{"backgroundColor": "lightyellow",
                "color": "black", padding: "10px"}}>
                Yellow background</div>
            <div style={bgRed}>
                Red background</div>
            <div style={bgBlue}>
                Blue background</div>
        </div>
    );
};
export default Styles;
