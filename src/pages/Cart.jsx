export default function Cart () {
    return (
        <>
        <section className="container">
            <div>
                <table className="border-collapse border border-slate-500 table-auto w-full text-center">
                    <thead>
                        <tr>
                            <th className="border border-slate-600">Images</th>
                            <th className="border border-slate-600">Product</th>
                            <th className="border border-slate-600">Unit Price</th>
                            <th className="border border-slate-600">Quantity</th>
                            <th className="border border-slate-600">Total</th>
                            <th className="border border-slate-600">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-600">1</td>
                            <td className="border border-slate-600">2</td>
                            <td className="border border-slate-600">3</td>
                            <td className="border border-slate-600">4</td>
                            <td className="border border-slate-600">5</td>
                            <td className="border border-slate-600">6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        </>
    )
}