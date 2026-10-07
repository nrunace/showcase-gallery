import {useState, useMemo} from "react";
import ProductGrid from "../components/ProductGrid";
import ProductModal from "../components/ProductModal";

function GalleryPage({ products, loading }){
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    // filter & sort para sa bonus points
    const filteredAndSortedProducts = useMemo(() => {
        if (!products) return [];

        // filter
        let processed = products.filter((product) => {
            const productName = (product.name || product.title || "").toLowerCase();
            return productName.includes(searchTerm.toLowerCase());
        });

        // sort
        if (sortOrder === "asc") {
            processed.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "desc") {
            processed.sort((a, b) => b.price - a.price);
        }

        return processed;
    }, [products, searchTerm, sortOrder]);

    return (
        <main className="mx-auto max-w-6xl px-6 py-10">
            <section className="relative mb-10 overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-violet-600 to cyan-500 p-10 text-white shadow-xl md:p-14">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"/>
                
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Product Gallery</p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">Discover Our Products</h2>
                <p className="mt-3 text-white/80">
                    {products.length} items available • By Natalie Quinto
                </p>
            </section>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:max-w-md"
                />

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                    <option value="">Sort by: Featured</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

            {loading ? (
                <p className="py-20 text-center text-slate-400">Loading products...</p>
            ):(
                <ProductGrid 
                    products={filteredAndSortedProducts} 
                    onProductClick={setSelectedProduct}
                />
            )}

            <ProductModal 
                product={selectedProduct} 
                isOpen={!!selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
            />
        </main>
    );
}
export default GalleryPage;