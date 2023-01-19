export const Headers = {
	ConnectingIp: 'CF-Connecting-IP',
} as const;

export type DurableObjectFetch = (req: Request) => Promise<Response>;
export type DoFetch = DurableObjectFetch;
