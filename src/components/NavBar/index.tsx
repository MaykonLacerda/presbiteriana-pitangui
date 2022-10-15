export type NavItemProps = {
  text: string;
}

export type NavBarProps = {
  items: {
    text: string;
    handle: () => void;
  }[]
}

function NavItem({ text }: NavItemProps) {
  return (
    <button type="button" className="text-white">{text}</button>
  );
}

export function NavBar({ items }: NavBarProps) {
  return (
    <div className="p-5 px-16 bg-green-600 flex overflow-auto">
      <div className="mr-auto text-white bold">Presbiteriana de Pitangui</div>
      <div className="flex gap-4 justify-end">
        {items.map((item) => <NavItem text={item.text} />)}
      </div>
    </div>
  );
}
