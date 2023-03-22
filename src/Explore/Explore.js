import "./Explore.css";

const Explore = ({ data }) => {

    const temp = data.main.temp;
    // const temp = -1;
    // console.log(temp);

    switch(true) {
        case (temp<0):
            return (
                <div className="box">
                    <p className="veg">leek</p>
                    <p className="veg">turnip</p>
                    <p className="veg">kale</p>
                    <p className="veg">collard greens</p>
                </div>
            );
        case(temp>=0 && temp<10):
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <p className="veg">spring canola</p>
                        <p className="veg">sugar beat</p>
                        <p className="veg">broccoli</p>
                        <p className="veg">carrots</p>
                    </div>
                </>
            );
        case(temp>=10 && temp<20):
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <div><p className="veg">soybeans</p></div>
                        <div><p className="veg">sunflower</p><img alt="sunflower" className='profile-img' src="./icons/sunflower.png"></img></div>
                        <div><p className="veg">cucumber</p></div>
                        <div><p className="veg">sweetcorn</p></div>
                    </div>
                </>
            );
        case(temp>=20 && temp<30):
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <p className="veg">dry beans</p>
                        <p className="veg">watermelon</p>
                        <p className="veg">pepper</p>
                        <p className="veg">okra</p>
                    </div>
                </>
            );
        case(temp>30):
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <p className="veg">rice</p>
                        <p className="veg">eggplant</p>
                        <p className="veg">courgette</p>
                        <p className="veg">sorghum</p>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <p className="veg">spring canola</p>
                        <p className="veg">sugar beat</p>
                        <p className="veg">millet</p>
                        <p className="veg">sweetcorn</p>
                    </div>
                </>
            );
    }
};
export default Explore;