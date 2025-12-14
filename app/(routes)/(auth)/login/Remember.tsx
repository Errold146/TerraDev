"use client"

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Remember() {
    const [remember, setRemember] = useState(false);

    return (
        <div className="flex items-center gap-2 mt-4">
            <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(v) => setRemember(!!v)}
                className="peer border-white data-[state=checked]:border-azul-600 data-[state=checked]:bg-azul-600 data-[state=checked]:text-white"
            />
            <label
                htmlFor="remember"
                className="text-white peer-data-[state=checked]:text-azul-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors"
            >
                Recordar Usuario
            </label>
        </div>
    );
}
