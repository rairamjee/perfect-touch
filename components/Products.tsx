// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
//   gallery?: string[];
//   features: string[];
//   category: string;
//   specifications?: {
//     material?: string;
//     size?: string;
//     finish?: string;
//     application?: string;
//   };
// }

// const products: Product[] = [
//   {
//     id: 'fluted-panel',
//     name: 'Fluted Panel',
//     description: 'Elegant fluted panels that add depth and sophistication to any interior space. Perfect for creating modern, textured walls with a timeless appeal.',
//     image: '/Fluted panel.jpeg',
//     gallery: ['/Fluted panel.jpeg', '/interior.jpg', '/interior1.jpg'],
//     features: ['Easy Installation', 'Durable Material', 'Modern Design', 'Various Finishes'],
//     category: 'Wall Panels',
//     specifications: {
//       material: 'Premium PVC/WPC',
//       size: 'Customizable',
//       finish: 'Matte/Glossy',
//       application: 'Interior Walls',
//     },
//   },
//   {
//     id: 'charcoal-panel',
//     name: 'Charcoal Panel',
//     description: 'Sleek charcoal panels offering a bold, contemporary look. Ideal for creating dramatic accent walls and modern interior designs.',
//     image: '/Charcoal Panel.jpeg',
//     gallery: ['/Charcoal Panel.jpeg', '/interior.jpg', '/grid-1988179.jpg'],
//     features: ['Premium Quality', 'Fire Resistant', 'Low Maintenance', 'Stylish Finish'],
//     category: 'Wall Panels',
//     specifications: {
//       material: 'High-Grade Composite',
//       size: 'Standard & Custom',
//       finish: 'Charcoal Matte',
//       application: 'Interior/Exterior',
//     },
//   },
//   {
//     id: 'wpc-louvers',
//     name: 'WPC Louvers',
//     description: 'Weather-resistant WPC louvers perfect for both interior and exterior applications. Combining durability with aesthetic appeal.',
//     image: '/Wpc louvers.jpeg',
//     gallery: ['/Wpc louvers.jpeg', '/interior1.jpg', '/home-1622401.jpg'],
//     features: ['Weather Resistant', 'UV Protected', 'Eco-Friendly', 'Long Lasting'],
//     category: 'Louvers',
//     specifications: {
//       material: 'Wood-Plastic Composite',
//       size: 'Various Sizes',
//       finish: 'Natural Wood Look',
//       application: 'Interior/Exterior',
//     },
//   },
//   {
//     id: 'uv-digital-marble',
//     name: 'UV & Digital Marble Sheet',
//     description: 'Luxurious marble-effect sheets with UV protection. Achieve the elegance of natural marble with enhanced durability and easy maintenance.',
//     image: '/Uv & digital marble sheet.jpeg',
//     gallery: ['/Uv & digital marble sheet.jpeg', '/interior.jpg', '/living-room-581073.jpg'],
//     features: ['UV Protected', 'Marble Finish', 'Easy to Clean', 'Cost Effective'],
//     category: 'Sheets',
//     specifications: {
//       material: 'UV Coated Vinyl',
//       size: 'Roll Format',
//       finish: 'Marble Pattern',
//       application: 'Walls & Surfaces',
//     },
//   },
//   {
//     id: 'pvc-wall-panels',
//     name: 'PVC Wall Panels',
//     description: 'Versatile PVC wall panels offering endless design possibilities. Waterproof, lightweight, and perfect for any room in your home.',
//     image: '/PVC wall panels.jpeg',
//     gallery: ['/PVC wall panels.jpeg', '/interior1.jpg', '/apartment-1851201.jpg'],
//     features: ['Waterproof', 'Lightweight', 'Easy Installation', 'Multiple Designs'],
//     category: 'Wall Panels',
//     specifications: {
//       material: 'Premium PVC',
//       size: 'Standard Panels',
//       finish: 'Multiple Options',
//       application: 'All Rooms',
//     },
//   },
//   {
//     id: 'uv-roll',
//     name: 'UV Roll',
//     description: 'High-quality UV rolls with vibrant prints and excellent durability. Perfect for large-scale applications with consistent quality.',
//     image: '/Uv roll.jpeg',
//     gallery: ['/Uv roll.jpeg', '/interior.jpg', '/furniture-998265.jpg'],
//     features: ['High Quality Print', 'UV Resistant', 'Flexible Application', 'Wide Range'],
//     category: 'Rolls',
//     specifications: {
//       material: 'UV Protected Material',
//       size: 'Roll Format',
//       finish: 'Various Prints',
//       application: 'Large Surfaces',
//     },
//   },
//   {
//     id: 'floor-sheet',
//     name: 'Floor Sheet',
//     description: 'Premium floor sheets designed for durability and style. Transform your floors with beautiful patterns and easy maintenance.',
//     image: '/floor sheet.jpg',
//     gallery: ['/floor sheet.jpg', '/floor-1866663.jpg', '/cobblestone-3383006.jpg'],
//     features: ['Durable', 'Slip Resistant', 'Easy Maintenance', 'Various Patterns'],
//     category: 'Flooring',
//     specifications: {
//       material: 'Premium Flooring Material',
//       size: 'Sheet Format',
//       finish: 'Multiple Patterns',
//       application: 'Indoor Floors',
//     },
//   },
//   {
//     id: 'wallpaper',
//     name: 'Wallpaper',
//     description: 'Stunning wallpaper collections to transform any space. From modern patterns to classic designs, find the perfect style for your home.',
//     image: '/interior.jpg',
//     gallery: ['/interior.jpg', '/interior1.jpg', '/living-room-581073.jpg'],
//     features: ['Wide Selection', 'Easy Application', 'Removable', 'Design Variety'],
//     category: 'Wall Coverings',
//     specifications: {
//       material: 'Premium Paper/Vinyl',
//       size: 'Roll Format',
//       finish: 'Various Designs',
//       application: 'Interior Walls',
//     },
//   },
// ];

