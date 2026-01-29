export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#D1FFFB] border border-[#47FFEE]">
      <span className="text-sm font-semibold text-[#003631]">{children}</span>
    </div>
  );
}
