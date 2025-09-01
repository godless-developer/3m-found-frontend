import { MiniCard } from "../support-components";
import { carditems } from "../support-components";

export function MainDashboard() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {carditems().map((item, i) => (
          <MiniCard
            key={i}
            icon={item.icon}
            title={item.title}
            index={item.index}
            indexPercent={item.indexPercent}
            arrowIcon={item.arrowIcon}
            className={item.className}
            iconClass={item.iconClass}
          />
        ))}
      </div>
      <div className="mt-8 mb-8 rounded-xl shadow py-40 flex flex-col items-center bg-white/5 bg-[url('/mainDashboard.png')] bg-top">
        <p className="animate-bounce">yu haruuldgin beleeee</p>
      </div>
    </div>
  );
}
