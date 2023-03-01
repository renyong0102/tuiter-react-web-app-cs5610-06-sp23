import './index.css';
// 2.10 Working with HTML classes
function Classes() {
    const color = 'blue';
    const dangerous1 = true;
    const dangerous2 = false;

    return (
        <div>
            {/*2.10 Working with HTML classes*/}
            {/*1*/}
            <h2>Classes</h2>
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                Yellow background
            </div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">
                Blue background
            </div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">
                Red background
            </div>
            <br/>
            {/*2*/}
            <h2>Classes</h2>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background
            </div>
            <br/>
            {/*3*/}
            <h2>Classes</h2>
            <div className={`${dangerous1 ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
            <div className={`${dangerous2 ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                Success background
            </div>


        </div>
    )
};
export default Classes;
