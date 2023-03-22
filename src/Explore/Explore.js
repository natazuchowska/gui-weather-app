import "./Explore.css";

const Explore = ({ data }) => {

    const temp = data.main.temp;
    // const temp = -1;
    // console.log(temp);

    switch(true) {
        case (temp<0):
            return (
                <div className="box">
                    <div className="veg"><p>leek</p><img alt="leek" className='veg-img' src="./icons/leek.png"></img></div>
                    <div className="veg"><p>turnip</p><img alt="turnip" className='veg-img' src="./icons/turnip.png"></img></div>
                    <div className="veg"><p>kale</p><img alt="kale" className='veg-img' src="./icons/kale.png"></img></div>
                    <div className="veg"><p>collard greens</p><img alt="collard greens" className='veg-img' src="./icons/lettuce.png"></img></div>
                </div>
            );
        case(temp>=0 && temp<10):
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg"><p>spring canola</p><img alt="spring canola" className='veg-img' src="./icons/soybean.png"></img></div>
                        <div className="veg"><p>sugar beat</p><img alt="sugar beat" className='veg-img' src="./icons/beetroot.png"></img></div>
                        <div className="veg"><p>broccoli</p><img alt="broccoli" className='veg-img' src="./icons/broccoli.png"></img></div>
                        <div className="veg"><p>carrots</p><img alt="carrots" className='veg-img' src="./icons/carrots.png"></img></div>
                    </div>
                </>
            );
        case(temp>=10 && temp<20):
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg"><p>soybeans</p><img alt="soybeans" className='veg-img' src="./icons/soybean.png"></img></div>
                        <div className="veg"><p>sunflower</p><img alt="sunflower" className='veg-img' src="./icons/sunflower.png"></img></div>
                        <div className="veg"><p>cucumber</p><img alt="cucumber" className='veg-img' src="./icons/cucumber.png"></img></div>
                        <div className="veg"><p>sweetcorn</p><img alt="sweetcorn" className='veg-img' src="./icons/corn.png"></img></div>
                    </div>
                </>
            );
        case(temp>=20 && temp<30):
            return (
                <>
                    <header className="title">Crops suitable to grow in {temp}0C</header>
                    <div className="box">
                        <div className="veg"><p>dry beans</p><img alt="dry beans" className='veg-img' src="./icons/coffee-beans.png"></img></div>
                        <div className="veg"><p>watermelon</p><img alt="watermelon" className='veg-img' src="./icons/watermelon.png"></img></div>
                        <div className="veg"><p>pepper</p><img alt="pepper" className='veg-img' src="./icons/bell-pepper.png"></img></div>
                        <div className="veg"><p>okra</p><img alt="okra" className='veg-img' src="./icons/okra.png"></img></div>
                    </div>
                </>
            );
        case(temp>30):
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg"><p>rice</p><img alt="rice" className='veg-img' src="./icons/rice.png"></img></div>
                        <div className="veg"><p>eggplant</p><img alt="eggplant" className='veg-img' src="./icons/eggplant.png"></img></div>
                        <div className="veg"><p>courgette</p><img alt="courgette" className='veg-img' src="./icons/zucchini.png"></img></div>
                        <div className="veg"><p>sorghum</p><img alt="sorghum" className='veg-img' src="./icons/sorghum.png"></img></div>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <header className="title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg"><p>spring canola</p><img alt="spring canola" className='veg-img' src="./icons/soybean.png"></img></div>
                        <div className="veg"><p>sugar beat</p><img alt="sugar beat" className='veg-img' src="./icons/beetroot.png"></img></div>
                        <div className="veg"><p>broccoli</p><img alt="broccoli" className='veg-img' src="./icons/broccoli.png"></img></div>
                        <div className="veg"><p>carrots</p><img alt="carrots" className='veg-img' src="./icons/carrots.png"></img></div>
                    </div>
                </>
            );
    }
};
export default Explore;