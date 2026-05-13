/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, ShoppingCart, Search, Menu, X, Plus, Minus, Trash2 } from 'lucide-react';
import { SITUATIONS, Situation, Product } from './constants';

interface CartItem extends Product {
  quantity: number;
}

const IkeaLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg" 
    alt="IKEA" 
    className="h-[36px] block w-auto"
    referrerPolicy="no-referrer"
  />
);

export default function App() {
  const [selectedSituation, setSelectedSituation] = useState<Situation | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Search logic
  const allProducts = useMemo(() => {
    const products: Product[] = [];
    const seenIds = new Set<string>();
    SITUATIONS.forEach(sit => {
      sit.recommendations.forEach(prod => {
        if (!seenIds.has(prod.id)) {
          products.push(prod);
          seenIds.add(prod.id);
        }
      });
    });
    return products;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allProducts]);

  const addToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: show some feedback or automatically open cart
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const handleSelectSituation = useCallback((situation: Situation) => {
    setSelectedSituation(situation);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = useCallback(() => {
    setSelectedSituation(null);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-ikea-yellow selection:text-ikea-blue">
      {/* Header */}
      <header className="h-[70px] z-50 bg-white border-b border-stone-200 px-10 flex items-center justify-between sticky top-0">
        <div className="flex items-center gap-10">
          <IkeaLogo />
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-[14px] font-bold">
          <button 
            onClick={() => window.open('https://www.ikea.com/es/es/ideas/', '_blank')}
            className="hover:underline underline-offset-4"
          >
            Inspiración
          </button>
          <button 
            onClick={() => window.open('https://www.ikea.com/es/es/cat/productos-products/', '_blank')}
            className="hover:underline underline-offset-4"
          >
            Productos
          </button>
          <button 
            onClick={() => window.open('https://www.ikea.com/es/es/offers/', '_blank')}
            className="hover:underline underline-offset-4"
          >
            Ofertas
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-stone-100 rounded-full px-4 py-2 w-64 focus-within:bg-stone-200 transition-colors">
            <Search className="w-4 h-4 text-stone-500 mr-2" />
            <input 
              type="text" 
              placeholder="¿Qué buscas?" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) setSelectedSituation(null);
              }}
              className="bg-transparent text-sm w-full outline-hidden"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')} 
                className="p-1 hover:bg-stone-300 rounded-full transition-colors flex-shrink-0"
                aria-label="Borrar búsqueda"
              >
                <X className="w-3 h-3 text-stone-500" />
              </button>
            )}
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-stone-100 rounded-full relative"
          >
            <ShoppingCart className="w-5 h-5 text-stone-900" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-ikea-blue text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-10 min-h-[60vh]">
        <AnimatePresence mode="wait">
          {searchQuery ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="border-b border-stone-200 pb-6">
                <h2 className="text-2xl font-bold">Resultados para "{searchQuery}"</h2>
                <p className="text-text-gray mt-1">{searchResults.length} productos encontrados</p>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {searchResults.map((product) => (
                    <motion.div 
                      key={product.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white group"
                    >
                      <div className="aspect-square bg-[#f5f5f5] rounded-[4px] overflow-hidden mb-4 relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply px-4"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-[14px] group-hover:underline uppercase leading-tight">{product.name}</h3>
                          <p className="text-[14px] text-text-gray mt-1 italic">{product.category}</p>
                          <p className="text-2xl font-bold mt-2">
                            {product.price}<span className="text-sm font-normal ml-0.5">€</span>
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={() => addToCart(product)}
                        className="mt-5 w-full bg-ikea-blue text-white font-bold py-3.5 px-6 rounded-full text-[14px] hover:bg-blue-800 transition-all transform active:scale-[0.98]"
                      >
                        Añadir al carrito
                      </button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <div className="bg-stone-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-stone-300" />
                  </div>
                  <h3 className="text-xl font-bold">Vaya, no hemos encontrado nada</h3>
                  <p className="text-stone-500 mt-2">Prueba con otros términos o explora nuestras categorías.</p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-8 text-ikea-blue font-bold hover:underline"
                  >
                    Ver todas las inspiraciones
                  </button>
                </div>
              )}
            </motion.div>
          ) : !selectedSituation ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <div className="mb-12">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[52px] font-bold tracking-[-1.5px] leading-[1] mb-3 text-ikea-blue"
                >
                  ¿Empiezas algo nuevo?
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-[18px] text-text-gray leading-normal max-w-[600px]"
                >
                  Estamos aquí para ayudarte. Cuéntanos en qué momento de tu vida te encuentras y diseñaremos el hogar perfecto para ti.
                </motion.p>
              </div>

              {/* Grid of Situations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {SITUATIONS.map((situation, index) => {
                  const Icon = situation.icon;
                  return (
                    <motion.button
                      key={situation.id}
                      id={`situation-card-${situation.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => handleSelectSituation(situation)}
                      className="group flex flex-col text-left bg-[#f9f9f9] border border-[#f5f5f5] p-5 rounded-[4px] hover:bg-white hover:border-ikea-blue transition-all duration-150 hover:shadow-[0_10px_20px_rgba(0,88,163,0.08)] cursor-pointer min-h-[160px]"
                    >
                      <div className="mb-3 p-1.5 bg-white rounded-full w-fit flex items-center justify-center border border-stone-100 group-hover:bg-ikea-yellow transition-colors duration-300">
                        <Icon className="w-4.5 h-4.5 text-ikea-blue" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-[15px] font-bold mb-1.5 group-hover:text-ikea-blue transition-colors">
                          {situation.title}
                        </h3>
                        <p className="text-[12px] text-text-gray leading-[1.4] line-clamp-2">
                          {situation.description}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Recommendations Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
                <div className="space-y-4">
                  <button 
                    onClick={handleBack}
                    className="flex items-center text-[13px] font-bold text-text-gray hover:text-text-dark transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Volver a situaciones
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-ikea-yellow rounded-full">
                      <selectedSituation.icon className="w-6 h-6 text-ikea-blue" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">{selectedSituation.title}</h2>
                  </div>
                </div>
                <p className="text-text-gray text-[15px] max-w-[400px]">
                   Hemos seleccionado estos productos exclusivamente para tu nueva etapa vital.
                </p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {selectedSituation.recommendations.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-square bg-[#f9f9f9] rounded-[4px] overflow-hidden mb-5 border border-[#f5f5f5] group-hover:border-stone-200 transition-colors">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-text-gray font-bold mb-1">
                          {product.category}
                        </p>
                        <h3 className="text-lg font-bold group-hover:text-ikea-blue transition-colors">{product.name}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold tracking-tight italic">
                          {product.price}<span className="text-[14px] font-bold not-italic ml-0.5">€</span>
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="mt-5 w-full bg-ikea-blue text-white font-bold py-3.5 px-6 rounded-full text-[14px] hover:bg-blue-800 transition-all transform active:scale-[0.98]"
                    >
                      Añadir al carrito
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* CTA Footer */}
              <div className="bg-[#f9f9f9] border border-[#f5f5f5] rounded-[4px] p-10 md:p-14 mt-16 text-center">
                <h3 className="text-2xl font-bold mb-3">¿Buscas inspiración extra?</h3>
                <p className="text-text-gray mb-8 max-w-[500px] mx-auto text-[15px]">
                  Descubre cómo otros han transformado su espacio o reserva una cita con nuestros expertos para conseguir el hogar que siempre has soñado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={(e) => {
                      const btn = e.currentTarget;
                      btn.innerText = 'Llamar al 900 400 922';
                      btn.classList.add('bg-stone-900');
                    }}
                    className="bg-ikea-blue text-white font-bold px-8 py-3.5 rounded-full text-[14px] hover:bg-blue-800 transition-all duration-300"
                  >
                    Reserva cita gratuita
                  </button>
                  <button 
                    onClick={() => window.open('https://www.ikea.com/es/es/cat/productos-products/', '_blank')}
                    className="bg-white border border-stone-300 text-text-dark font-bold px-8 py-3.5 rounded-full text-[14px] hover:border-text-dark transition-colors"
                  >
                    Ver el catálogo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Cart Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-stone-200 flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  Tu Carrito <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full text-xs">{cartCount}</span>
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="p-6 bg-stone-50 rounded-full">
                      <ShoppingCart className="w-12 h-12 text-stone-300" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-stone-900">Tu carrito está vacío</p>
                      <p className="text-stone-500 text-sm mt-1">¡Añade algo de inspiración a tu hogar!</p>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 bg-ikea-blue text-white font-bold px-8 py-3 rounded-full text-[13px] hover:bg-blue-800 transition-colors"
                    >
                      Empezar a comprar
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-20 h-20 bg-stone-50 rounded-[4px] overflow-hidden flex-shrink-0 border border-stone-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover mix-blend-multiply" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-[14px] leading-tight line-clamp-2">{item.name}</h4>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 text-stone-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-[11px] text-text-gray font-bold uppercase mt-1">{item.category}</p>
                        </div>
                        <div className="flex justify-between items-end mt-2">
                          <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-full p-0.5">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-[13px] font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-bold text-lg">
                            {item.price * item.quantity}€
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-4">
                  <div className="flex justify-between items-center decoration-stone-200">
                    <span className="text-stone-600 font-medium">Subtotal</span>
                    <span className="text-2xl font-bold italic">
                      {cartTotal}<span className="not-italic text-sm ml-0.5">€</span>
                    </span>
                  </div>
                  <button className="w-full bg-ikea-blue text-white font-bold py-4 rounded-full text-[15px] hover:bg-blue-800 transition-all transform active:scale-[0.99] shadow-lg shadow-blue-200/50">
                    Tramitar pedido
                  </button>
                  <p className="text-center text-[11px] text-stone-500">
                    Envío y tasas calculados al finalizar la compra
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-100 mt-20 px-10 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <IkeaLogo />
            <p className="mt-4 text-[12px] text-text-gray">
              © Inter IKEA Systems B.V. 1999-2024. Diseñado para una mejor vida cotidiana.
            </p>
          </div>
          <div className="flex gap-8 text-[13px] font-bold">
            <button className="hover:underline">Privacidad</button>
            <button className="hover:underline">Accesibilidad</button>
            <button className="hover:underline">Cookies</button>
            <button className="hover:underline">España</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
