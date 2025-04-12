import http from "@/config/http";

export const userProfileUpdate = async({
      profileId,
      formData,
    }: {
      profileId: string;
      formData: FormData;
    }) => await http.put(`/api/user-profile/${profileId}`, formData)
  