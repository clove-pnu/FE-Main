export interface PodInfo {
  name: string;
  status: string;
  namespace: string
}

export interface Auth {
  isLogin: boolean;
}

export interface SignUpResponse {
  email: string;
}

export interface AccessToken {
  accessToken: string;
  accessTokenExpiresIn: number;
}

export interface TokenResponse extends AccessToken {
  grantType: string;
  refreshToken: string;
}

export interface Play {
  pid: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export interface DeployedPlay {
  pid: number;
  thumbnailUrl: string;
  title: string;
  playType: string;
  bookedSeatCount: number;
  totalSeatCount: number;
  status: string;
  deployDate: Date;
}

export interface DeployedPlayDetail {
  pid: number;
  thumbnailUrl: string;
  title: string;
  deployDate: Date;
  status: string;
  bookingStartDate: Date;
  bookingEndDate: Date;
  bookedSeatCount: number;
  totalSeatCount: number;
}

export interface TicketingPlayDetail {
  pid: number;
  thumbnailUrl: string;
  title: string;
  bookingStartDate: Date;
  bookingEndDate: Date;
  bookedSeatCount: number;
  totalSeatCount: number;
  startDate: Date;
  endDate: Date;
  price: number;
  cast: string;
  venue: string;
}

export interface Template {
  name: string;
  type: string;
  description: string;
}

export interface Ticket {
  seatInfo: {
    sid: number;
    site: string;
    column: number;
    seatNumber: number;
  };
}

export interface DeployPlayDetail {
  name: string;
  image: string;
  cast: string;
  description: string;
  venue: string;
  seatsAndPrices: string;
  eventTime: Date;
  startDate: Date;
  endDate: Date;
  bookingStartDate: Date;
  bookingEndDate: Date;
}
