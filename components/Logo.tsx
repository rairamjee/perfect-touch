import Link from 'next/link';

interface LogoProps {
  href?: string;
  showText?: boolean;
  className?: string;
}

export default function Logo({ href = '/', showText = true, className = '' }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center space-x-3 group ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-yellow-500/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative w-14 h-14 bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <span className="text-black font-bold text-2xl group-hover:scale-110 transition-transform duration-300">PT</span>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
      </div>
      {showText && (
        <div className="hidden sm:block">
          <span className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 block">
            Perfect Touch
          </span>
          <div className="h-1 w-0 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-500 mt-1 rounded-full"></div>
          <span className="text-xs text-gray-400 group-hover:text-yellow-400/70 transition-colors">Design & Decor</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex-shrink-0">
        {logoContent}
      </Link>
    );
  }

  return <div className="flex-shrink-0">{logoContent}</div>;
}


