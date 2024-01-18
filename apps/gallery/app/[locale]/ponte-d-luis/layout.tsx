export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="page-size min-h-full w-full px-4 sm:px-6">
      <div className="prose prose-slate dark:prose-invert prose-img:m-0 prose-figure:m-0 h-full max-w-none [&>:not(img,figure)]:max-w-prose">
        {children}
      </div>
    </main>
  );
}
