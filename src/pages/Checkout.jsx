export default function Checkout () {
    return (
        <>
            <section className="container flex">
                <div className="flex-1 px-40">
                    <h1 className="font-bold text-2xl">
                        Billing Details
                    </h1>

                    <br />
                    <br />

                    <h2 className="py-2">Country</h2>
                    <input className="placeholder:italic placeholder:text-slate-400  border border-slate-600" placeholder="Ex: Indonesia" type="text" />

                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className="py-2" >First Name</h2>
                            <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="First Name" type="text" />
                        </div>
                        <div>
                            <h2 className="py-2">Last Name</h2>
                            <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="Last Name" type="text"/>
                        </div>
                    </div>
                   
                    <h2 className="py-2">Company Name</h2>
                    <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="Ex: LTD" type="text" />

                    <h2 className="py-2">Address</h2>
                    <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="Street Address" type="text" />

                    <h2 className="py-2">Town/City</h2>
                    <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="Town/City" type="text" />

                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className="py-2">State/Country</h2>
                            <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="State/Country" type="text" />
                        </div>
                        <div>
                            <h2 className="py-2">Post Code/Zip</h2>
                            <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="Post Code/Zip" type="text" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className="py-2">Email Address</h2>
                            <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="Your Email" type="email" />
                        </div>
                        <div>
                            <h2 className="py-2">Phone</h2>
                            <input className="placeholder:italic placeholder:text-slate-400 border border-slate-600" placeholder="Phone Number" type="text" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-40">
                    <h1 className="font-bold text-2xl">Your Order</h1>
                    <br />
                    <br />

                    <div className="grid grid-cols-2">
                        <div>
                            <h2>Product</h2>
                            <br />
                            <h2>placeholder</h2>
                            <br />
                            <h2>Cart sub total</h2>
                            <br />
                            <h2>Shipping</h2>
                            <br />
                            <h2>Order total</h2>
                        </div>
                        <div>
                            <h2>Total</h2>
                            <br />
                            <h2>placeholder</h2>
                            <br />
                            <h2>placeholder</h2>
                            <br />
                            <h2>placeholder</h2>
                            <br />
                            <h2>placeholder</h2>
                        </div>
                    </div>
                    <br />
                    <br />

                    <button className="">Place Order</button>
                    
                </div>
            </section>
        </>
    )
}