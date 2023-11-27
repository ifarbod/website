// iFarbod 2023

export class Utils
{
    static prettyDate(date: Date)
    {
        let date_iso = date.toISOString().split("T")[0];
        let time_str = Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "numeric", second: "numeric", hour12: true }).format(date);
        return `${date_iso} ${time_str}`;
    }
}