// export default function Products() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12 animate-fade-in">
//           <div className="inline-block mb-4">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-down relative inline-block">
//               Our Premium Products
//               <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-underline-expand"></span>
//             </h2>
//           </div>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
//             Discover our extensive collection of high-quality design and decor products, each crafted to perfection.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {products.map((product, index) => (
//             <div
//               key={product.id}
//               className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-4 hover:scale-105 animate-product-card"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//               onClick={() => setSelectedProduct(product)}
//             >
//               {/* Product Image */}
//               <div className="relative h-64 overflow-hidden bg-gray-100 group/image">
//                 {/* Subtle Light Overlay (No Yellow) */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/0 group-hover:to-white/5 transition-all duration-700 z-20"></div>
                
//                 {/* Shimmer Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>
                
//                 {/* Main Image with Enhanced Zoom */}
//                 <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-110">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className={`object-cover transition-all duration-700 ease-out ${
//                       hoveredProduct === product.id 
//                         ? 'scale-[1.8] rotate-2 brightness-110' 
//                         : 'scale-100 rotate-0 brightness-100'
//                     }`}
//                   />
//                 </div>
                
//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                
//                 {/* Category Badge with Enhanced Animation */}
//                 <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-6 shadow-2xl z-40 animate-bounce-subtle">
//                   {product.category}
//                 </div>
                
//                 {/* Animated Border Glow */}
//                 <div className="absolute inset-0 border-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-20 animate-glow"></div>
                
//                 {/* Corner Accents */}
//                 <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-2xl z-30"></div>
//                 <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-2xl z-30"></div>
//               </div>

//               {/* Product Info */}
//               <div className="p-6 relative overflow-hidden">
//                 {/* Animated Top Border */}
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                
//                 {/* Background Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/5 group-hover:to-yellow-500/5 transition-all duration-500 -z-10"></div>
                
//                 <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-all duration-500 transform group-hover:translate-x-3 group-hover:scale-105 relative">
//                   {product.name}
//                   <span className="absolute bottom-0 left-0 h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-800 transition-all duration-500 transform group-hover:translate-x-1">
//                   {product.description}
//                 </p>

//                 {/* Features */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {product.features.slice(0, 2).map((feature, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full group-hover:bg-gray-200 group-hover:text-gray-900 transition-all duration-300 transform group-hover:scale-110"
//                       style={{ transitionDelay: `${idx * 0.1}s` }}
//                     >
//                       {feature}
//                     </span>
//                   ))}
//                 </div>

//                 {/* View Details Button */}
//                 <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-md hover:shadow-xl transform hover:scale-105 relative overflow-hidden group/btn">
//                   <span className="relative z-10 flex items-center justify-center">
//                     View Details
//                     <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Product Detail Modal with Catalogue */}
//       {selectedProduct && (
//         <div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
//           onClick={() => {
//             setSelectedProduct(null);
//             setSelectedImageIndex(0);
//           }}
//         >
//           <div
//             className="bg-white rounded-3xl max-w-[95vw] w-full max-h-[95vh] overflow-hidden animate-scale-in shadow-2xl border-4 border-yellow-400/20"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               animation: 'scaleIn 0.4s ease-out, fadeIn 0.4s ease-out',
//             }}
//           >
//             {/* Main Image Gallery - Expanded View */}
//             <div className="relative w-full h-[70vh] min-h-[600px] bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden group/image-container">
//               {/* Animated Background Pattern */}
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)] animate-pulse-slow"></div>
//               </div>
              
