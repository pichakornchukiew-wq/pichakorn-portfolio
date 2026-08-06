interface WallLabelProps {
  title: string;
  year: number;
  medium: string;
  series?: string;
  align?: "left" | "center";
}

export default function WallLabel({ title, year, medium, series, align = "left" }: WallLabelProps) {
  return (
    <div className={`wall-label ${align === "center" ? "text-center" : ""}`}>
      <p className="label-title">{title}</p>
      <p className="label-meta">
        {year} &nbsp;·&nbsp; {medium}
        {series ? <>&nbsp;·&nbsp; {series}</> : null}
      </p>
    </div>
  );
}
