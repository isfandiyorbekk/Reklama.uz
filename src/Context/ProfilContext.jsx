import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const ProfilContext = createContext(null);

const API_URL = "https://reklama-backend-ax7j.onrender.com/api/announcements";

export const ProfilProvider = ({ children }) => {
  // Foydalanuvchi ma'lumotlari
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Foydalanuvchining e'lonlari
  const [announcements, setAnnouncements] = useState([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(false);
  const [announcementsError, setAnnouncementsError] = useState("");

  // Foydalanuvchining e'lonlarini backenddan olish
  const getMyAnnouncements = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAnnouncements([]);
      setAnnouncementsError("Tizimga kirish talab qilinadi.");
      setAnnouncementsLoading(false);
      return;
    }

    try {
      setAnnouncementsLoading(true);
      setAnnouncementsError("");

      const res = await fetch(`${API_URL}/my`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(
          result.message || "E'lonlarni olishda xatolik yuz berdi.",
        );
      }

      setAnnouncements(result.data || []);
    } catch (err) {
      console.error("Mening e'lonlarim xatosi:", err);
      setAnnouncementsError(
        err.message || "Server bilan bog'lanishda xatolik.",
      );
    } finally {
      setAnnouncementsLoading(false);
    }
  }, []);

  // Sana formatlash
  const formatDate = (dateString) => {
    if (!dateString) return "Sana mavjud emas";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "Sana mavjud emas";
    }

    return date.toLocaleDateString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Backenddan foydalanuvchi ma'lumotlarini olish
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          "https://reklama-backend-ax7j.onrender.com/api/auth/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) {
          if ([401, 403, 404].includes(res.status)) {
            localStorage.removeItem("token");
          }

          throw new Error("Foydalanuvchi ma'lumotlarini olishda xatolik");
        }

        const result = await res.json();

        const userData =
          result.user || result.data?.user || result.data || result;

        setUser(userData);
      } catch (error) {
        console.error("Profil xatoligi:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  // Foydalanuvchi ma'lumotlari yuklangandan keyin uning e'lonlarini olish
  useEffect(() => {
    if (loading) return;

    if (user) {
      getMyAnnouncements();
    } else {
      setAnnouncements([]);
      setAnnouncementsError("");
      setAnnouncementsLoading(false);
    }
  }, [user, loading, getMyAnnouncements]);

  // Foydalanuvchi ismi va avatar harfi
  const userName =
    user?.fullName ||
    user?.name ||
    user?.username ||
    user?.firstName ||
    "Foydalanuvchi";

  const avatarLetter = userName.charAt(0).toUpperCase();

  return (
    <ProfilContext.Provider
      value={{
        // Profil
        user,
        setUser,
        loading,
        setLoading,
        userName,
        avatarLetter,
        // Mening e'lonlarim
        announcements,
        setAnnouncements,
        announcementsLoading,
        announcementsError,
        getMyAnnouncements,
        formatDate,
      }}
    >
      {children}
    </ProfilContext.Provider>
  );
};

export const useProfil = () => {
  const context = useContext(ProfilContext);

  if (!context) {
    throw new Error(
      "useProfil faqat ProfilProvider ichida ishlatilishi mumkin!",
    );
  }

  return context;
};

export default ProfilContext;
