export default function Home() {
  const renderName = (name2: any) => {
    const Name = "Hamed";
    return <span>{Name}</span>;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>my first page</div>
      {renderName("Rasta")}
    </div>
  );
}
