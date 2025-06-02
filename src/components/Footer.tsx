import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="footer" className="bg-dark-gray py-8 text-light-neutral">
            <div className="container mx-auto px-6 text-center">
                <p className="text-cool-gray text-sm mb-4">
                    © {new Date().getFullYear()} John Doe. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="/privacy" className="footer-link text-cool-gray hover:text-emerald text-sm">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="footer-link text-cool-gray hover:text-emerald text-sm">
                        Terms of Service
                    </Link>
                    <Link href="/cookies" className="footer-link text-cool-gray hover:text-emerald text-sm">
                        Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}