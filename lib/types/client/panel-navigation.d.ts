import type { WorkbenchService } from './types.ts';
/** The slice of DSH's layout service used to keep global panels and workbenches mutually exclusive. */
export interface PanelLayout {
    readonly panelInfo: {
        getSnapshot(): {
            readonly activePanelId: string | null;
        };
        subscribe(listener: () => void): () => void;
    };
    selectPanel(panelId: null): void;
}
/**
 * A workbench is drawn over the main column, so a global panel (Plugins, Schedules, ...)
 * selected underneath it stays hidden. Keep the two exclusive in both directions:
 * selecting a panel closes the workbench, and opening a workbench clears the panel
 * selection so selecting the same panel again is a real change.
 * @returns a disposer for both subscriptions.
 */
export declare function bindPanelNavigation(service: WorkbenchService, layout: unknown): () => void;
