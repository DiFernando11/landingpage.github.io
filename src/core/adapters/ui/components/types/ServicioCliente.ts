export interface FloatingButtonProps {
  isRacha: boolean;
  setOpenChat: (open: boolean) => void;
  openChat: boolean;
}

export interface FloatingChatProps {
  setOpenChat: (open: boolean) => void;
  openChat: boolean;
}


export interface MessageProps {
    role: string;
    logo: string;
    alt: string;
    id: number;
    text: string | null;
  }