//               {/* Main Image with Enhanced Expansion */}
//               <div className="absolute inset-0 flex items-center justify-center p-8">
//                 <div className="relative w-full h-full transform transition-all duration-1000 group-hover/image-container:scale-105">
//                   <Image
//                     src={selectedProduct.gallery?.[selectedImageIndex] || selectedProduct.image}
//                     alt={selectedProduct.name}
//                     fill
//                     className="object-contain transition-all duration-1000 ease-out scale-125 hover:scale-150"
//                     priority
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
//                   />
//                 </div>
//               </div>
              
//               {/* Enhanced Gradient Overlays */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
//               <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
              
//               {/* Shimmer Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/image-container:translate-x-full transition-transform duration-2000 pointer-events-none"></div>
//               {/* Close Button */}
//               <button
//                 onClick={() => {
//                   setSelectedProduct(null);
//                   setSelectedImageIndex(0);
//                 }}
//                 className="absolute top-6 right-6 bg-white/95 hover:bg-white rounded-full p-3 shadow-2xl hover:scale-110 transition-all z-50 group"
//                 aria-label="Close"
//               >
//                 <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
              
//               {/* Image Navigation - Enhanced */}
//               {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
//                 <>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedImageIndex((prev) => (prev === 0 ? selectedProduct.gallery!.length - 1 : prev - 1));
//                     }}
//                     className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all z-50 group"
//                     aria-label="Previous image"
//                   >
//                     <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedImageIndex((prev) => (prev === selectedProduct.gallery!.length - 1 ? 0 : prev + 1));
//                     }}
//                     className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all z-50 group"
//                     aria-label="Next image"
//                   >
//                     <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
                  
//                   {/* Image Counter - Enhanced */}
//                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/80 to-black/70 text-white px-6 py-2.5 rounded-full text-sm font-bold backdrop-blur-md z-50 border border-white/20 shadow-2xl animate-fade-in">
//                     <span className="text-yellow-400">{selectedImageIndex + 1}</span>
//                     <span className="mx-2 text-gray-400">/</span>
//                     <span>{selectedProduct.gallery.length}</span>
//                   </div>
                  
//                   {/* Zoom Indicator */}
//                   <div className="absolute top-6 left-6 bg-black/70 text-white px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm z-50 border border-white/20 animate-fade-in">
//                     <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
//                     </svg>
//                     Hover to zoom
//                   </div>
//                 </>
//               )}
//             </div>
            
