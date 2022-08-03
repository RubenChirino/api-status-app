interface StatusResponse {
  name?: string;
  success: boolean;
  hostname: string | null;
  message: string | null;
  time: number | null;
  error: string | null;
  status?: number;
}

export type { StatusResponse };
