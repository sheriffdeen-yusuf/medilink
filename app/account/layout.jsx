import SideNavigation from "../../components/SideNavigation";
export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-[85vh]">
      <SideNavigation />
      <div className="py-10 px-24">{children}</div>
    </div>
  );
}
