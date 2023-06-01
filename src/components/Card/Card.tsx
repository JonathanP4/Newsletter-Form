import { ReactNode } from "react";

export default function Card(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${props.className || ""} bg-white`}>
      {props.children}
    </div>
  );
}
