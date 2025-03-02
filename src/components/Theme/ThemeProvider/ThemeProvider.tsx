'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	const [domLoaded, setDomLoaded] = React.useState(false);

	React.useEffect(() => {
		setDomLoaded(true);
	}, []);

	return <>{domLoaded && <NextThemesProvider {...props}>{children} </NextThemesProvider>}</>;
}
