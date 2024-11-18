import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Vacation Rentals. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <span className="text-sm text-gray-400">|</span>
          <Link href="#" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}



