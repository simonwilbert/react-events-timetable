export type EventSession = {
  from: Date;
  to: Date;
};

export type Event = {
  name: string;
  description: string;
  sessions: EventSession[];
  tags: Tag[];
  venue: Venue;
};

export type Venue = {
  name: string;
};

export type Tag = {
  name: string;
  type?: string;
};
