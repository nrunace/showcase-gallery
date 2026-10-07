import ProductCard from "./ProductCard"

function ProductGrid({ products, showActions = false, onEdit, onDelete, onProductClick }){
    if (products.length === 0){
        return (
            <div className="rounded-2xl border-2 border-dashed border-slate-300 py-20 text-center text-slate-400">
                No products yet.
            </div>
        )
    }

    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-[repeat(auto-fill, minmax(230px, 1fr))] gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                    showActions={showActions}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onClick={() => onProductClick && onProductClick(product)}
                />
            ))}
        </div>
    )
}

export default ProductGrid;