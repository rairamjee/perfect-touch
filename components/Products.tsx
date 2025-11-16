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
import { useState, useEffect, useRef } from 'react';

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Handle touch start
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end and determine swipe direction
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !selectedProduct?.gallery) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setSelectedImageIndex((prev) => 
        prev === selectedProduct.gallery!.length - 1 ? 0 : prev + 1
      );
    }
    if (isRightSwipe) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProduct.gallery!.length - 1 : prev - 1
      );
    }
  };

  // Reset image index when product changes
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedProduct]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white bg-pattern-animated relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Enhanced */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-6 relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 relative inline-block animate-elegant-fade-in">
              Our Premium Products
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full animate-gradient-shift"></span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full animate-underline-expand opacity-60"></div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-underline-expand" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-content-reveal" style={{ animationDelay: '0.3s' }}>
            Discover our extensive collection of high-quality design and decor products, each crafted to perfection with attention to detail.
          </p>
          {/* Decorative Line - Enhanced */}
          <div className="mt-10 flex items-center justify-center gap-4 animate-content-slide" style={{ animationDelay: '0.5s' }}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400 animate-gradient-shift"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse-glow shadow-lg"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400 animate-gradient-shift"></div>
          </div>
        </div>

        {/* Optimized Layout for 8 Products - Full Width Utilization */}
        <div className="w-full">
          {/* Row 1: Two Large Featured Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {products.slice(0, 2).map((product, index) => {
              return (
            <div
              key={product.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-professional cursor-pointer animate-card-entrance card-3d-enhanced"
                  style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => setSelectedProduct(product)}
            >
                  {/* Enhanced Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 z-30 pointer-events-none"></div>
                  
                  {/* Multi-layer Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/15 group-hover:via-yellow-400/8 group-hover:to-yellow-500/15 transition-all duration-700 rounded-3xl z-20 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/0 to-yellow-400/0 group-hover:from-yellow-500/10 group-hover:to-yellow-400/10 transition-all duration-1000 rounded-3xl z-20 pointer-events-none"></div>
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/40 rounded-3xl transition-all duration-700 pointer-events-none z-25 animate-border-pulse"></div>
                  
                  <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                    {/* Animated Background Pattern - Enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/8 via-transparent to-yellow-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>
                    
                    {/* Gradient Overlay - Enhanced with Dynamic Opacity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent z-10 group-hover:from-black/90 group-hover:via-black/65 group-hover:to-transparent transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    
                    {/* Animated Light Rays - Enhanced */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/20 group-hover:via-yellow-400/10 group-hover:to-yellow-500/20 transition-all duration-1000 z-15"></div>
                    <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1200 z-15"></div>
                    
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                      className={`image-smooth-transition object-cover ${
                        hoveredProduct === product.id ? 'brightness-115 contrast-110' : 'brightness-100 contrast-100'
                    }`}
                  />
                    
                    {/* Content Overlay - Title Always Visible - Enhanced */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-20">
                      <div className="mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="badge-enhanced bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:from-yellow-300 group-hover:to-yellow-400 text-black px-5 py-2.5 rounded-xl text-xs font-bold shadow-xl inline-block animate-scale-in-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                          {product.category}
                        </span>
                </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:text-yellow-400 transition-all duration-500 transform group-hover:translate-x-2 animate-slide-up-fade-in group-hover:animate-text-glow" style={{ animationDelay: `${index * 0.25}s` }}>
                        {product.name}
                      </h3>
                      
                      {/* Description - Always Visible */}
                      <div>
                        <p className="text-white/95 text-sm md:text-base mb-5 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        {/* Features - Always Visible */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/30"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Corner Elements */}
                    <div className="absolute top-6 right-6 w-16 h-16 border-2 border-yellow-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 animate-rotate-in"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"></div>
                </div>
                  
                  {/* Bottom Content Section - View Details Button Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6 md:p-8 z-30">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                        setSelectedImageIndex(0);
                      }}
                      className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black px-6 py-3.5 rounded-xl font-bold text-sm md:text-base hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Details</span>
                        <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </div>
                  
                  {/* Enhanced Border Glow with Multiple Layers */}
                  <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/60 rounded-3xl transition-all duration-700 pointer-events-none z-40 animate-pulse-glow"></div>
                  <div className="absolute inset-[-2px] border border-yellow-400/0 group-hover:border-yellow-400/30 rounded-3xl transition-all duration-1000 pointer-events-none z-35 blur-sm"></div>
                </div>
              );
            })}
          </div>

          {/* Row 2: Three Medium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {products.slice(2, 5).map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-professional cursor-pointer animate-card-entrance card-3d-enhanced"
                style={{ animationDelay: `${(index + 2) * 0.12}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 z-30 pointer-events-none rounded-3xl"></div>
                
                {/* Multi-layer Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/12 group-hover:via-yellow-400/6 group-hover:to-yellow-500/12 transition-all duration-700 rounded-3xl z-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/0 to-yellow-400/0 group-hover:from-yellow-500/8 group-hover:to-yellow-400/8 transition-all duration-1000 rounded-3xl z-20 pointer-events-none"></div>
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 rounded-3xl transition-all duration-700 pointer-events-none z-25 animate-border-pulse"></div>
                
                <div className="relative h-[280px] md:h-[320px] overflow-hidden">
                  {/* Enhanced Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>
                  
                  {/* Gradient Overlay - Enhanced with Dynamic Opacity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent opacity-0 group-hover:from-black/88 group-hover:via-black/58 group-hover:to-transparent group-hover:opacity-100 transition-all duration-700 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  
                  {/* Enhanced Animated Light Rays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/15 group-hover:via-yellow-400/8 group-hover:to-yellow-500/15 transition-all duration-1000 z-15"></div>
                  
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`image-smooth-transition object-cover ${
                      hoveredProduct === product.id ? 'brightness-115 contrast-110' : 'brightness-100 contrast-100'
                    }`}
                  />
                  
                  {/* Category Badge - Enhanced */}
                  <div className="absolute top-5 left-5 z-20 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                    <span className="badge-enhanced bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:from-yellow-300 group-hover:to-yellow-400 text-black px-4 py-2 rounded-xl text-xs font-bold shadow-2xl inline-block animate-scale-in-bounce" style={{ animationDelay: `${(index + 2) * 0.15}s` }}>
                      {product.category}
                    </span>
              </div>

                </div>
                
                <div className="p-6 md:p-7 relative bg-gradient-to-b from-white to-gray-50/50">
                {/* Animated Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-all duration-500 transform group-hover:translate-x-2 animate-slide-up-fade-in" style={{ animationDelay: `${(index + 2) * 0.18}s` }}>
                    {product.name}
                  </h3>
                  
                  {/* Description - Always Visible */}
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features - Always Visible */}
                  <div className="flex flex-wrap gap-2.5 mb-5">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Details Button - Always Visible */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                      setSelectedImageIndex(0);
                    }}
                    className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black px-5 py-3 rounded-xl font-bold text-sm hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>
                
                {/* Enhanced Border Glow */}
                <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 rounded-3xl transition-all duration-700 pointer-events-none z-40 animate-border-pulse"></div>
                <div className="absolute inset-[-2px] border border-yellow-400/0 group-hover:border-yellow-400/25 rounded-3xl transition-all duration-1000 pointer-events-none z-35 blur-sm"></div>
              </div>
            ))}
          </div>

          {/* Row 3: Three Smaller Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.slice(5, 8).map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-professional cursor-pointer animate-card-entrance card-3d-enhanced"
                style={{ animationDelay: `${(index + 5) * 0.12}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 z-30 pointer-events-none rounded-3xl"></div>
                
                {/* Multi-layer Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/12 group-hover:via-yellow-400/6 group-hover:to-yellow-500/12 transition-all duration-700 rounded-3xl z-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/0 to-yellow-400/0 group-hover:from-yellow-500/8 group-hover:to-yellow-400/8 transition-all duration-1000 rounded-3xl z-20 pointer-events-none"></div>
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 rounded-3xl transition-all duration-700 pointer-events-none z-25 animate-border-pulse"></div>
                
                <div className="relative h-[250px] md:h-[280px] overflow-hidden">
                  {/* Enhanced Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>
                  
                  {/* Gradient Overlay - Enhanced with Dynamic Opacity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent opacity-0 group-hover:from-black/88 group-hover:via-black/58 group-hover:to-transparent group-hover:opacity-100 transition-all duration-700 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  
                  {/* Enhanced Animated Light Rays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/15 group-hover:via-yellow-400/8 group-hover:to-yellow-500/15 transition-all duration-1000 z-15"></div>
                  
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`image-smooth-transition object-cover ${
                      hoveredProduct === product.id ? 'brightness-115 contrast-110' : 'brightness-100 contrast-100'
                    }`}
                  />
                  
                  {/* Category Badge - Enhanced */}
                  <div className="absolute top-5 left-5 z-20 transform transition-all duration-500">
                    <span className="badge-enhanced bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:from-yellow-300 group-hover:to-yellow-400 text-black px-4 py-2 rounded-xl text-xs font-bold shadow-2xl inline-block animate-scale-in-bounce" style={{ animationDelay: `${(index + 5) * 0.15}s` }}>
                      {product.category}
                    </span>
                  </div>
                  
                </div>
                
                <div className="p-6 md:p-7 relative bg-gradient-to-b from-white to-gray-50/50">
                  {/* Animated Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-all duration-500 transform group-hover:translate-x-2 animate-slide-up-fade-in" style={{ animationDelay: `${(index + 5) * 0.18}s` }}>
                  {product.name}
                </h3>
                  
                  {/* Description - Always Visible */}
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                  {/* Features - Always Visible */}
                  <div className="flex flex-wrap gap-2.5 mb-5">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                        className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                  {/* View Details Button - Always Visible */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                      setSelectedImageIndex(0);
                    }}
                    className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black px-5 py-3 rounded-xl font-bold text-sm hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
                
                {/* Enhanced Border Glow */}
                <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 rounded-3xl transition-all duration-700 pointer-events-none z-40 animate-border-pulse"></div>
                <div className="absolute inset-[-2px] border border-yellow-400/0 group-hover:border-yellow-400/25 rounded-3xl transition-all duration-1000 pointer-events-none z-35 blur-sm"></div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal - Enhanced */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center overflow-y-auto animate-modal-backdrop backdrop-blur-sm"
          onClick={() => {
            setSelectedProduct(null);
            setSelectedImageIndex(0);
          }}
        >
          <div
            className="bg-white max-w-[95vw] w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col md:flex-row m-4 rounded-2xl animate-modal-slide-up relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Close Button */}
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedImageIndex(0);
                  }}
              className="modal-close-button absolute top-6 right-6 bg-white/95 rounded-full p-3 shadow-2xl z-50 group"
                  aria-label="Close"
                >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
            {/* Left Side - Image Section (70%) - Enhanced */}
            <div className="w-full md:w-[70%] p-4 md:p-6 flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.08),transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.08),transparent_50%)]"></div>
              </div>
              
              {/* Large Expanded Image - Enhanced */}
              <div className="relative h-[400px] md:h-[550px] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 overflow-hidden mb-6 rounded-2xl shadow-2xl border border-gray-200/50 relative z-10">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-500/5 animate-pulse-glow"></div>
                
                <div
                  ref={imageContainerRef}
                  className="modal-image-container relative w-full h-full"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <Image
                    src={selectedProduct.gallery?.[selectedImageIndex] || selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain animate-image-fade-in transition-all duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />

                  {/* Enhanced Navigation Arrows */}
                {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) => (prev === 0 ? selectedProduct.gallery!.length - 1 : prev - 1));
                      }}
                        className="modal-nav-button absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 shadow-2xl z-50 group"
                      aria-label="Previous image"
                    >
                        <svg className="w-6 h-6 text-gray-700 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex((prev) => (prev === selectedProduct.gallery!.length - 1 ? 0 : prev + 1));
                      }}
                        className="modal-nav-button absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 shadow-2xl z-50 group"
                      aria-label="Next image"
                    >
                        <svg className="w-6 h-6 text-gray-700 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                      {/* Enhanced Image Counter */}
                      <div className="modal-image-counter absolute bottom-6 left-1/2 -translate-x-1/2 text-white px-5 py-2 rounded-full text-sm font-bold z-50">
                        <span className="text-yellow-400 font-extrabold">{selectedImageIndex + 1}</span>
                        <span className="mx-2 text-gray-300">/</span>
                        <span className="text-white">{selectedProduct.gallery.length}</span>
                    </div>
                  </>
                )}
                </div>
              </div>

              {/* Enhanced Thumbnail Gallery - Below the main image */}
              {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-bold text-gray-800 flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Product Gallery
                    </h4>
                    <span className="text-xs text-gray-500 font-medium">
                      {selectedProduct.gallery.length} {selectedProduct.gallery.length === 1 ? 'Image' : 'Images'}
                    </span>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {selectedProduct.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`modal-thumbnail relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0 border-2 rounded-lg overflow-hidden animate-thumbnail-pop ${
                          selectedImageIndex === idx
                            ? 'active border-yellow-400 shadow-xl ring-4 ring-yellow-400/30'
                            : 'border-gray-300 hover:border-yellow-400/50'
                        }`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                          <Image
                            src={img}
                            alt={`${selectedProduct.name} ${idx + 1}`}
                            fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          />
                          {selectedImageIndex === idx && (
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-yellow-500/20"></div>
                        )}
                        <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Side - Product Details (30%) - Enhanced */}
            <div className="w-full md:w-[30%] p-5 md:p-6 overflow-y-auto border-l border-gray-200/50 flex flex-col bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
              </div>
              <div className="relative z-10">
              {/* Enhanced Product Header */}
              <div className="mb-6 animate-content-slide-in" style={{ animationDelay: '0.2s' }}>
                <div className="mb-3">
                  <span className="badge-enhanced bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-xs font-bold inline-block shadow-lg">
                    {selectedProduct.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{selectedProduct.description}</p>
              </div>

              {/* Enhanced Key Features - Tag Format */}
              <div className="mb-6 animate-content-slide-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Features
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProduct.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-50 to-yellow-100/50 border border-yellow-200/50 hover:from-yellow-100 hover:to-yellow-200 hover:border-yellow-300 transition-all duration-300 animate-feature-item group shadow-sm hover:shadow-md"
                      style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 text-xs md:text-sm font-semibold whitespace-nowrap">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Specifications */}
              {selectedProduct.specifications && (
                <div className="mb-6 spec-card p-5 rounded-xl flex-1 animate-content-slide-in" style={{ animationDelay: '0.5s' }}>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Specifications
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(selectedProduct.specifications).map(([key, value], idx) => (
                      <div 
                        key={key} 
                        className="flex flex-col sm:flex-row sm:justify-between pb-3 border-b border-gray-200/50 last:border-0 gap-2 animate-feature-item"
                        style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                      >
                        <span className="text-xs md:text-sm text-gray-500 capitalize font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-gray-900 font-semibold text-sm md:text-base">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col gap-3 mt-auto animate-content-slide-in" style={{ animationDelay: '0.7s' }}>
                <button className="btn-primary-enhanced w-full text-black px-5 py-3.5 rounded-xl font-bold text-sm md:text-base relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Request Quote
                  </span>
                </button>
                <button className="btn-secondary-enhanced w-full text-white px-5 py-3.5 rounded-xl font-bold text-sm md:text-base relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Catalogue
                  </span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
