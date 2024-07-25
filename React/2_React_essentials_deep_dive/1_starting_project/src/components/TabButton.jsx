export default function TabButton({ children, onSelect, isSelected }) { // same forwarding props can be use here for onClick but we should name onSelect to OnClick too
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
