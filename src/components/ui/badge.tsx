import "./badge.css"
export type BadgeProps = {
  count: number;
};
const Badge = (props: BadgeProps) => {
  return <div className="mybadge badge ">{props.count}</div>;
};

export default Badge;
