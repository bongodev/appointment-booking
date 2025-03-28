export type Order = 'asc' | 'desc';

export interface AppointMentData {
  id: string;
  clientName: string;
  date: string;
  time: string;
  appointer: string;
  appointmentTitle: string;
  status: string;
  clientImgUrl: string;
  appointerImgUrl: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof AppointMentData;
  label: string;
  numeric: boolean;
}