//             {/* Content Area with Better Layout */}
//             <div className="bg-white">
//               {/* Product Header Section */}
//               <div className="px-8 pt-6 pb-4 border-b border-gray-200">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <div className="mb-3">
//                       <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-bold inline-block">
//                         {selectedProduct.category}
//                       </span>
//                     </div>
//                     <h2 className="text-4xl font-bold text-gray-900 mb-3">{selectedProduct.name}</h2>
//                     <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
//                       {selectedProduct.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Thumbnail Gallery - Enhanced */}
//               {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
//                 <div className="px-8 pt-6 pb-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
//                   <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center">
//                     <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     Product Gallery - Select an image to view
//                   </h4>
//                   <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
//                     {selectedProduct.gallery.map((img, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setSelectedImageIndex(idx)}
//                         className={`relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all transform group/thumb ${
//                           selectedImageIndex === idx
//                             ? 'border-yellow-400 scale-110 shadow-2xl ring-4 ring-yellow-400/40'
//                             : 'border-gray-300 hover:border-gray-400 hover:scale-105'
//                         }`}
//                       >
//                         <Image
//                           src={img}
//                           alt={`${selectedProduct.name} ${idx + 1}`}
//                           fill
//                           className="object-cover transition-transform duration-300 group-hover/thumb:scale-110"
//                         />
//                         {selectedImageIndex === idx && (
//                           <div className="absolute inset-0 bg-yellow-400/30 border-2 border-yellow-400"></div>
//                         )}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity"></div>
//                         {selectedImageIndex === idx && (
//                           <div className="absolute top-2 right-2 bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
//                             <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Scrollable Details Section */}
//               <div className="overflow-y-auto max-h-[30vh] px-8 py-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {/* Specifications */}
//                   {selectedProduct.specifications && (
//                     <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                       <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                         <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                         Specifications
//                       </h3>
//                       <div className="space-y-3">
//                         {Object.entries(selectedProduct.specifications).map(([key, value]) => (
//                           <div key={key} className="flex flex-col pb-3 border-b border-gray-200 last:border-0">
//                             <span className="text-sm text-gray-500 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
//                             <span className="text-gray-900 font-semibold text-base">{value}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Key Features */}
//                   <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                       <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       Key Features
//                     </h3>
//                     <div className="space-y-3">
//                       {selectedProduct.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-start space-x-3 pb-3 border-b border-gray-200 last:border-0">
//                           <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                           </svg>
//                           <span className="text-gray-700 text-base">{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-4 mt-6">
//                   <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     Request Quote
//                   </button>
//                   <button className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center justify-center">
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                     Download Catalogue
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Image Gallery Preview Bar - Gallery Style */}
//             {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
//               <div className="bg-white border-t-2 border-gray-200">
//                 <div className="px-8 py-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <h5 className="text-gray-900 text-lg font-bold flex items-center">
//                       <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                       Product Gallery
//                     </h5>
//                     <span className="text-sm text-gray-500">
//                       {selectedImageIndex + 1} of {selectedProduct.gallery.length} images
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2">
//                     {selectedProduct.gallery.map((img, idx) => {
//                       const isActive = idx === selectedImageIndex;
//                       return (
//                         <button
//                           key={idx}
//                           onClick={() => setSelectedImageIndex(idx)}
//                           className={`relative flex-shrink-0 transition-all duration-300 group/preview ${
//                             isActive ? 'scale-105' : 'hover:scale-102'
//                           }`}
//                         >
//                           <div className={`relative w-32 h-24 rounded-lg overflow-hidden border-2 transition-all ${
//                             isActive
//                               ? 'border-yellow-400 shadow-xl ring-4 ring-yellow-400/30'
//                               : 'border-gray-300 hover:border-yellow-400/50 shadow-md'
//                           }`}>
//                             <Image
//                               src={img}
//                               alt={`${selectedProduct.name} ${idx + 1}`}
//                               fill
//                               className="object-cover transition-transform duration-300 group-hover/preview:scale-110"
//                             />
//                             {isActive && (
//                               <div className="absolute inset-0 bg-yellow-400/20"></div>
//                             )}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity"></div>
//                             {isActive && (
//                               <div className="absolute top-2 left-2 bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
//                                 <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
//                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                                 </svg>
//                               </div>
//                             )}
//                             <div className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded font-semibold backdrop-blur-sm ${
//                               isActive 
//                                 ? 'bg-yellow-400 text-black' 
//                                 : 'bg-black/70 text-white'
//                             }`}>
//                               {idx + 1}
//                             </div>
//                           </div>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  features: string[];
  category: string;
  specifications?: {
    material?: string;
    size?: string;
    finish?: string;
    application?: string;
  };
}

