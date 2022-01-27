export default function timeDifference(createdAt: string) {
    const units: any = {
        year: 24 * 60 * 60 * 1000 * 365,
        month: 24 * 60 * 60 * 1000 * 365/12,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000,
        second: 1000,
    }
  
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  
    const getRelativeTime = (d1: Date, d2: Date = new Date()) => {
        const elapsed = d1.getTime() - d2.getTime()
  
        // "Math.abs" accounts for both "past" & "future" scenarios
        for (const unit of Object.keys(units)) {
            type u_types = "year" | "month" | "day" | "hour" | "minute" | "second";
            const timeUnit = unit as u_types;
    
            if (Math.abs(elapsed) > units[unit] || unit === 'second')
                return rtf.format(Math.round(elapsed/units[unit]), timeUnit)
        }
    }

    return getRelativeTime(new Date(createdAt));
}