export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white/50 shadow-md z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <img 
          src="/images/pso_logo.png" 
          alt="PSO Logo" 
          className="h-12 w-auto"
        />
      </div>
    </div>
  );
}