export default function RouteFallback() {
  return (
    <div
      role="status"
      className="relative flex min-h-screen items-center justify-center bg-black px-6 font-custom"
    >
      <div className="site-starfield" aria-hidden="true">
        <div className="site-starfield-stars" />
      </div>
      <div className="relative rounded-md border border-white/15 bg-[#101010] px-6 py-5 text-center">
        <p className="breadcrumb-font text-sm text-pink-400">Loading route</p>
        <p className="mt-2 text-sm text-white/75">One moment.</p>
      </div>
    </div>
  );
}
