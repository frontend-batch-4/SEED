import Sportshoe from "../assets/images/sport-shoe.jpg";

export default function Product () {
    return (
        <>
            <section className="container flex gap-4 my-16">
                <div>
                    <img src={Sportshoe} alt="" />
                </div>
                <div>
                    <h1>Niike sport shoe</h1>
                    <br />
                    <h1>$100,00</h1>
                    <br />
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sapiente rerum libero expedita dolorum, asperiores modi iure minus, incidunt inventore et sequi mollitia aperiam nostrum ratione consequuntur cupiditate, aliquam totam!</h2>
                    <br />
                    <h2>Size</h2>
                    <input className="border-4" type="text" />
                    <br />
                    <h2>Color</h2>
                    <input className="border-4" type="text" />
                    <br />
                    <br />
                    <h2>QTY <input className="border-4" type="text"/> <button className="border-4 px-2">Add to cart</button> </h2>
                </div>
            </section>
            <section className="container text-center">
                <div>
                    <h1>Description</h1>
                    <br />
                    <br />
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. At et voluptate iusto sunt error omnis, dolorum placeat dignissimos nesciunt ducimus, quod ratione autem vel doloribus sequi. Quos quam atque quisquam.</h2>
                    <ul className="list-none">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>At et voluptate iusto sunt error omnis, dolorum placeat dignissimos nesciunt ducimus, quod ratione autem vel doloribus sequi.</li>
                        <li>Quos quam atque quisquam.</li>

                    </ul>
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis architecto consequuntur voluptas illum dolorem, cumque odio mollitia molestiae eius, tenetur minima praesentium quasi veritatis laboriosam amet harum inventore atque laudantium.</h2>
                </div>
            </section>
        </>
    );
};