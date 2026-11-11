import React, { useState } from 'react';
import './style.css';

const initialProducts = [
  { id: 1, name: '  PRO GAMING KEYBOARD  ', price: 129, inStock: true },
  { id: 2, name: '  precision mouse  ', price: 59, inStock: false },
  { id: 3, name: '  curved gaming monitor  ', price: 399, inStock: true },
  { id: 4, name: '  mechanical numpad  ', price: 45, inStock: true },
];

// --- FP WORKHORSES: Composition ---
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const normalise = (s) => s.trim().toLowerCase();
const capitalise = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const truncate = (n) => (s) => s.length > n ? s.slice(0, n) + '…' : s;

const formatName = pipe(normalise, truncate(18), capitalise);

export default function App() {
  const [products] = useState(initialProducts);
  const [onlyInStock, setOnlyInStock] = useState(false);

  // FP WORKHORSE: Filter
  const filtered = onlyInStock ? products.filter(p => p.inStock) : products;

  // FP WORKHORSE: Reduce
  const totalCost = filtered.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className="shop-container">
      <header className="header">
        <h1>TechGear Shop</h1>
        <p>Functional Programming Demo (CO-2)</p>
      </header>

      <section className="summary-card">
        <div className="stats-grid">
          <div className="stat-box">
            <h4>Items Count</h4>
            <p>{filtered.length}</p>
          </div>
          <div className="stat-box">
            <h4>Total Value</h4>
            <p>${totalCost}</p>
          </div>
        </div>

        <div className="filter-section" onClick={() => setOnlyInStock(!onlyInStock)}>
          <input type="checkbox" checked={onlyInStock} readOnly />
          <span>Show available items only (Filter logic)</span>
        </div>
      </section>

      <section className="product-grid">
        {/* FP WORKHORSE: Map */}
        {filtered.map(p => (
          <div key={p.id} className="product-item">
            <div className="product-info">
              <h3>{formatName(p.name)}</h3>
              <span className={p.inStock ? 'in-stock' : 'out-of-stock'}>
                {p.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <div className="price-tag">${p.price}</div>
          </div>
        ))}
      </section>
    </div>
  );
}