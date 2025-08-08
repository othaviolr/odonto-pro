export function Footer() {
  return (
    <footer className="bg-white-800 text-gray-600 py-6 text-center text-sm md:text-base">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          Todos os direitos reservados &copy; {new Date().getFullYear()} -
          Netuno
        </p>
      </div>
    </footer>
  );
}
