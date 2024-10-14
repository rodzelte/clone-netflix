const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row">
        <p className="text-center text-sm text-muted-foreground leading-loose md:text-left">
          Built by{" "}
          <a
            href="https://github.com/rodzelte"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light hover:underline hover:underline-offset-4"
          >
            Rodzel Develops
          </a>
        </p>
        <p className="text-center text-sm text-muted-foreground leading-loose md:text-left">
          Check{" "}
          <a
            href="https://www.linkedin.com/in/rodzel-te/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light hover:underline hover:underline-offset-4"
          >
            LinkedIn
          </a>{" "}
          to contact.
        </p>
      </div>
    </footer>
  )
}

export default Footer
