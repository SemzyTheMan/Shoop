interface CardProps {
  header?: JSX.Element;
  children: Array<JSX.Element> | JSX.Element;
}

export const Card = ({ header, children }: CardProps) => (
  <div className={"bg-white pt-3 pb-5 px-4"}>
    {header && <div className={"border-b border-teal-200 py-3"}>{header}</div>}
    <div className={"py-3 px-1"}>{children}</div>
  </div>
);
