export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-3">
      <h2
        className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 mt-8
      "
      >
        <div className="hover:underline">AlohaSally</div>
      </h2>
      <div className="bg-black text-white text-2xl tracking-widest rounded-md px-4 py-2">
        TIL
      </div>
    </div>
  );
}
