'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import Lenis from 'lenis';
export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	const [domLoaded, setDomLoaded] = React.useState(false);

	React.useEffect(() => {
		setDomLoaded(true);
		// Initialize Lenis
		const lenis = new Lenis({
			autoRaf: true,
		});

		// Listen for the scroll event and log the event data
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		lenis.on('scroll', (e) => {});
	}, []);

	return <>{domLoaded && <NextThemesProvider {...props}>{children} </NextThemesProvider>}</>;
}
