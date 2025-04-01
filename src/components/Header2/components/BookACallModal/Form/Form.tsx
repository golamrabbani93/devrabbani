const Form = () => {
	return (
		<form className="flex flex-col gap-y-4">
			{/* Email Input */}
			<div data-slot="form-item" className="grid gap-2">
				<input
					data-slot="form-control"
					className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4 bg-zinc-800/40"
					placeholder="Your email"
					id="email"
					name="email"
					aria-describedby="email-description"
					aria-invalid="false"
				/>
			</div>

			{/* Message Textarea */}
			<div data-slot="form-item" className="grid gap-2">
				<textarea
					data-slot="form-control"
					className="border-input placeholder:text-muted-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:outline-destructive/60 dark:aria-invalid:outline-destructive aria-invalid:ring-destructive/20 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/50 flex field-sizing-content w-full rounded-md border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-sm dark:aria-invalid:focus-visible:ring-4 max-h-[200px] min-h-[100px] bg-zinc-800/40"
					placeholder="Your message"
					name="message"
					id="message"
					aria-describedby="message-description"
					aria-invalid="false"
				/>
			</div>

			{/* Submit Button */}
			<button
				data-slot="button"
				className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 cursor-pointer bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full"
				type="submit"
			>
				Send Message
			</button>
		</form>
	);
};

export default Form;
