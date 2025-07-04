import type {Metadata} from 'next';
import {Outfit} from 'next/font/google';
import './globals.css';
import './index.scss';
import {ThemeProvider} from '@/components/Theme/ThemeProvider/ThemeProvider';

const outfit = Outfit({
	variable: '--font-outfit',
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: 'Home || DevRabbani',
	description:
		'Welcome to DevRabbani, your go-to source for web development tutorials, programming tips, and tech insights. Explore our latest articles and enhance your coding skills.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${outfit.variable} antialiased `} suppressHydrationWarning={true}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<main>
						<div className="pointer-events-none fixed top-0 left-1/2 z-40 h-24 w-full -translate-x-1/2">
							<div className="absolute inset-0 overflow-hidden">
								{/* First blur effect */}
								<div
									className="pointer-events-none absolute inset-0 z-10 opacity-100"
									style={{
										backdropFilter: 'blur(3px)',
										maskImage:
											'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
										WebkitMaskImage:
											'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
									}}
								></div>

								{/* Second blur effect */}
								<div
									className="pointer-events-none absolute inset-0 z-20 opacity-100"
									style={{
										backdropFilter: 'blur(5px)',
										maskImage:
											'linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%)',
										WebkitMaskImage:
											'linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%)',
									}}
								></div>
							</div>
						</div>
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
