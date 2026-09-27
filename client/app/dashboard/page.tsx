"use client";

import { RequireAuth } from '@/components/providers/require-auth';
import { AppShell } from '@/components/layout/app-shell';

export default function DashboardPage() {
    return (
        <RequireAuth>
            <AppShell hideHeader>
                <div className="flex min-h-svh flex-col items-center justify-center gap-3">
                    <h1 className="text-2xl font-bold">Welcome to DevPilot!</h1>
                    <p className="text-muted-foreground">
                        This is your dashboard. You can start by exploring the features of DevPilot.
                    </p>
                </div>
            </AppShell>
        </RequireAuth>
    )
}