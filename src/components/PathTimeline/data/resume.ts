import experienceData from "../../../assets/data/experience.json";

interface ExperienceItem {
    title: string;
    location?: string;
    start: string;
    end: string;
    highlights: string[];
}

export interface ResumeEntry {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    current?: boolean;
    bullets?: string[];
    icon: string;
    color: string;
    accent: string;
}

const STYLE_MAP: Record<string, { icon: string; color: string; accent: string }> = {
    "jetblue": { icon: "JB", color: "#0b2b3c", accent: "#2e8bc0" },
    "becoming you labs": { icon: "BY", color: "#12321e", accent: "#3aa76d" },
    "brainstation": { icon: "BS", color: "#3a240f", accent: "#d17938" },
    "wunderkind": { icon: "WK", color: "#1c2c3b", accent: "#4a9ad4" },
    "self-employed": { icon: "SE", color: "#0f3d2e", accent: "#1a6645" },
    "us army": { icon: "US", color: "#2d3a1a", accent: "#4a6329" }
};

const FALLBACK_PALETTE = [
    { icon: "EX", color: "#142c3d", accent: "#4b8bbf" },
    { icon: "EX", color: "#1a3d2b", accent: "#3fb389" },
    { icon: "EX", color: "#402a17", accent: "#d2883d" },
    { icon: "EX", color: "#2b2f3b", accent: "#6b8bb7" }
];

function slugify(value: string): string {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function splitTitle(title: string): { role: string; company: string } {
    const parts = title.split(" - ");
    if (parts.length > 1) {
        return {
            role: parts.slice(0, -1).join(" - "),
            company: parts[parts.length - 1]
        };
    }

    return { role: title, company: "Self-Employed" };
}

function getInitials(value: string): string {
    const letters = value
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word[0])
        .join("")
        .slice(0, 3)
        .toUpperCase();
    return letters || "EX";
}

export const entries: ResumeEntry[] = (experienceData as ExperienceItem[]).map(
    (item, index) => {
        const { role, company } = splitTitle(item.title);
        const companyKey = company.toLowerCase();
        const style = STYLE_MAP[companyKey] ?? FALLBACK_PALETTE[index % FALLBACK_PALETTE.length];
        const current = item.end.toLowerCase() === "current";

        return {
            id: slugify(`${company}-${role}`),
            title: role,
            company,
            location: item.location ?? "",
            period: `${item.start} - ${current ? "Present" : item.end}`,
            current,
            bullets: item.highlights,
            icon: style.icon === "EX" ? getInitials(company) : style.icon,
            color: style.color,
            accent: style.accent
        };
    }
);
