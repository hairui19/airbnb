import { useSession } from "next-auth/react";

interface UserSession {
  user: {
    id: string;
    username: string;
    userProfileImageUrl: string;
  };
}

export const getUserSession = (): UserSession | undefined => {
  const { data: session } = useSession();

  if (session === null) return undefined;
  return {
    user: {
      id: session!.user!.id,
      username: session!.user!.username,
      userProfileImageUrl: session?.user?.image ?? "placeholder_image_url",
    },
  };
};
