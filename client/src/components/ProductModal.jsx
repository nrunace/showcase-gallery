function ProductModal({ product, isOpen, onClose }) {
    if (!isOpen || !product) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div 
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
        >
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2x border border-slate-100">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
                >
                    &times;
                </button>

                <div className="h-64 w-full bg-slate-100">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name || product.title}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                            No Image Available
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800">
                        {product.name || product.title}
                    </h3>
                    <p className="mt-2 text-xl font-bold text-indigo-600">
                        ₱{Number(product.price).toLocaleString()}
                    </p>
                    
                    <div className="mt-4">
                        <h4 className="text-sm font-semibold uppercase text-slate-400">Description</h4>
                        <p className="mt-1 text-slate-600 leading-relaxed">
                            {product.description || "No description available for this item."}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;