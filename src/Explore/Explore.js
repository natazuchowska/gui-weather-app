import "./Explore.css";

const Explore = ({ data }) => {

    const temp = data.main.temp;
    // const temp = -1;
    // console.log(temp);

    switch(true) {
        case (temp<0):
            return (
                <>
                    <header className="crops-title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg">
                            <div className="name">
                                <p className="veg-name">Leek</p>
                                <i className="latin">Allium porrum</i>
                            </div>
                            <img alt="leek" className='veg-img' src="./icons/leek.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p className="veg-name">Turnip</p>
                                <i className="latin">Brassica rapa</i>
                            </div>
                            <img alt="turnip" className='veg-img' src="./icons/turnip.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Kale</p>
                                <i className="latin">Brassica oleracea</i>
                            </div>
                            <img alt="kale" className='veg-img' src="./icons/kale.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Collard greens</p>
                                <i className="latin">Acephala</i>
                            </div>
                            <img alt="collard greens" className='veg-img' src="./icons/lettuce.png"></img>
                        </div>
                    </div>
                </>
            );
        case(temp>=0 && temp<10):
            return (
                <>
                    <header className="crops-title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg">
                            <div className="name">
                                <p>Spinach</p>
                                <i className="latin">Spinacia oleracea</i>
                            </div>
                            <img alt="spinach" className='veg-img' src="./icons/spinach.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Sugar beat</p>
                                <i className="latin">Beta vulgaris</i>
                            </div>
                            <img alt="sugar beat" className='veg-img' src="./icons/beetroot.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Broccoli</p>
                                <i className="latin">Brassica oleracea</i>
                            </div>
                            <img alt="broccoli" className='veg-img' src="./icons/broccoli.png"></img></div>
                        <div className="veg">
                            <div className="name">
                                <p>Carrots</p>
                                <i className="latin">Daucus carota </i>
                            </div>
                            <img alt="carrots" className='veg-img' src="./icons/carrots.png"></img>
                        </div>
                    </div>
                </>
            );
        case(temp>=10 && temp<20):
            return (
                <>
                    <header className="crops-title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg">
                            <div className="name">
                                <p className="veg-name">Soybeans</p>
                                <i className="latin">Glycine max</i>
                            </div>
                            <img alt="soybeans" className='veg-img' src="./icons/soybean.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p className="veg-name">Sunflower</p>
                                <i className="latin">Helianthus annuus</i>
                            </div>
                            <img alt="sunflower" className='veg-img' src="./icons/sunflower.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p className="veg-name">Cucumber</p>
                                <i className="latin">Cucumis sativus</i>
                            </div>
                            <img alt="cucumber" className='veg-img' src="./icons/cucumber.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p className="veg-name">Sweetcorn</p>
                                <i className="latin">Zea mays</i>
                            </div>
                            <img alt="sweetcorn" className='veg-img' src="./icons/corn.png"></img>
                        </div>
                    </div>
                </>
            );
        case(temp>=20 && temp<30):
            return (
                <>
                    <header className="crops-title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg">
                            <div className="name">
                                <p>Coffee</p>
                                <i className="latin">Coffea</i>
                            </div>
                            <img alt="dry beans" className='veg-img' src="./icons/coffee-beans.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Watermelon</p>
                                <i className="latin">Citrullus lanatus</i>
                            </div>
                            <img alt="watermelon" className='veg-img' src="./icons/watermelon.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Pepper</p>
                                <i className="latin">Capsicum annuum</i>
                            </div>
                            <img alt="pepper" className='veg-img' src="./icons/bell-pepper.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Okra</p>
                                <i className="latin">Abelmoschus esculentus</i>
                            </div>
                            <img alt="okra" className='veg-img' src="./icons/okra.png"></img>
                        </div>
                    </div>
                </>
            );
        case(temp>30):
            return (
                <>
                    <header className="crops-title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg">
                            <div className="name">
                                <p>Rice</p>
                                <i className="latin">Oryza sativa</i>
                            </div>
                            <img alt="rice" className='veg-img' src="./icons/rice.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Aubergine</p>
                                <i className="latin">Solanum melongena</i>
                            </div>
                            <img alt="eggplant" className='veg-img' src="./icons/eggplant.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Courgette</p>
                                <i className="latin">Cucurbita pepo</i>
                            </div>
                            <img alt="courgette" className='veg-img' src="./icons/zucchini.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Sorghum</p>
                                <i className="latin">Poaceae</i>
                            </div>
                            <img alt="sorghum" className='veg-img' src="./icons/sorghum.png"></img>
                        </div>
                    </div>
                </>
            );
        default:
            return (
                <>
                    <header className="crops-title">Crops suitable for the weather</header>
                    <div className="box">
                        <div className="veg">
                            <div className="name">
                                <p>Leek</p>
                                <i className="latin">Allium porrum</i>
                            </div>
                            <img alt="leek" className='veg-img' src="./icons/leek.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Turnip</p>
                                <i className="latin">Brassica rapa</i>
                            </div>
                            <img alt="turnip" className='veg-img' src="./icons/turnip.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Kale</p>
                                <i className="latin">Brassica oleracea</i>
                            </div>
                            <img alt="kale" className='veg-img' src="./icons/kale.png"></img>
                        </div>
                        <div className="veg">
                            <div className="name">
                                <p>Collard greens</p>
                                <i className="latin">Acephala</i>
                            </div>
                            <img alt="collard greens" className='veg-img' src="./icons/lettuce.png"></img>
                        </div>
                    </div>
                </>
            );
    }
};
export default Explore;