import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog';
import {DialogTitle} from '@radix-ui/react-dialog';
import Navigations from '../Navigations/Navigations';
import Link from 'next/link';

export function Modal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="animate-fadeInRight delay-200">
					<button
						className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] size-9 m-2 text-white/90 hover:bg-white/5 flex"
						aria-label="Open search menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-command size-4 mx-0"
						>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
						</svg>
					</button>
				</div>
			</DialogTrigger>
			<DialogContent className="">
				<DialogTitle className="hidden">Search</DialogTitle>
				<div
					data-slot="command"
					className="bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md [&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
					cmdk-root=""
				>
					<label
						style={{
							position: 'absolute',
							width: '1px',
							height: '1px',
							padding: '0px',
							margin: '-1px',
							overflow: 'hidden',
							clip: 'rect(0px, 0px, 0px, 0px)',
							whiteSpace: 'nowrap',
							borderWidth: '0px',
						}}
					></label>
					<div
						data-slot="command-input-wrapper"
						className="flex h-9 items-center gap-2 border-b px-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-search size-4 shrink-0 opacity-50"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</svg>
						<input
							data-slot="command-input"
							className="placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-0 disabled:cursor-not-allowed disabled:opacity-50"
							placeholder="Search..."
							cmdk-input=""
							autoComplete="off"
							autoCorrect="off"
							spellCheck="false"
							aria-autocomplete="list"
							role="combobox"
							aria-expanded="true"
							aria-controls=":r29:"
							aria-labelledby=":r2a:"
						/>
					</div>
					<div
						data-slot="command-list"
						className="max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto max-sm:max-h-[400px]"
						cmdk-list=""
						role="listbox"
						aria-label="Suggestions"
						id=":r29:"
					>
						<div cmdk-list-sizer="">
							<div
								data-slot="command-group"
								className="text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium"
								cmdk-group=""
								role="presentation"
								data-value="Navigation"
							>
								<div cmdk-group-heading="" aria-hidden="true" id=":r2d:">
									Navigation
								</div>
								<Navigations />
							</div>
							<div
								data-slot="command-separator"
								className="bg-border -mx-1 h-px"
								cmdk-separator=""
								role="separator"
							></div>
							{/* Repeat similar structure for other groups */}
						</div>
					</div>
					<div className="text-muted-foreground flex justify-between border-t p-2 text-sm font-light">
						<div className="flex gap-3 scale-95 opacity-80">
							<Link
								href="https://www.linkedin.com/in/g-rabbani/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-300 transition-colors hover:text-neutral-100"
							>
								<span className="sr-only">LinkedIn</span>
								<svg
									stroke="currentColor"
									fill="none"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="20"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-1"
								>
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect width="4" height="12" x="2" y="9"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</Link>
							<Link
								href="https://github.com/golamrabbani93"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-300 transition-colors hover:text-neutral-100"
							>
								<span className="sr-only">GitHub</span>
								<svg
									stroke="currentColor"
									fill="none"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="20"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-1"
								>
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
									<path d="M9 18c-4.51 2-5-2-7-2"></path>
								</svg>
							</Link>
							<Link
								href="https://www.facebook.com/golam.rabbani.72"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-300 transition-colors hover:text-neutral-100"
							>
								<span className="sr-only">Twitter</span>
								<svg
									stroke="currentColor"
									fill="none"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="20"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-1"
								>
									<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
								</svg>
							</Link>
							<Link
								href="https://www.facebook.com/golam.rabbani.72"
								target="_blank"
								rel="noopener noreferrer"
								className="text-neutral-300 transition-colors hover:text-neutral-100"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-facebook-icon lucide-facebook"
								>
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
								</svg>
							</Link>
						</div>
						<span>
							<span className="md:hidden">Scroll</span>{' '}
							<kbd className="bg-muted rounded px-1 text-xs">↑↓</kbd> to navigate
							<span className="mx-2 hidden opacity-50 md:inline">|</span>
							<span className="hidden md:inline">
								Press <kbd className="bg-muted rounded px-1 text-xs">↵</kbd> to open
							</span>
						</span>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