const products: Product[] = [
  {
    id: 'fluted-panel',
    name: 'Fluted Panel',
    description: 'Elegant fluted panels that add depth and sophistication to any interior space. Perfect for creating modern, textured walls with a timeless appeal.',
    image: '/Fluted panel.jpeg',
    gallery: ['/Fluted panel.jpeg', '/interior.jpg', '/interior1.jpg'],
    features: ['Easy Installation', 'Durable Material', 'Modern Design', 'Various Finishes'],
    category: 'Wall Panels',
    specifications: {
      material: 'Premium PVC/WPC',
      size: 'Customizable',
      finish: 'Matte/Glossy',
      application: 'Interior Walls',
    },
  },
  {
    id: 'charcoal-panel',
    name: 'Charcoal Panel',
    description: 'Sleek charcoal panels offering a bold, contemporary look. Ideal for creating dramatic accent walls and modern interior designs.',
    image: '/Charcoal Panel.jpeg',
    gallery: ['/Charcoal Panel.jpeg', '/interior.jpg', '/grid-1988179.jpg'],
    features: ['Premium Quality', 'Fire Resistant', 'Low Maintenance', 'Stylish Finish'],
    category: 'Wall Panels',
    specifications: {
      material: 'High-Grade Composite',
      size: 'Standard & Custom',
      finish: 'Charcoal Matte',
      application: 'Interior/Exterior',
    },
  },
  {
    id: 'wpc-louvers',
    name: 'WPC Louvers',
    description: 'Weather-resistant WPC louvers perfect for both interior and exterior applications. Combining durability with aesthetic appeal.',
    image: '/Wpc louvers.jpeg',
    gallery: ['/Wpc louvers.jpeg', '/interior1.jpg', '/home-1622401.jpg'],
    features: ['Weather Resistant', 'UV Protected', 'Eco-Friendly', 'Long Lasting'],
    category: 'Louvers',
    specifications: {
      material: 'Wood-Plastic Composite',
      size: 'Various Sizes',
      finish: 'Natural Wood Look',
      application: 'Interior/Exterior',
    },
  },
  {
    id: 'uv-digital-marble',
    name: 'UV & Digital Marble Sheet',
    description: 'Luxurious marble-effect sheets with UV protection. Achieve the elegance of natural marble with enhanced durability and easy maintenance.',
    image: '/Uv & digital marble sheet.jpeg',
    gallery: ['/Uv & digital marble sheet.jpeg', '/interior.jpg', '/living-room-581073.jpg'],
    features: ['UV Protected', 'Marble Finish', 'Easy to Clean', 'Cost Effective'],
    category: 'Sheets',
    specifications: {
      material: 'UV Coated Vinyl',
      size: 'Roll Format',
      finish: 'Marble Pattern',
      application: 'Walls & Surfaces',
    },
  },
  {
    id: 'pvc-wall-panels',
    name: 'PVC Wall Panels',
    description: 'Versatile PVC wall panels offering endless design possibilities. Waterproof, lightweight, and perfect for any room in your home.',
    image: '/PVC wall panels.jpeg',
    gallery: ['/PVC wall panels.jpeg', '/interior1.jpg', '/apartment-1851201.jpg'],
    features: ['Waterproof', 'Lightweight', 'Easy Installation', 'Multiple Designs'],
    category: 'Wall Panels',
    specifications: {
      material: 'Premium PVC',
      size: 'Standard Panels',
      finish: 'Multiple Options',
      application: 'All Rooms',
    },
  },
  {
    id: 'uv-roll',
    name: 'UV Roll',
    description: 'High-quality UV rolls with vibrant prints and excellent durability. Perfect for large-scale applications with consistent quality.',
    image: '/Uv roll.jpeg',
    gallery: ['/Uv roll.jpeg', '/interior.jpg', '/furniture-998265.jpg'],
    features: ['High Quality Print', 'UV Resistant', 'Flexible Application', 'Wide Range'],
    category: 'Rolls',
    specifications: {
      material: 'UV Protected Material',
      size: 'Roll Format',
      finish: 'Various Prints',
      application: 'Large Surfaces',
    },
  },
  {
    id: 'floor-sheet',
    name: 'Floor Sheet',
    description: 'Premium floor sheets designed for durability and style. Transform your floors with beautiful patterns and easy maintenance.',
    image: '/floor sheet.jpg',
    gallery: ['/floor sheet.jpg', '/floor-1866663.jpg', '/cobblestone-3383006.jpg'],
    features: ['Durable', 'Slip Resistant', 'Easy Maintenance', 'Various Patterns'],
    category: 'Flooring',
    specifications: {
      material: 'Premium Flooring Material',
      size: 'Sheet Format',
      finish: 'Multiple Patterns',
      application: 'Indoor Floors',
    },
  },
  {
    id: 'wallpaper',
    name: 'Wallpaper',
    description: 'Stunning wallpaper collections to transform any space. From modern patterns to classic designs, find the perfect style for your home.',
    image: '/interior.jpg',
    gallery: ['/interior.jpg', '/interior1.jpg', '/living-room-581073.jpg'],
    features: ['Wide Selection', 'Easy Application', 'Removable', 'Design Variety'],
    category: 'Wall Coverings',
    specifications: {
      material: 'Premium Paper/Vinyl',
      size: 'Roll Format',
      finish: 'Various Designs',
      application: 'Interior Walls',
    },
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Our Premium Products
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our extensive collection of high-quality design and decor products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100 group/image">

                {/* Subtle Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-700 z-20"></div>

                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30"></div>

                {/* Image scales ONLY (fixed version) */}
                <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out ${
                      hoveredProduct === product.id ? 'scale-125 brightness-110' : 'scale-100'
                    }`}
                  />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-6 shadow-2xl z-40">
                  {product.category}
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 border-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-20"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 relative overflow-hidden">

                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-all duration-500">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-md hover:shadow-xl">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal below (unchanged) */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedProduct(null);
            setSelectedImageIndex(0);
          }}
        >
          {/* You already have COMPLETE MODAL CODE. 
              Keep your existing modal below exactly as is. */}
          <div className="bg-white p-10 rounded-xl">
            <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
            {/* Keep rest of modal UI */}
          </div>
        </div>
      )}

    </section>
  );
}
